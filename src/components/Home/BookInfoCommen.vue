<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\components\Home\BookInfoCommen.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-13 15:31:49
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-13 16:18:39
 -->
<template>
  <div class="bookinfo_commen">
    <div class="comment_top">
      <img src="../../assets/images/bookinfo/bookinfo_bg.png" v-lazy="commenInfo.userAvatar" alt />
      <p>
        <span class="author ddd1">{{commenInfo.userNickname || "visitor"}}</span>
        <span class="time ddd1">{{commenInfo.ctime || ""}}</span>
      </p>
    </div>

    <div class="comment">
      <p>{{commenInfo.content || "ops, something is wrong with this comment"}}</p>
    </div>

    <div class="like">
      <img src="../../assets/images/bookinfo/icon_like.png" alt class="like" />{{commenInfo.likeNum || 0}}
      <img src="../../assets/images/bookinfo/icon_chat.png" alt class="chat" />{{commenInfo.replyNum || 0}}
    </div>
  </div>
</template>
<script>
export default {
  name: "BookInfoCommen",
  props:["commenInfo"],
  created(){
    console.log(this.commenInfo);

  },
  data() {
    return {
      name: "BookInfoCommen"
    };
  }
};
</script>
<style lang="less">
.bookinfo_commen {
  width: 318px;
  background: rgba(244, 246, 248, 1);
  border-radius: 22px;
  padding: 11px 12px;
  margin-bottom: 18px;
  .comment_top {
    margin-bottom: 10px;
    img {
      float: left;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      margin-right: 8px;
    }
    p {
      margin: 0;
      padding: 0;
      span {
        display: block;
        font-family: PingFangSC-Medium, PingFang SC;
        color: rgba(58, 74, 90, 1);
      }
      .author {
        width: 260px;
        height: 18px;
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
      }
      .time {
        width: 260px;
        height: 14px;
        font-size: 10px;
        font-weight: 400;
        line-height: 14px;
      }
    }
  }

  .comment {
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(58, 74, 90, 1);
    line-height: 16px;
    margin-bottom: 16px;
    p {
      margin: 0;
      padding: 0;
    }
  }

  .like {
    line-height: 24px;
    vertical-align: middle;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(58, 74, 90, 1);
    img {
      width: 24px;
      height: 24px;
    }
    .chat {
      margin-left: 26px;
      vertical-align: middle;
    }
  }
}
</style>
