/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\router.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-11 15:17:46
 */
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
