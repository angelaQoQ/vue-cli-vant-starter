<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\components\Home\Book4.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 17:39:18
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-12 15:13:37
 -->
<template>
  <div class="home_book4" v-if=" bookInfo.items && bookInfo.items.length > 0">
    <!-- title -->
    <h2 class="book4h2">
      <span class="title">{{bookInfo.name}}</span>
      <span class="more">See more</span>
    </h2>

    <!-- books -->
    <div class="hide_bar_container">
      <div class="grid_container">
        <van-grid class="book4grid">
          <van-grid-item
            class="book4grid_item"
            v-for="(item,index) in bookInfo.items"
            :key="index"
            v-if=" ( index < 4)"
            :title="item.name"
            @click="handleOpenBook(item.id || item.bookId)"
          >
            <img class="book4img" :src="item.bannerUrl || item.cover" alt title="goodNovel" />
            <p class="bookname">{{item.name}}</p>
            <p class="author">{{item.author || ""}}</p>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeBook4",
  data() {
    return {
      name: "HomeBook4"
    };
  },
  props: ["bookInfo"],
  methods: {
    handleOpenBook(bookid) {
      console.log("bookId" + bookid);
      this.$router.push(`/bookinfo/${bookid}`)
    }
  }
};
</script>

<style lang="less">
.home_book4 {
  width: 100%;
  overflow: hidden;
  .book4h2 {
    text-align: left;
    .title {
      max-width: 220px;
      overflow: hidden;
      height: 48px;
      font-size: 22px;
      font-family: STIXGeneral-Bold, STIXGeneral;
      font-weight: bold;
      color: rgba(58, 74, 90, 1);
      line-height: 33px;
    }
    .more {
      float: right;
      margin-top: 10px;
      width: 60px;
      height: 12px;
      font-size: 12px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: bold;
      color: rgba(238, 55, 153, 0.8);
      line-height: 12px;
    }
  }
  .hide_bar_container {
    height: 244px;
    overflow: hidden;
    .grid_container {
      width: 100%;
      padding-bottom: 15px;
      overflow: scroll;
      .book4grid {
        width: 580px;
        .book4grid_item {
          float: left;
          .van-grid-item__content--center {
            padding: 0;
            [class*="van-hairline"]::after {
              border: none !important;
            }
          }
          .van-grid-item__content::after {
            border: none;
          }
          .book4img {
            width: 130px;
            height: 184px;
            box-shadow: 0px 6px 6px 0px rgba(29, 29, 31, 0.15);
            border-radius: 4px;
            border: 1px solid rgba(58, 74, 90, 0.1);
          }
          p {
            margin: 0;
            color: rgba(58, 74, 90, 1);
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            width: 130px;
            text-align: left;
          }
          .bookname {
            margin-top: 12px;
            height: 18px;
            font-size: 15px;
            line-height: 18px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .author {
            margin-top: 6px;
            height: 15px;
            font-size: 12px;
            line-height: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
