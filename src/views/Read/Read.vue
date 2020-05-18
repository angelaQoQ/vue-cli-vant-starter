<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Read\Read.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-15 15:54:46
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-18 18:29:37
 -->
<template>
  <div class="read_page">
    <div class="book_name">
      The Reader View
      Headline 64
    </div>

    <div class="book_author">Author’s Name</div>

    <div class="chapter_name">Chapter Title 36</div>

    <div class="chapter_content" @click="showToolMenue = true">
      Book body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x heightBook body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x heightBook body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x heightBook body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x heightBook body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x heightBook body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x heightBook body 28. Merriweather Sans is a low-contrast semi-condensed sans-serif text typeface family designed to be pleasant to read at very small sizes. Merriweather Sans is traditional in feeling despite the modern shapes it has adopted for screens.
      Merriweather Sans is an evolving project and will be updated. As of now there are 8 styles: Light, Regular, Bold, and ExtraBold weights in Roman and Italic styles.
      There is also Merriweather, a serif version which closely harmonizes with the weights and styles of this sans-serif family.
      Designed by Eben Sorkin, Merriweather Sans features a large x height
    </div>
    <!-- 菜单1弹层 -->
    <van-popup
      class="menu1 mask"
      v-model="showToolMenue"
      position="bottom"
      :style="{ height: '20%' }"
    >
      <div class="percent">
        <!-- 控制条 -->
        <p class="title">{{readPercent.toFixed(2) + '%'}}</p>
        <progress-bar
          class="process_bar"
          width="100%"
          leftBg="rgba(238, 40, 102, 1)"
          bgc="rgba(0, 0, 0, 0.5)"
          ballBgc="rgba(255, 255, 255, .9)"
          height="4px"
          :percent="readPercent"
          @pbar-drag="handleBarDrag"
        ></progress-bar>
        <!-- 菜单按钮 -->
        <div class="menu_container">
          <img
            @click.self="handleClickShowChpter"
            class="menu_item"
            src="../../assets/images/icon_slices/icon_libary.png"
            alt
          />
          <img class="menu_item" src="../../assets/images/icon_slices/icon_font.png" alt />
          <img class="menu_item" src="../../assets/images/icon_slices/icon_reader_dark.png" alt />
          <img class="menu_item" src="../../assets/images/icon_slices/icon_reader_reply.png" alt />
        </div>
      </div>

      <div class="tools"></div>
    </van-popup>

    <!-- 菜单2弹层 -->
    <van-popup
      :class="['chapter_mask' , 'mask_radius' , {'default_color' : true}]"
      v-model="showChapterMenue"
      position="bottom"
      :style="{ height: '85%' }"
    >
      <!-- 章节列表 -->
      <div class="chapter_info" v-show="showChapterList">
        <!-- 章节头 -->
        <div class="head">
          <img src="../../assets/images/bookinfo/default_cover.png" alt title="GoodNovel" />
          <div class="right">
            <h2 class="bookname ddd1">Smashed to Pieces</h2>
            <div class="bookdetail ddd1">Book detail</div>
          </div>
        </div>
        <!-- 章节列表 -->
        <div class="chapter_list">
          <ul>
            <li
              :class="['chapter_item' , {'active_color':item.status == 1}]"
              v-for="(item, index) in chapterList"
              :key="index"
            >
              <p class="chapter_name ddd1">{{item.name}}</p>
              <span class="lock" v-if="item.status == 2">Locked</span>
              <span class="percent" v-if="item.status == 1">{{readPercent.toFixed(0) + '%'}}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 书籍信息 -->
      <div class="bookmark" v-show="!showChapterList">BookMark</div>

      <!-- 底部切换按钮 -->
      <div class="footer">
        <div :class="['list_btn' , {'active': showChapterList}]" @click="showChapterList = true">
          catalogue
          <br />
          <span></span>
        </div>
        <div
          :class="['bookmark_btn' , {'active':!showChapterList}]"
          @click="showChapterList = false"
        >
          bookmark
          <br />
          <span></span>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import ProgressBar from "@/components/util/ProgressBar.vue";
