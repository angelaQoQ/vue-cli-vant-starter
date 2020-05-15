/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\store.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-14 10:54:37
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
    showLoginFlag:false, // 显示登陆页面
  },
  mutations: {
    setSource(state, obj) {
      // 路由切换新建新建取消令牌，并写入store
      state.source = obj
    },
    CHANGESHOWLOADDING(state, target) { // loadding效果控制
      state.showLoadding = target || false;
    },
    CHANGESHOWGUID(state, target) { // 底部导航栏展示控制
      state.showGuid = target;
    },
    SHOWLOGIN(state){
      state.showLoginFlag = true;
      console.log(state.showLoginFlag);
    },
  },
  actions: {
    changeShowLoadding({ commit }, target) {
      commit('CHANGESHOWLOADDING', target);
    },
    changeShowGuid({ commit }, target) {
      commit('CHANGESHOWGUID', target);
    },
    showLogin({commit}){
      commit("SHOWLOGIN");
    }
  }
})
