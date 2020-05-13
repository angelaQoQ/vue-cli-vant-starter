/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\store.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-13 13:47:26
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const CancelToken = axios.CancelToken

export default new Vuex.Store({
  state: {
    source: CancelToken.source(),
    showLoadding: true, // 显示loadding
    showGuid:true, // 显示底部导航
  },
  mutations: {
    setSource(state, obj) {
      // 路由切换新建新建取消令牌，并写入store
      state.source = obj
    },
    CHANGESHOWLOADDING(state, target) {
      state.showLoadding = target || false;
    },
    CHANGESHOWGUID(state, target) {
      state.showGuid = target;
    }
  },
  actions: {
    changeShowLoadding({ commit }, target) {
      commit('CHANGESHOWLOADDING', target)
    },
    changeShowGuid({ commit }, target) {
      commit('CHANGESHOWGUID', target)
    },
  }
})
