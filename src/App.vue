<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\App.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:04:33
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-14 17:45:16
 -->
<template>
  <div id="app">
    <router-view />
    <login v-if="showLoginFlag"></login>
    <!-- <van-loading v-show="showLoadding" vertical color="rgba(249, 67, 165, 1)">Loading</van-loading> -->
  </div>
</template>
<script>
import Vue from "vue";
import { mapState } from "vuex";
import Login from '@/views/Login/Login.vue';

export default {
  data() {
    return {
      active: 0
    };
  },
  components:{
    Login
  },
  computed: {
    ...mapState(["showLoadding", "showGuid" , "showLoginFlag"])
  },
  mounted() {
    this.$store.dispatch("changeShowGuid", true);
  }
};
</script>
<style lang="less">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
.ddd1 {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.ddd2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