export default {
  name: "ReadPage",
  data() {
    return {
      showToolMenue: false, // 基本工具菜单弹窗
      showChapterMenue: false, // 章节列表菜单弹窗
      showChapterList: true, // 显示列表
      readPercent: 0, // 当前阅读百分比
      styleOption: {
        // 样式配置对象
        pageBg: [
          "rgba(251, 253, 255, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(254, 238, 210, 1)"
        ]
      },

      chapterList: [
        {
          name:
            "Cp1. Chapter titleCp1. Chapter titleCp1. Chapter titleCp1. Chapter titleCp1. Chapter title",
          status: 1, // 0 已读, 1 在读, 2未解锁
          id: 0
        }
      ]
    };
  },
  components: {
    ProgressBar
  },
  created() {
    let bookId = this.$route.params.bookid;
  },
  methods: {
    // ? 点击展示章节列表
    handleClickShowChpter() {
      this.showToolMenue = false; // 隐藏菜单1
      this.showChapterMenue = true; // 展示章节列表菜单
    },

    // ? 进度条控件阅读进度控制
    handleBarDrag(percent) {
      this.readPercent = percent;
    }
  }
};
</script>

<style lang="less">
// ?
.mask {
  background: rgba(34, 34, 34, 1);
  box-sizing: border-box;
  padding: 30px;
}

.mask_radius {
  background: rgba(34, 34, 34, 1);
  box-sizing: border-box;
  padding: 0 30px;
  border-radius: 22px 22px 0px 0px;
}

.read_page {
  box-sizing: border-box;
  padding: 44px 30px;
  font-family: Merriweather-Bold, Merriweather;

  .book_name {
    font-size: 32px;
    font-weight: bold;
    color: rgba(17, 17, 17, 1);
    line-height: 40px;
    margin-bottom: 12px;
  }
  .book_author {
    font-size: 14px;
    font-weight: normal;
    color: rgba(102, 102, 102, 1);
    line-height: 18px;
    margin-bottom: 36px;
  }

  .chapter_name {
    font-size: 18px;
    font-weight: bold;
    line-height: 23px;
    margin-bottom: 16px;
  }

  .chapter_content {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 25px;
    text-align: justify !important;
  }

  // !弹出层1
  .menu1 {
    .percent {
      .title {
        width: 108px;
        height: 12px;
        font-size: 12px;
        font-family: SourceHanSansCN-Regular, SourceHanSansCN;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 12px;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 14px;
      }
      .process_bar {
        margin-bottom: 18px;
      }
      .menu_container {
        width: 100%;
        height: 48px;
        line-height: 48px;
        overflow: hidden;
        padding-top: 12px;
        img.menu_item {
          float: left;
          width: 24px;
          height: 24px;
          margin-right: 66px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }
  }

  .default_color {
    color: rgba(255, 255, 255, 1);
  }

  .active_color {
    color: rgba(238, 40, 102, 1);
  }

  // !弹出层2
  .chapter_mask {
    // !章节列表
    .chapter_info {
      .head {
        padding-top: 20px;
        overflow: hidden;
        img {
          float: left;
          width: 34px;
          height: 48px;
          border-radius: 4px;
          border: 1px solid rgba(58, 74, 90, 0.1);
          margin-right: 12px;
        }
        .right {
          float: left;
          padding-top: 2px;
          margin-bottom: 12px;
          .bookname {
            width: 256px;
            height: 18px;
            font-size: 18px;
            font-family: SourceHanSansCN-Bold, SourceHanSansCN;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
            line-height: 18px;
            margin: 0;
            padding: 0;
            margin-bottom: 8px;
          }
          .bookdetail {
            width: 256px;
            height: 12px;
            font-size: 12px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.8);
            line-height: 12px;
          }
        }
      }
      .chapter_list {
        .chapter_item {
          width: 100%;
          height: 48px;
          line-height: 48px;
          position: relative;
          .chapter_name {
            font-size: 16px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
            line-height: 48px;
            padding: 0 14px 0 0;
            margin: 0;
          }
          .lock,
          .percent {
            position: absolute;
            top: 0;
            right: -30px;
            line-height: 48px;
            width: 42px;
            font-size: 12px;
            font-family: SourceHanSansCN-Medium, SourceHanSansCN;
            font-weight: 500;
          }
        }
      }
    }

    // !书籍标签
    .bookmark {
    }

    // !底部按钮
    .footer {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(34, 34, 34, 1);
      div {
        height: 80px;
        line-height: 60px;
        float: left;
        width: 50%;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: rgba(255, 255, 255, 1);
        position: relative;
        span {
          position: absolute;
          left: 50%;
          bottom: 26px;
          width: 20px;
          height: 4px;
          border-radius: 2px;
          margin-left: -10px;
        }
      }
      div.active {
        color: rgba(238, 40, 102, 1);
        span {
          background: rgba(238, 40, 102, 1);
        }
      }
    }
  }
}
</style>
