<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\components\Search\index.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 19:30:04
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-11 19:43:17
 -->
<template>
  <div class="search_tool">
    <van-search
      v-model="search"
      @search="onSearch"
      @cancel="onCancel"
      show-action
      placeholder="Search what you want"
      background="#fff"
      shape="round"
    >
      <template #action >
        <div @click="onSearch" class="search_btn">Search</div>
      </template>
    </van-search>
  </div>
</template>
<script>
export default {
  name: "search_tool",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSearch() {},
    onCancel() {}
  }
};
</script>
<style lang="less">
.search_tool {
  .search_btn {
    width: 43px;
    height: 19px;
    font-size: 13px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: rgba(238, 40, 102, 1);
    line-height: 19px;
  }
}
</style>
