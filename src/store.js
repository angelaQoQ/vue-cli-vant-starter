/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\store.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-15 12:07:10
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
    IsLogined:false, // 用户登录状态
    userInfo:{}, // 用户信息数据
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
    SHOWLOGIN(state , target){ // 展示登录页
      state.showLoginFlag = target || false;
      console.log(state.showLoginFlag);
    },
    SETLOGINSTATE(state , target){  // 设置全局登录状态
      state.IsLogined = target;
    },
    SETUSERINFO(state, target){ // 存储用户登录数据
      state.userInfo = target
    },
  },
  actions: {
    changeShowLoadding({ commit }, target) {
      commit('CHANGESHOWLOADDING', target);
    },
    changeShowGuid({ commit }, target) {
      commit('CHANGESHOWGUID', target);
    },
    showLogin({commit} , target){
      commit("SHOWLOGIN" , target);
    },
    setLoginState({commit} , target){
      commit('SETLOGINSTATE' , target);
    },
    setUserInfo( {commit} , target ){
      commit('SETUSERINFO' , target);
    },
  }
})
