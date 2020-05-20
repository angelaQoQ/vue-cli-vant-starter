<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Read\Read.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-15 15:54:46
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-20 19:08:36
 -->
<template>
  <div class="read_page" :style="themeOption">
    <!-- 排版计算区域-用户不可见 根据纵排版计算横排页数 -->
    <div class="can_not_be_seen" ref="cnbs">
      <div class="book_name">{{bookInfo.name}}</div>
      <div class="book_author">{{bookInfo.author}}</div>
      <div class="chapter_name">{{bookInfo.chapterName}}</div>
      <div class="chapter_content" :style="contentStyle">{{bookInfo.content}}</div>
    </div>

    <!-- 滚动阅读 -->
    <div class="scroll_type" @click="showToolMenue = true" v-if="slideType == 0">
      <div class="book_name">{{bookInfo.name}}</div>
      <div class="book_author">{{bookInfo.author}}</div>
      <div class="chapter_name">{{bookInfo.chapterName}}</div>
      <div class="chapter_content" :style="contentStyle">{{bookInfo.content}}</div>
    </div>

    <!-- 横屏轮播阅读 -->
    <div class="slide_type" @click="showToolMenue = true" v-if="slideType == 1">
      <van-swipe
        class="my-swipe"
        :loop="false"
        :show-indicators="false"
        :touchable="true"
        :stop-propagation="true"
        indicator-color="white"
      >
        <van-swipe-item v-for="(item , index) in slidePageNum" :key="index">
          <div
            class="slide_container"
            :style="{
            marginTop: index==0? -index*winHeight + 'px':-index*winHeight+40 + 'px' ,
            height: winHeight+'px',
            overFlow:'hidden',
          }"
          >
            <div class="book_name">{{bookInfo.name}}</div>
            <div class="book_author">{{bookInfo.author}}</div>
            <div class="chapter_name">{{bookInfo.chapterName}}</div>
            <div class="chapter_content" :style="contentStyle">{{bookInfo.content}}</div>
          </div>
        </van-swipe-item>
      </van-swipe>
    </div>

    <!-- 基础菜单弹层 -->
    <van-popup class="menu1 mask" v-model="showToolMenue" position="bottom">
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
          <img
            @click.self="handleClickTheme"
            class="menu_item"
            src="../../assets/images/icon_slices/icon_font.png"
            alt
          />
          <img class="menu_item" src="../../assets/images/icon_slices/icon_reader_dark.png" alt />
          <img class="menu_item" src="../../assets/images/icon_slices/icon_reader_reply.png" alt />
        </div>
      </div>

      <div class="tools"></div>
    </van-popup>

    <!-- 章节列表和书签弹层 -->
    <van-popup
      :class="['chapter_mask' , 'mask_radius' , {'default_color' : true}]"
      v-model="showChapterMenue"
      position="bottom"
      :style="{ height: '85%' }"
    >
      <!-- 章节头 -->
      <div class="head">
        <img src="../../assets/images/bookinfo/default_cover.png" alt title="GoodNovel" />
        <div class="right">
          <h2 class="bookname ddd1">Smashed to Pieces</h2>
          <div class="bookdetail ddd1">Book detail</div>
        </div>
      </div>

      <!-- 展示---章节列表 -->
      <div class="chapter_info" v-show="showChapterList">
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

      <!-- 展示---书籍信息 -->
      <div class="bookmark" v-show="!showChapterList">
        <!-- 有标签时 -->
        <ul class="chapter_list">
          <li class="chapter_item" v-for="(item, index) in bookMarkList" :key="index">
            <!-- 标题 -->
            <p class="chapter_name ddd1">{{item.name}}</p>
            <!-- 滑块 -->
            <van-swipe-cell
              class="mark_slide"
              v-for="(markItem,index2) in item.marks"
              :key="index2"
            >
              <!-- 书签详情 -->
              <div class="base">
                <img
                  class="mark"
                  src="../../assets/images/icon_slices/icon_bookmark.png"
                  alt
                  title="GoodNovel"
                />
                <p class="info ddd2">{{markItem.content}}</p>
              </div>
              <!-- 删除按钮 -->
              <template #right>
                <van-button
                  square
                  type="danger"
                  class="delete-button"
                  @click="delBookMark(markItem.id)"
                >
                  <img
                    class="icon"
                    src="../../assets/images/icon_slices/icon_trash.png"
                    alt
                    title="GoodNovel"
                  />
                  <p class="del">Delete</p>
                </van-button>
              </template>
            </van-swipe-cell>
          </li>
        </ul>

        <!-- 无标签时 -->
        <div class="bookmark_empty" v-if="bookMarkList.length==0">
          <img src="../../assets/images/bookinfo/empty_mark.png" alt title="GoodNovel" />
          <p>You haven't added any bookmarks yet</p>
        </div>
      </div>

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

    <!-- 字体主题弹层 -->
    <van-popup :class="['theme_mask' , 'mask_radius' ]" v-model="showThemeMenu" position="bottom">
      <!-- 日光条??? 实现不来, 控制不了客户端的屏幕亮度,原生可以-->
      <!-- <div class="light_bar">
        <img class="light_more" src="../../assets/images/icon_slices/icon_light_less.png" alt />
        <div class="bar">
          <van-slider v-model="lightPercent" bar-height="4px" active-color="#ee0a24" />
        </div>
        <img class="light_less" src="../../assets/images/icon_slices/icon_light_more.png" alt />
      </div>-->

      <!-- 字体条 -->
      <div class="font_bar">
        <div class="font_bg">
          <span :class="['white' , {active:themeType == 0}]" @click.self="themeType = 0">T</span>
          <span :class="['yellow' , {active:themeType == 1}]" @click.self="themeType = 1">T</span>
          <span :class="['black' , {active:themeType == 2}]" @click.self="themeType = 2">T</span>
        </div>
        <div class="font_sz">
          <img
            class="a1"
            src="../../assets/images/icon_slices/icon_a-.png"
            alt
            @click.self="handleReduceFontSize"
          />
          {{fontSize}}
          <img
            class="a2"
            src="../../assets/images/icon_slices/icon_a+.png"
            alt
            @click.self="handleRiseFontSize"
          />
        </div>
      </div>

      <!-- 行高,翻页条 -->
      <div class="font_lh">
        <div class="page_lh">
          <span :class="[{active:baseLineHeight == 1}]" @click.self="baseLineHeight = 1"></span>
          <span :class="[{active:baseLineHeight == 1.2}]" @click.self="baseLineHeight = 1.2"></span>
          <span :class="[{active:baseLineHeight == 1.4}]" @click.self="baseLineHeight = 1.4"></span>
        </div>
        <div class="page_slide">
          <span :class="['slide' , {active:slideType == 0}]" @click.self="slideType = 0">Slide</span>
          <span :class="['scroll' , {active: slideType == 1}]" @click.self="slideType = 1">Scroll</span>
        </div>
      </div>

      <!-- 字体类型条 -->
      <div class="font_fam_bar">
        <van-tabs :ellipsis="false" type="card" @change="handleChoseFontFamily">
          <van-tab v-for="(item,index) in fontFamilyOption" :title="item.name" :key="index"></van-tab>
        </van-tabs>
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
      bookInfo: {
        content:
          "and pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mumand pls let them do an DNa test and pls dont make the female lead so embarrassing if she really love this guy pls tell him everything so his child kan have an mum",
        name: "The Reader View Headline 64",
        author: "Author’s Name",
        chapterName: "Chapter Title 36"
      },
      contentStyle: {},
      slideType: 1, // 阅读方式: 0 scroll ; 1 slide
      winHeight: 0, // 屏幕浏览器显示区高度
      slidePageNum: 0, // 横屏滚动页面数量
      showToolMenue: false, // 基本工具菜单弹窗
      showChapterMenue: false, // 章节列表菜单弹窗
      showChapterList: true, // 显示列表--默认展示章节
      showThemeMenu: false, // 主题弹窗
      readPercent: 0, // 当前阅读百分比
      lightPercent: 0, // 亮度百分比
      fontSize: 18, // 默认字号
      baseLineHeight: 1, // 默认行高
      themeType: 0, // 主题 0白 1黄 2黑
      themeOption: {}, // 阅读页主题
      fontColorOption: [
        "rgba(51, 51, 51, 1)",
        "rgba(68, 51, 34, 1)",
        "rgba(255, 255, 255, 1)"
      ],
      backgroundOption: [
        "rgba(251, 253, 255, 1)",
        "rgba(254, 238, 210, 1)",
        "rgba(0, 0, 0, 1)"
      ],
      // 字体类型滑块
      ffName: "Merriweather-Bold", // 默认字体类型
      fontFamilyOption: [
        { name: "Vollkorn,serif", id: 0 },
        { name: "Merriweather-Bold, Merriweather", id: 0 },
        { name: "Roboto Slab", id: 0 },
        { name: "Merriweather", id: 0 },
        { name: "Roboto Slab", id: 0 }
      ],
      // 章节列表
      chapterList: [
        {
          name:
            "Cp1. Chapter titleCp1. Chapter titleCp1. Chapter titleCp1. Chapter titleCp1. Chapter title",
          status: 1, // 0 已读, 1 在读, 2未解锁
          id: 0
        }
      ],
      // 书签列表
      bookMarkList: [
        {
          name: "Cp1. Chapter titleCp1. ",
          marks: [
            {
              content:
                "123r life has become thThus, her life has become the season under the feetWei lingyue killed the woman Ji Shaoyun loved most. Thus, her life has become the season under the feet of the most humble maid. He wanted her to …",
              id: 1
            },
            {
              content:
                "321r life has become thThus, her life has become the season under the feetWei lingyue killed the woman Ji Shaoyun loved most. Thus, her life has become the season under the feet of the most humble maid. He wanted her to …",
              id: 1
            }
          ]
        },
        {
          name: "Cp2. Chapter titleCp2. ",
          marks: [
            {
              content:
                "raaaa life has become thThus, her life has become the season under the feetWei lingyue killed the woman Ji Shaoyun loved most. Thus, her life has become the season under the feet of the most humble maid. He wanted her to …",
              id: 1
            },
            {
              content:
                "r3333 life has become thThus, her life has become the season under the feetWei lingyue killed the woman Ji Shaoyun loved most. Thus, her life has become the season under the feet of the most humble maid. He wanted her to …",
              id: 1
            }
          ]
        }
      ]
    };
  },
  components: {
    ProgressBar
  },
  methods: {
    // ? 点击展示章节列表
    handleClickShowChpter() {
      this.closeAllMask();
      this.showChapterMenue = true; // 展示章节列表菜单
    },

    // ? 点击主题按钮
    handleClickTheme() {
      this.closeAllMask();
      this.showThemeMenu = true;
    },

    // ?修改字体大小
    handleReduceFontSize() {
      if (this.fontSize <= 14) return;
      this.fontSize -= 1;
    },
    handleRiseFontSize() {
      if (this.fontSize >= 28) return;
      this.fontSize += 1;
    },

    // ?修改字体类型
    handleChoseFontFamily(ffIndex, ffName) {
      this.themeOption.fontFamily = ffName;
      this.$forceUpdate();
    },

    // ? 进度条控件阅读进度控制
    handleBarDrag(percent) {
      this.readPercent = percent;
    },

    // ? 删除书签
    delBookMark(id) {
      console.log(id);
    },

    // ?关闭所有弹窗
    closeAllMask() {
      this.showToolMenue = false;
      this.showChapterMenue = false;
      this.showChapterList = false;
      this.showThemeMenu = false;
    },

    // !横版翻页获取页数
    getSlidePageNumber() {
      let cnbsHeight = this.$refs.cnbs.offsetHeight;
      let winHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
      this.winHeight = winHeight;
      this.slidePageNum = Math.ceil(cnbsHeight / winHeight);
      console.log(this.slidePageNum);
    }
  },
  created() {
    let bookId = this.$route.params.bookid;

    this.themeOption = {
      color: this.fontColorOption[this.themeType],
      background: this.backgroundOption[this.themeType],
      fontFamily: this.ffName
    };
  },
  mounted() {
    // 计算横版页码
    this.getSlidePageNumber();
  },
  watch: {
    themeType(v2, v1) {
      this.themeOption = {
        color: this.fontColorOption[v2],
        background: this.backgroundOption[v2]
      };
      this.$forceUpdate();
    },
    //! 行高和字号改变,重算横版页数
    baseLineHeight(v2, v1) {
      this.getSlidePageNumber();
      this.contentStyle = {
        fontSize: this.fontSize + "px",
        lineHeight: this.fontSize * 1.8 * this.baseLineHeight + "px"
      };
    },
    fontSize(v2, v1) {
      this.getSlidePageNumber();
      this.contentStyle = {
        fontSize: this.fontSize + "px",
        lineHeight: this.fontSize * 1.8 * this.baseLineHeight + "px"
      };
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
  padding: 0 16px;
  border-radius: 22px 22px 0px 0px;
}

.read_page {
  box-sizing: border-box;
  font-family: Merriweather-Bold, Merriweather;

  .book_name {
    font-size: 32px;
    font-weight: bold;
    line-height: 40px;
    margin-bottom: 12px;
  }
  .book_author {
    font-size: 14px;
    font-weight: normal;
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
    line-height: 25px;
    font-weight: 400;
    text-align: justify !important;
  }

  .default_color {
    color: rgba(255, 255, 255, 1);
  }

  .active_color {
    color: rgba(238, 40, 102, 1);
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

  // !弹出层2
  .chapter_mask {
    // !书籍信息
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

    // !章节列表
    .chapter_info {
      .chapter_list {
        .chapter_item {
          width: 100%;
          height: 48px;
          line-height: 48px;
          position: relative;
          .chapter_name {
            font-size: 16px;
            font-weight: 500;
            line-height: 48px;
            padding: 0 32px 0 0;
            margin: 0;
          }
          .lock,
          .percent {
            position: absolute;
            top: 0;
            right: -5px;
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
      .chapter_list {
        .chapter_item {
          width: 100%;
          line-height: 48px;
          position: relative;
          .chapter_name {
            font-size: 16px;
            font-weight: 500;
            line-height: 48px;
            padding: 0 14px 0 0;
            margin: 0;
          }

          .mark_slide {
            .base {
              overflow: hidden;
              img {
                float: left;
                width: 12px;
                height: 12px;
                margin-right: 12px;
                margin-top: 12px;
              }
              .info {
                float: left;
                width: 306px;
                height: 67px;
                font-size: 12px;
                font-weight: 400;
                color: rgba(255, 255, 255, 1);
                line-height: 18px;
                padding: 0;
                text-align: justify;
              }
            }
            .van-swipe-cell__right {
              right: -1px;
              .delete-button {
                height: 100%;
                background-color: rgba(255, 67, 67, 1);
                .icon {
                  width: 24px;
                  height: 24px;
                }
                .del {
                  width: 52px;
                  height: 14px;
                  font-size: 12px;
                  font-family: SourceHanSansCN-Normal, SourceHanSansCN;
                  font-weight: 400;
                  color: rgba(255, 255, 255, 1);
                  line-height: 15px;
                  margin: 0;
                  padding-top: 6px;
                }
              }
            }
          }
        }
      }

      .bookmark_empty {
        text-align: center;
        img {
          margin-top: 72px;
          width: 100px;
          height: 100px;
        }
        p {
          margin: 0;
          margin-top: 48px;
          height: 22px;
          font-size: 16px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 22px;
        }
      }
    }

    // !底部按钮
    .footer {
      position: fixed;
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

  // !主题弹层
  .theme_mask {
    padding: 8px 16px 0;
    box-sizing: border-box;

    // 亮度调节
    .light_bar {
      height: 60px;
      img {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        float: left;
        margin: 18px 10px;
        &:first-child {
          margin-left: 0px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
      .bar {
        margin: 0;
        padding: 0;
        padding-top: 28px;
        width: 272px;
        vertical-align: middle;
        float: left;
        .van-slider__button {
          width: 20px;
          height: 20px;
        }
      }
    }

    // 字体调节
    .font_bar {
      height: 60px;
      overflow: hidden;
      box-sizing: border-box;
      div {
        width: 50%;
        height: 60px;
        float: left;
        box-sizing: border-box;
      }
      .font_bg {
        overflow: hidden;
        padding-top: 12px;
        span {
          box-sizing: border-box;
          float: left;
          width: 36px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 16px;
          font-weight: bold;
          border-radius: 50%;
          background: rgba(251, 253, 255, 1);
          margin-right: 24px;
          &:last-child {
            margin: 0;
          }
        }
        span.active {
          border: 2px solid rgba(238, 40, 102, 1);
          color: rgba(238, 40, 102, 1);
        }
        span.white {
          background-color: #fff;
          color: #000;
        }
        span.yellow {
          background: rgba(254, 238, 210, 1);
          color: #000;
        }
        span.black {
          background-color: #000;
          color: rgba(255, 255, 255, 1);
        }
      }
      .font_sz {
        height: 48px;
        background: rgba(0, 0, 0, 1);
        border-radius: 22px;
        margin: 6px 0;
        padding: 0 16px;
        padding-top: 12px;
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        color: rgba(255, 255, 255, 1);
        line-height: 22px;
        img {
          width: 24px;
          height: 24px;
        }
        img.a1 {
          float: left;
        }
        img.a2 {
          float: right;
        }
      }
    }

    // 行高,翻页方式
    .font_lh {
      box-sizing: border-box;
      height: 60px;
      overflow: hidden;
      div {
        float: left;
        width: 50%;
        padding-top: 12px;
      }
      .page_lh {
        span {
          float: left;
          width: 36px;
          height: 36px;
          background-color: aqua;
          margin-right: 24px;
          &:first-child {
            background: url("../../assets/images/icon_slices/icon_lh3.png")
              no-repeat;
            background-position: center center;
            background-size: 24px 24px;
            &.active {
              background: url("../../assets/images/icon_slices/icon_lh3_active.png")
                no-repeat;
              background-position: center center;
              background-size: 24px 24px;
            }
          }
          &:nth-child(2) {
            background: url("../../assets/images/icon_slices/icon_lh1.png")
              no-repeat;
            background-position: center center;
            background-size: 24px 24px;
            &.active {
              background: url("../../assets/images/icon_slices/icon_lh1_active.png")
                no-repeat;
              background-position: center center;
              background-size: 24px 24px;
            }
          }
          &:last-child {
            margin-right: 0;
            background: url("../../assets/images/icon_slices/icon_lh2.png")
              no-repeat;
            background-position: center center;
            background-size: 24px 24px;
            &.active {
              background: url("../../assets/images/icon_slices/icon_lh2_active.png")
                no-repeat;
              background-position: center center;
              background-size: 24px 24px;
            }
          }
          &.active {
            border-radius: 50%;
            border: 2px solid rgba(238, 40, 102, 1);
          }
        }
      }
      .page_slide {
        overflow: hidden;
        span {
          float: right;
          width: 62px;
          height: 36px;
          border-radius: 22px;
          background: rgba(0, 0, 0, 0.5);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255, 255, 255, 1);
          text-align: center;
          line-height: 36px;
          &:first-child {
            float: left;
            margin-left: 24px;
          }
        }
        span.active {
          color: rgba(238, 40, 102, 1);
          border: 2px solid rgba(238, 40, 102, 1);
        }
      }
    }

    // 字体类型调节
    .font_fam_bar {
      height: 60px;
      padding-top: 18px;
      box-sizing: border-box;
      /deep/ .van-tabs {
        padding-left: 0;
        padding-right: 0;
        .van-tabs__wrap {
          height: 36px;
        }
        .van-tabs__nav--card {
          margin: 0;
          border: none;
          height: 36px;
          background: rgba(34, 34, 34, 1);
        }
        .van-tab {
          padding: 0 6px;
          height: 32px;
          line-height: 32px;
          border-radius: 22px;
          border-right: none;
          margin-right: 12px;
          background-color: rgba(0, 0, 0, 1);
          &.active {
            border: 2px solid rgba(238, 40, 102, 1);
            span {
              color: rgba(238, 40, 102, 1);
            }
          }
          span {
            font-size: 12px;
            color: rgba(255, 255, 255, 1);
            white-space: nowrap;
          }
        }
      }
    }
  }

  // !排版用区域
  .can_not_be_seen {
    position: fixed;
    z-index: -9999;
    background-color: red;
    top: 0;
    left: 0;
    visibility: hidden;
  }

  // !横版单个容器
  .slide_container,
  .scroll_type,
  .can_not_be_seens {
    box-sizing: border-box;
    padding: 44px 30px;
  }
}
</style>
