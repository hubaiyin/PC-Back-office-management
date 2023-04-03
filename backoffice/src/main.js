import Vue from 'vue'
import VueRouter from 'vue-router'
import router from '@/router/'
import App from './App.vue'
import store from '@/store'
import '@/mock/mockServe'

// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav);

Vue.use(VueRouter);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
