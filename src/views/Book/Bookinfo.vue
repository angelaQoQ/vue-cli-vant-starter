<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Book\Bookinfo.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-12 14:41:54
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-13 17:46:24
 -->
<template>
  <div class="bookinfo_page">
    <!-- 顶部书籍信息 -->
    <div class="top">
      <!-- 返回分享 -->
      <div class="tool">
        <img
          src="../../assets/images/bookinfo/icon_back.png"
          alt
          class="back"
          @click.self="handleGoBack"
        />

        <img
          src="../../assets/images/bookinfo/icon_share.png"
          alt
          class="share"
          @click.self="showShare = true"
        />
        <van-share-sheet
          v-model="showShare"
          title="Share with your friends"
          :options="shareOptions"
          @select="handleShare"
          cancel-text="Cancle"
        />
      </div>

      <!-- 书籍信息 -->
      <div class="bookinfo">
        <img
          src="../../assets/images/bookinfo/default_cover.png"
          v-lazy="bookInfo.cover"
          alt
          class="cover"
        />
        <div class="shadowbox">
          <img src="../../assets/images/bookinfo/cover_shadow.png" alt class="cover_shadow" />
        </div>
        <p class="bookname ddd1">{{bookInfo.bookName}}</p>
        <p class="author ddd1">{{bookInfo.editor}}</p>
        <p class="desc ddd2">{{bookInfo.introduction}}</p>
      </div>

      <!-- 完结时间 -->
      <van-divider
        :style="{ color: 'rgba(58, 74, 90, 1)', borderColor: 'rgba(58, 74, 90, 1)', padding: '0 2px' , fontSize:'10px', lineHeight:'14px',fontWeight:400}"
      >
        <div class="pub">
          Publisher: Morgan Kaufmann
          <br />Publish Date: 2007-4-11
        </div>
      </van-divider>
    </div>

    <div class="ad">
      <div class="bar"></div>

      <!-- 更多推荐 -->
      <book4 :bookInfo="morebook"></book4>

      <!-- 评论 -->
      <div class="comments">
        <h2>
          Comments
          <span>123 Reviews</span>
        </h2>

        <book-info-commen v-for="(item , index) in commenList" :key="index" :commenInfo="item"></book-info-commen>
      </div>

      <!-- 添加评论 -->
      <div class="add_comment">
        <van-field
          class="add_comment_input"
          v-model="sendCommen"
          autosize
          type="textarea"
          placeholder="What do you think?"
          :clickable="true"
          input-align="left"
          right-icon="envelop-o"
        />
      </div>
    </div>

    <!-- 阅读工具栏 -->
    <div class="read_tool">
      <img
        src="../../assets/images/bookinfo/icon_add2lib.png"
        alt
        class="add2lib"
        @click.self="handleAdd2Lib"
      />
      <img
        src="../../assets/images/bookinfo/icon_download.png"
        alt
        class="download"
        @click.self="handleSaveBook"
      />
      <a href="javascript:;" @click.self="handleRead">Read</a>
    </div>
  </div>
</template>
<script>
import Book4 from "@/components/Home/Book4.vue";
import BookInfoCommen from "@/components/Home/BookInfoCommen.vue";

