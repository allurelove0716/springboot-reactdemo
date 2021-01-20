//导出一个对象，暂时设置为空对象，后面再填充内容
export default {
    antd:{},
    dva:{},
    routes:[{
        path:'/',
        component:'../layouts', //配置布局路由
        routes: [{
            path: '/myTabs',
            component: './myTabs'
        },{
            path: '/user',
            routes: [
                {
                    path: '/user/list',
                    component: './user/UserList'
                },
                {
                    path: '/user/add',
                    component: './user/UserAdd'
                }
            ]
        }]
    }]

};
