/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\main.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-11 17:49:54
 */
import Vue from 'vue'
import './plugins/axios'
import 'amfe-flexible'

import App from './App.vue'
import router from './router'
import store from './store'

// Vant配置
import "@/plugins/vant.js"


Vue.config.productionTip = false

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
