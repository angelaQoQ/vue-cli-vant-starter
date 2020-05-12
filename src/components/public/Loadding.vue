<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\components\public\Loadding.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 19:44:02
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-11 19:45:42
 -->
<template>
  <div class="loadding">loadding...</div>
</template>
<script>
export default {
  name: "loadding",
  data() {
    return {
      name: "loadding"
    };
  }
};
</script>
<style lang="less">
.loadding {
  width: 48px;
  height: 48px;
  background: linear-gradient(
    141deg,
    rgba(255, 137, 184, 1) 0%,
    rgba(249, 67, 165, 1) 100%
  );
}
</style>
