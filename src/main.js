/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\main.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-18 10:56:49
 */
import Vue from 'vue'
import './plugins/axios'
import 'amfe-flexible'
// Vant配置
import "@/plugins/vant.js"

import App from './App.vue'
import router from './router'
import store from './store'

// import "@/plugins/vconsole.js"

//? 三方登录
import HelloJs from 'hellojs';
Vue.prototype.$hello = HelloJs;

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  Vue.prototype.$toast.clear()
  const CancelToken = Vue.axios.CancelToken
  store.state.source.cancel && store.state.source.cancel()
  store.commit('setSource', CancelToken.source())
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
