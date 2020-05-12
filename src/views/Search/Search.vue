<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Search\Search.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 19:22:10
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-12 13:41:33
 -->
<template>
  <div class="search_page">
    <div class="top">
      <top-search></top-search>
    </div>

    <div class="search_content">
      <div class="main">
        <ul>
          <li v-for="(item,index) in searchResList" :key="index">
            <img class="left" src="../../assets/logo.png" alt title="GoodNovel" />
            <div class="right">
              <p class="author">Bill Buxton</p>
              <h2>Olve Kitteridge</h2>
              <p class="tag">
                <span>Genres</span>
                <span>Young</span>
              </p>
            </div>
            <div class="check" v-if="false">
              <van-checkbox
                @click="handleCheck"
                :value="true"
                checked-color="rgba(255, 106, 183, 1)"
              ></van-checkbox>
            </div>
          </li>
        </ul>
      </div>

      <div class="pagenation">
        <van-pagination
          v-model="pagenation.currentPage"
          @change="handleChangePage"
          :total-items="pagenation['page-count']"
          :show-page-size="pagenation['show-page-size']"
          force-ellipses
          prev-text="<"
          next-text=">"
        />
      </div>
    </div>
  </div>
</template>
<script>
import TopSearch from "@/components/Search/index.vue";

export default {
  name: "Search",
  data() {
    return {
      name: "Search",
      pagenation: {
        // 分页器配置
        currentPage: 1,
        "page-count": 120,
        "items-per-page": 10,
        "show-page-size": 5
      },
      searchResList:[],
      fakeSearchResList: [
        {
          action: "11000000076",
          actionType: "BOOK",
          author: "KatePercival",
          bookId: "11000000076",
          bookName:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          cover:
            "https://res.haiwaidz.com/books/076/11000000076/cover-3ea0yPfSLH.jpg",
          introduction:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          name:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware"
        },
        {
          action: "11000000076",
          actionType: "BOOK",
          author: "KatePercival",
          bookId: "11000000076",
          bookName:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          cover:
            "https://res.haiwaidz.com/books/076/11000000076/cover-3ea0yPfSLH.jpg",
          introduction:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          name:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware"
        },
        {
          action: "11000000076",
          actionType: "BOOK",
          author: "KatePercival",
          bookId: "11000000076",
          bookName:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          cover:
            "https://res.haiwaidz.com/books/076/11000000076/cover-3ea0yPfSLH.jpg",
          introduction:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          name:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware"
        },
        {
          action: "11000000076",
          actionType: "BOOK",
          author: "KatePercival",
          bookId: "11000000076",
          bookName:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          cover:
            "https://res.haiwaidz.com/books/076/11000000076/cover-3ea0yPfSLH.jpg",
          introduction:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          name:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware"
        },
        {
          action: "11000000076",
          actionType: "BOOK",
          author: "KatePercival",
          bookId: "11000000076",
          bookName:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          cover:
            "https://res.haiwaidz.com/books/076/11000000076/cover-3ea0yPfSLH.jpg",
          introduction:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware",
          name:
            "The Life and Amours of the Beautiful, Gay and Dashing Kate Percival / The Belle of the Delaware"
        }
      ]
    };
  },
  components: {
    TopSearch
  },
  mounted() {
    window.setTimeout(() => {
      this.$store.dispatch("changeShowLoadding", false);
      this.searchResList = this.fakeSearchResList;
    }, 5000);
  },
  methods: {
    // 修改页码
    handleChangePage(num) {
      console.log(num);
    },

    // 点击单选
    handleCheck(e) {
      console.log(e);
    }
  }
};
</script>
<style lang="less" scoped>
.search_page {
  padding:60px 0;
  .top{
    position: fixed;
    width: 100%;
    z-index: 9999;
    top:0;
  }

  .search_content {
    .main {
      margin-top: 5px;
      padding: 0 16px;
      li {
        overflow: hidden;
        position: relative;
        margin-bottom: 10px;
        .left {
          float: left;
          display: inline-block;
          width: 74px;
          height: 104px;
          margin-right: 12px;
        }
        .right {
          float: left;
          display: inline-block;
          width: 241px;
          height: 104px;
          text-align: left;
          .author {
            height: 16px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(58, 74, 90, 1);
            line-height: 16px;
            margin-bottom: 6px;
            margin-top: 8px;
          }
          h2 {
            height: 44px;
            font-size: 16px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: rgba(58, 74, 90, 1);
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 12px;
            margin-top: 0;
          }
          .tag {
            margin: 0;
            span {
              display: inline-block;
              width: 53px;
              height: 18px;
              background: rgba(244, 246, 248, 1);
              border-radius: 12px;
              font-size: 10px;
              font-family: PingFangSC-Medium, PingFang SC;
              font-weight: 500;
              color: rgba(58, 74, 90, 1);
              line-height: 18px;
              text-align: center;
            }
          }
        }
        .check {
          position: absolute;
          right: 0;
          top: 0;
          width: 20px;
          height: 104px;
          line-height: 104px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    .pagenation {
    }
  }
}
</style>
