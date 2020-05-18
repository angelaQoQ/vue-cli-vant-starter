<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Read\Read.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-15 15:54:46
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-15 18:19:04
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
    <van-popup class="menu1" v-model="showToolMenue" position="bottom" :style="{ height: '20%' }">
      <div class="percent">
        <p class="title"></p>
        <progress-bar
          width="100%"
          leftBg="yellow"
          bgc="#ccc"
          ballBgc="red"
          height="10px"
          @pbar-drag="handleBarDrag"
          @pbar-seek="handleBarSeek"
        ></progress-bar>
      </div>

      <div class="tools"></div>
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
      styleOption: {
        // 样式配置对象
        pageBg: [
          "rgba(251, 253, 255, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(254, 238, 210, 1)"
        ]
      }
    };
  },
  components: {
    ProgressBar
  },
  created() {
    let bookId = this.$route.params.bookid;
    console.log(bookId);
  },
  methods: {
    handleBarDrag(e) {
      console.log(e);
    },
    handleBarSeek(e) {
      console.log(e);
    }
  }
};
</script>

<style lang="less">
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
    color: rgba(17, 17, 17, 1);
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

  .menu1 {
    box-sizing: border-box;
    padding: 30px;
  }
}
</style>
