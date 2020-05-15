<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Home\Index.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-14 11:03:46
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-14 11:09:22
 -->
<template>
  <div>
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
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="less">
.footer_icon {
  i::before {
    display: inline-block;
    width: 30px;
    height: 30px;
    font-size: 30px;
  }
}
</style>
