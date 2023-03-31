import VueRouter from "vue-router";

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/Home'),
            meta: { isShow: true }
        },
        {
            name: 'search',
            path: '/search/:keyword',
            component: () => import('@/pages/Search'),
            meta: { isShow: true },
        },
        {
            path: '/login',
            component: () => import('@/pages/Login'),
            meta: { isShow: false }
        },
        {
            path: '/register',
            component: () => import('@/pages/Register')
            , meta: { isShow: false }
        },
        // 重定向，在项目跑起来的时候，访问/，立马让他定向到首页
        {
            path: '*',
            redirect: '/home'
        }
    ]
});

export default router;