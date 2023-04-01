import VueRouter from "vue-router";

// 先把VueRouter原型对象的push先保存一份,但是备份在了window上，所以this指向window
let orginPush = VueRouter.prototype.push;

// 第一个额参数，告诉push方法，往哪里跳
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        orginPush.call(this, location, resolve, reject);
    } else {
        orginPush.call(this.location, () => { }, () => { })
    }
}

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/Home'),
            meta: { isShow: true }
        },
        {
            name: 'search',
            path: '/search/:keyword?',
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