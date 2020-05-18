<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Home\Home.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-11 15:11:51
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-18 10:46:50
 -->
<template>
  <div class="home">
    <!-- 搜索 -->
    <div class="search_right" @click="goSearchPage">
      <van-search
        v-model="search"
        @search="onSearch"
        @cancel="onCancel"
        show-action
        placeholder="Search what you want"
        background="rgba(244, 246, 248, 1)"
        shape="round"
      >
        <template #action>
          <div>
            <img
              class="search_right_icon"
              src="../../assets/images/icon/mipmap-hdpi/icon_task.png"
              alt
            />
          </div>
        </template>
      </van-search>
    </div>

    <!-- 主题内容 -->
    <div class="home_main">
      <!-- 轮播 -->
      <div class="loop">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item,index) in bookInfo[0].items" :key="index">
            <img v-lazy="item.bannerUrl" :loading="'../../assets/images/bookinfo/default_cover.png'" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- slide1 -->
      <div class="slide1">
        <van-tabs type="card">
          <van-tab v-for="(item,index) in slide1Data" :title="item.name" :key="index"></van-tab>
        </van-tabs>
      </div>

      <!-- 猜你喜欢 -->
      <div class="umlike">
        <book4 v-if="index!=0" v-for="(item, index) in bookInfo" :key="index" :bookInfo="item"></book4>
      </div>
    </div>
  </div>
</template>
<script>
import Book4 from "@/components/Home/Book4.vue";

export default {
  data() {
    return {
      name: "Home",
      search: "",
      slide1Data: [
        { name: "Genres", id: 0 },
        { name: "Genres", id: 0 },
        { name: "Genres", id: 0 },
        { name: "Genres", id: 0 },
        { name: "Genres", id: 0 }
      ],
      bookInfo: [
        {
          title: "You Might Like",
          books: [
            {
              action: "https://www.goodnovel.com/rankings?id=1208",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-TxP5vtZj6E.jpg",
              id: 1306,
              name: "Romance books",
              viewCount: 0,
              viewCountDisplay: "0"
            },
            {
              action: "https://www.goodnovel.com/rankings?id=1208",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-TxP5vtZj6E.jpg",
              id: 1306,
              name: "Romance books",
              viewCount: 0,
              viewCountDisplay: "0"
            },
            {
              action: "https://www.goodnovel.com/rankings?id=1208",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-TxP5vtZj6E.jpg",
              id: 1306,
              name: "Romance books",
              viewCount: 0,
              viewCountDisplay: "0"
            },
            {
              action: "https://www.goodnovel.com/rankings?id=1208",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-TxP5vtZj6E.jpg",
              id: 1306,
              name: "Romance books",
              viewCount: 0,
              viewCountDisplay: "0"
            }
          ]
        },
        {
          title: "Picks of the week",
          books: [
            {
              action: "https://www.facebook.com/groups/GoodNovels",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-fAfK26Eizo.jpg",
              id: 1307,
              name: "Facebook group",
              viewCount: 0,
              viewCountDisplay: "0"
            },
            {
              action: "https://www.facebook.com/groups/GoodNovels",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-fAfK26Eizo.jpg",
              id: 1307,
              name: "Facebook group",
              viewCount: 0,
              viewCountDisplay: "0"
            },
            {
              action: "https://www.facebook.com/groups/GoodNovels",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-fAfK26Eizo.jpg",
              id: 1307,
              name: "Facebook group",
              viewCount: 0,
              viewCountDisplay: "0"
            },
            {
              action: "https://www.facebook.com/groups/GoodNovels",
              actionType: "URL",
              bannerUrl:
                "https://res.goodnovel.com/res/item/item-fAfK26Eizo.jpg",
              id: 1307,
              name: "Facebook group",
              viewCount: 0,
              viewCountDisplay: "0"
            }
          ]
        }
      ]
    };
  },
  components: {
    Book4
  },
  methods: {
    async initData() {
      let res = await this.axios.post("/hwyc/home/index");
      console.log(res);
      if (res.status == 0) {
        this.bookInfo = res.data.pageColumns;
        this.$forceUpdate();
      }
    },
    onSearch() {
      console.log("search");
    },
    onCancel() {
      console.log("search cancle");
    },
    goSearchPage() {
      this.$router.push({ name: "search" });
    }
  },
  created() {
    this.initData();
  }
};
</script>
<style lang="less">
.home {
  background: rgba(244, 246, 248, 1);
  padding-bottom: 50px;

  .search_right {
    line-height: 100%;
    .search_right_icon {
      width: 24px;
      height: 24px;
    }
  }

  .home_main {
    background: rgba(255, 255, 255, 1);
    border-radius: 22px 0 0 0;
    padding-top: 20px;
    padding-left: 16px;
    min-height: 500px;
    .loop {
      width: 100%;
      height: 144px;
      overflow: hidden;
      margin-bottom: 10px;
      .van-swipe__track {
        height: 100%;
        .van-swipe-item {
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }

    .slide1 {
      /deep/ .van-tabs {
        padding-left: 0;
        padding-right: 0;
        .van-tabs__wrap{
          height: 34px;
        }
        .van-tabs__nav--card {
          margin: 0;
          border: none;
        }
        .van-tabs__nav--card {
          height: 34px;
        }
        .van-tab {
          width: 80px;
          height: 32px;
          line-height: 32px;
          box-shadow: 0px 2px 6px 0px rgba(237, 135, 66, 0.2);
          border-radius: 22px;
          border-right: none;
          margin-right: 12px;

          &:nth-child(1) {
            background: linear-gradient(
              287deg,
              rgba(234, 66, 243, 1) 0%,
              rgba(67, 123, 233, 1) 100%
            );
          }
          &:nth-child(2) {
            background: linear-gradient(
              287deg,
              rgba(243, 66, 66, 1) 0%,
              rgba(233, 67, 132, 1) 100%
            );
          }
          &:nth-child(3) {
            background: linear-gradient(
              287deg,
              rgba(243, 146, 66, 1) 0%,
              rgba(255, 113, 111, 1) 100%
            );
          }
          &:nth-child(4) {
            background: linear-gradient(
              287deg,
              rgba(66, 195, 243, 1) 0%,
              rgba(67, 233, 215, 1) 100%
            );
          }
          &:nth-child(5) {
            background: linear-gradient(
              287deg,
              rgba(234, 66, 243, 1) 0%,
              rgba(67, 123, 233, 1) 100%
            );
          }

          span {
            font-size: 14px;
            font-family: SourceHanSansCN-Bold, SourceHanSansCN;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
</style>
