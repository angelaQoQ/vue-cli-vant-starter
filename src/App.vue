<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\App.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-11 19:58:14
 -->
<template>
  <div id="app">
    <router-view />

    <van-tabbar
      v-model="active"
      class="footer_icon"
      active-color="rgba(238, 55, 153, 1)"
      inactive-color="#000"
    >
      <van-tabbar-item replace to="/">
        <van-icon name="home-o" />
        <br />Books
      </van-tabbar-item>
      <van-tabbar-item replace to="/library">
        <van-icon name="shop-o" />
        <br />Library
      </van-tabbar-item>
      <van-tabbar-item replace to="/community">
        <van-icon name="comment-o" />
        <br />Community
      </van-tabbar-item>
      <van-tabbar-item replace to="/profile">
        <van-icon name="manager-o" />
        <br />Profile
      </van-tabbar-item>
    </van-tabbar>

    <van-loading v-show="showLoadding" vertical color="rgba(249, 67, 165, 1)">Loading</van-loading>
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from 'vuex'
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);

export default {
  data() {
    return {
      active: 0
    };
  },
  computed: {
    ...mapState(["showLoadding"])
  }
};
</script>
<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.footer_icon {
  i::before {
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 30px;
  }
}
.van-search__content {
  background-color: rgba(0, 0, 0, 0.05) !important;
}
</style>
