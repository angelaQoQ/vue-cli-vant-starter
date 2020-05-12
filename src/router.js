/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\router.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-11 19:21:51
 */
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
const Search = () => import('@/views/Search/Search.vue')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '*',
      name: 'about',
      component: About
    }
  ]
})
