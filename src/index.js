var menu = [
    {
        label: '帐户安全',
        page: 'acount'
    },
    {
        label: '网络配置',
        page: 'network'
    },
    {
        label: '数据记录',
        children: [
            { label: '病人信息', page: 'patient' },
            { label: '设备信息', page: 'equipment' },
            { label: '预约信息', page: 'order' },
            { label: '日志信息', page: 'log' }
        ],
        page: 'dataRecort'
    },
    {
        label: '功能配置',
        page: 'action'
    },
    {
        label: '时间同步',
        page: 'async'
    },
    {
        label: '软升级',
        page: 'softUpdate'
    },
    {
        label: '关于',
        page: 'about'
    }
]
var Data = {
    template: '<router-view></router-view>'
}

var routes = [
    {
        name: 'data',
        path: '/data',
        component: Data,
        children: [
            { path: 'log', component: log(), name: 'log' },
            { path: 'patient', component: patient(), name: 'patient' },
            { path: 'equipment', component: equipment(), name: 'equipment' }
        ]
    },
    {
        name: 'about',
        path: '/about',
        component: about()
    },
    {
        name: 'network',
        path: '/network',
        component: network()
    },
    {
        name: 'action',
        path: '/action',
        component: action()
    },
    {
        name: 'async',
        path: '/async',
        component: asyncComponent()
    },
    {
        name: 'acount',
        path: '/acount',
        component: acount()
    }
]
var router = new VueRouter({
    routes// (缩写) 相当于 routes: routes
})
new Vue({
    el: '#app',
    router: router,
    data: {
        activeIndex: '1',
        activeIndex2: '1',
        isUseIndex: true,
        menu: menu
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        setPage(page) {
            this.$router.push({ 'name': page })
        }
    },
    created() {
    }
})