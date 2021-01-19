import request from '../util/request';
export default {
    namespace:'list',
    state:{
        data: [],
        maxNum: 0
    },
    reducers:{  //定义一些函数
        addNewData:function (state,result){    //state:更新之前的状态数据
            if(result.data){ //判断result中的data是否存在，如果存在，说明是初始化数据，直接返回
                return result.data;
            }
            let maxNum = state.maxNum + 1;
            let newArr = [...state.data,maxNum];

            //通过return返回更新后的数据
            return {
                data: newArr,
                maxNum : maxNum
            };
        }
    },
    effects: { //新增effects配置，用于异步加载数据
        *initData(params, sagaEffects) { //定义异步方法
            const {call, put} = sagaEffects; //获取到call、put方法
            const url = "/ds/list"; // 定义请求的url
            let data = yield call(request, url); //执行请求
            yield put({ // 调用reducers中的方法
                type : "addNewData", //指定方法名
                data : data //传递ajax回来的数据
            });
        }
    }
}