var routes = [
    { path: '/log', component: log() }
]
var router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})
new Vue({
    el: '#app',
    router: router,
    data: {
        activeIndex: '1',
        activeIndex2: '1',
        isUseIndex: true
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
        }
    }
})