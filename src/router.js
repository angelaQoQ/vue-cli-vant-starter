/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\router.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-12 14:43:50
 */
import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home/Home.vue')
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
const Search = () => import('@/views/Search/Search.vue')
const Bookinfo = () =>import ('@/views/Book/Bookinfo.vue');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bookinfo/:bookid',
      name: 'bookinfo',
      component: Bookinfo
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
