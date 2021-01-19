import React from 'react';
import {connect} from 'dva';

const namespace = 'list';

//说明：第一个回调函数，作用：将page层和model层进行连接，返回model中的数据
//并且将返回的数据绑定到this.props
//接收的第二个函数，这个函数的作用，将定义的函数绑定到this.props中，调用model层中定义的函数
@connect((state) => {
    return {
        dataList: state[namespace].data,
        maxNum: state[namespace].maxNum
    }
}, (dispatch) => {  //dispatch作用：可以调用model层定义的函数
    return {   //将返回的函数绑定到this.props中
        add: function () {
            //通过dispatch调用model层的函数，type属性指定函数名，格式：namespace/函数名
            dispatch({
                type: namespace + "/addNewData"
            });
        },
        initData : () => { //新增初始化方法的定义
            dispatch({
                type: namespace + "/initData"
            });
        }

    }
})
class List extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     dataList: [1, 2, 3],
        //     maxNum: 3
        // };
    }

    componentDidMount(){
        this.props.initData(); //组件加载完后进行初始化操作
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.dataList.map((value, index) => {
                            return <li key={index}>{value}</li>
                        })
                    }
                </ul>
                <button onClick={() => {
                    // let maxNum = this.state.maxNum + 1;
                    // let newArr = [...this.state.dataList,maxNum];
                    // console.log(...this.state.dataList)
                    // this.setState({
                    //     dataList: newArr,
                    //     maxNum : maxNum
                    // });
                    this.props.add();
                }}>点我
                </button>
            </div>
        );
    }
}

export default List;