export default {
  name: "BookInfo",
  data() {
    return {
      name: "BookInfo",
      bookInfo: {},
      morebook: {}, // 推荐书籍
      showShare: false,
      shareOptions: [
        { name: "Facebook", icon: "../../assets/images/base/face.png" },
        { name: "Google", icon: "/images/base/face.png" },
        { name: "Twitter", icon: "/images/base/face.png" }
      ],
      commenList: [], // 评论列表
      sendCommen: "" // 提交评论
    };
  },
  created() {
    this.$store.dispatch("changeShowGuid", false);
    const booId = this.$route.params.bookid;
    this.initData(booId); // 书籍数据
    this.initComments(booId); // 评论数据
  },
  components: {
    Book4,
    BookInfoCommen
  },
  methods: {
    async initData(bookId) {
      let res = await this.axios.post("/hwyc/book/detail", { bookId });
      if (res.status == 0) {
        this.bookInfo = res.data.book;
        this.morebook = {
          name: "recommends",
          items: res.data.recommends
        };
      } else {
        Toast(res.message || "Network Error");
      }
    },

    async initComments(bookId) {
      let res = await this.axios.post("/hwyc/comment/book/comments", {
        bookId,
        chapterId: 0,
        level: 1,
        order: "",
        pageNo: 1,
        pageSize: 10,
        sort: "",
        userId: 0
      });
      if (res.status == 0) {
        this.commenList = res.data.webBookComments.records;
        this.$forceUpdate();
      }
      console.log(res);
    },

    // 阅读
    handleRead() {
      console.log("READ");
    },

    // 后退
    handleGoBack() {
      this.$router.back();
    },
    //分享
    handleShare() {},

    // 添加书架
    handleAdd2Lib() {},

    // 缓存书籍
    handleSaveBook() {}
  }
};
</script>
<style lang="less">
.bookinfo_page {
  padding-bottom: 54px;
  background: url("../../assets/images/bookinfo/bookinfo_bg.png") repeat-y top
    center;
  background-size: 100%;
  .top {
    text-align: center;
    width: 100%;
    padding-bottom: 20px;
    .tool {
      width: 100%;
      height: 24px;
      padding: 0 16px;
      box-sizing: border-box;
      img {
        width: 24px;
        height: 24px;
        float: left;
        margin-top: 15px;
        &.share {
          float: right;
        }
      }
    }

    .bookinfo {
      .cover {
        width: 160px;
        height: 226px;
        font-size: 0;
        line-height: 0;
        border-radius:4px;
      }
      .shadowbox {
        height: 22px;
        overflow: hidden;
        margin-bottom: 12px;
        .cover_shadow {
          width: 164px;
          font-size: 0;
          line-height: 0;
          height: 44px;
          margin-top: -22px;
        }
      }
      p {
        margin: 0 auto;
      }
      .bookname {
        width: 205px;
        height: 28px;
        line-height: 28px;
        font-size: 16px;
        color: rgba(58, 74, 90, 1);
        margin-bottom: 8px;
        font-weight: bold;
      }
      .author {
        width: 100px;
        height: 14px;
        line-height: 14px;
        font-size: 12px;
        color: rgba(58, 74, 90, 1);
        margin-bottom: 16px;
      }
      .desc {
        width: 280px;
        line-height: 20px;
        font-size: 12px;
        color: rgba(58, 74, 90, 1);
        text-align: justify;
        height: 80px;
        overflow: hidden;
      }
    }

    .pub {
      width: 142px;
      height: 25px;
      font-size: 10px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      line-height: 14px;
    }
  }

  .ad {
    width: 100%;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px -10px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 22px 0 0 0;
    padding-left: 16px;
    box-sizing: border-box;
    margin-right: 0;
    padding-bottom: 40px;
    padding-top: 9px;
    .bar {
      width: 44px;
      height: 6px;
      background: rgba(0, 0, 0, 1);
      border-radius: 3px;
      opacity: 0.1;
      margin:0 auto;
    }

    .comments {
      width: 100%;
      h2 {
        height: 48px;
        font-size: 18px;
        font-family: STIXGeneral-Bold, STIXGeneral;
        font-weight: bold;
        color: rgba(58, 74, 90, 1);
        line-height: 48px;
        span {
          float: right;
          width: 200px;
          height: 15px;
          font-size: 12px;
          font-family: Helvetica;
          color: rgba(238, 55, 153, 0.8);
          line-height: 15px;
          margin-top: 20px;
          margin-right: 16px;
          text-align: right;
        }
      }
    }

    .add_comment .add_comment_input {
      width: 342px;
      background: rgba(244, 246, 248, 1);
      border-radius: 18px;
      padding: 0 10px;

      textarea {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(58, 74, 90, 1);
        line-height: 38px;
      }
    }
  }

  .read_tool {
    box-sizing: border-box;
    width: 100%;
    height: 54px;
    padding: 4px 21px;
    position: fixed;
    bottom: 0;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px -6px 4px 0px rgba(0, 0, 0, 0.05);
    img {
      width: 24px;
      height: 24px;
      position: absolute;
      top: 12px;
      &.add2lib {
        left: 21px;
      }
      &.download {
        right: 21px;
      }
    }
    a {
      display: block;
      width: 230px;
      height: 44px;
      line-height: 44px;
      background: linear-gradient(
        141deg,
        rgba(255, 137, 184, 1) 0%,
        rgba(249, 67, 165, 1) 100%
      );
      box-shadow: 0px 6px 6px 0px rgba(252, 37, 187, 0.2);
      border-radius: 22px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(255, 255, 255, 1);
      margin: 0 auto;
      text-align: center;
    }
  }
}
</style>
