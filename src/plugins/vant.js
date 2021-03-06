/*
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\plugins\vant.js
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 17:47:56
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-18 20:37:15
 */
import Vue from 'vue'
import { CheckboxGroup, Popup, Field, Divider, ShareSheet, Lazyload, Swipe, SwipeItem, Toast, Icon, Search, Tab, Tabs, Grid, GridItem, Loading, Pagination, Checkbox } from 'vant'
import { Tabbar, TabbarItem, Progress, SwipeCell, Card, Button, Slider } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Toast);
Vue.use(Icon);
Vue.use(Search);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Loading);
Vue.use(Pagination);
Vue.use(Checkbox);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload, {
  preLoad: 1.3,
  attempt: 1
});
Vue.use(ShareSheet);
Vue.use(Divider);
Vue.use(Field);
Vue.use(Popup);
Vue.use(CheckboxGroup);
Vue.use(Progress);
Vue.use(SwipeCell);
Vue.use(Card);
Vue.use(Button);
Vue.use(Slider);
