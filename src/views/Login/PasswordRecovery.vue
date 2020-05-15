<!--
 * @Description:重置密码页
 * @FilePath: \vue-cli-vant-starter\src\views\Login\PasswordRecovery.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-14 17:14:29
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-14 17:39:02
 -->
<template>
  <div class="password_recovery_page">
    <!-- 标题 -->
    <div class="title">
      <img src="../../assets/images/bookinfo/icon_back.png" alt="back" title="goodNovel" />
      Password recovery
    </div>

    <!-- 重置密码 -->
    <div class="user_info">
      <!-- 密码1 -->
      <van-field
        :class="['ipt', {'error':emailInfo.pwdError} ]"
        v-model="emailInfo.password1"
        placeholder="New Password"
        :type="showPWD ? 'password' : 'text'"
        label
        left-icon="smile-o"
        :formatter="formatter"
        clickable
        :rules="[{ pattern:emailInfoExg.passwordExg, message: emailInfoExg.passwordExgMsg }]"
      />
      <!-- 查看密碼 -->
      <van-icon
        class="show_pwd show_pwd1"
        :name="showPWD ? 'eye-o' : 'browsing-history'"
        @click="showPWD = !showPWD"
      />

      <!-- 密碼2 -->
      <van-field
        :class="['ipt', {'error':emailInfo.pwdError} ]"
        v-model="emailInfo.password2"
        placeholder="Confirm new password"
        :type="showPWD ? 'password' : 'text'"
        label
        left-icon="smile-o"
        :formatter="formatter"
        clickable
        :rules="[{ pattern:emailInfoExg.passwordExg, message: emailInfoExg.passwordExgMsg }]"
      />
      <!-- 查看密碼 -->
      <van-icon
        class="show_pwd"
        :name="showPWD ? 'eye-o' : 'browsing-history'"
        @click="showPWD = !showPWD"
      />
    </div>

    <!-- 按钮 -->
    <div class="login_btn" @click="handleResetPWD">Reset password</div>
  </div>
</template>
<script>
export default {
  name: "PasswordRecovery",
  data() {
    return {
      name: "PasswordRecovery",
      showPWD: false, // 查看密码1
      emailInfo: {
        password1: "",
        password2: "",
        pwdError: ""
      },
      emailInfoExg: {
        passwordExg: /^[\w_-]{6,16}$/,
        passwordExgMsg: "密码错误:***"
      }
    };
  },
  methods: {
    formatter(val) {
      return val.trim();
    },
    handleResetPWD() {}
  }
};
</script>
<style lang="less">
.password_recovery_page {
  padding-top: 44px;
  .title {
    width: 360px;
    height: 54px;
    line-height: 54px;
    position: relative;
    text-align: center;
    font-size: 18px;
    font-family: STIXGeneral-Bold, STIXGeneral;
    font-weight: bold;
    color: rgba(58, 74, 90, 1);
    margin-bottom: 32px;
    img {
      position: absolute;
      width: 24px;
      height: 24px;
      left: 16px;
      top: 16px;
    }
  }

  .user_info {
    position: relative;
    box-sizing: border-box;
    width: 304px;
    margin: 0 auto;
    margin-bottom:34px;
    .ipt {
      margin-bottom: 12px;
      &.van-cell {
        height: 44px;
        border-bottom: 1px solid rgba(208, 211, 216, 1);
        margin: 0;
        padding: 0;
        padding-left: 8px;
        line-height: 44px;
        &.error {
          color: rgba(248, 69, 69, 1);
          border-bottom: 1px solid rgba(248, 69, 69, 1);
        }
        i {
          line-height: 44px;
          margin-right: 4px;
          color: rgba(58, 74, 90, 0.4);
          &::before {
            font-size: 24px;
          }
        }
        .van-field__control {
          font-size: 16px;
          font-family: SourceHanSansCN-Regular, SourceHanSansCN;
          font-weight: 400;
          color: rgba(58, 74, 90, 0.4);
          line-height: 44px;
        }
      }
    }
    .show_pwd {
      width: 24px;
      height: 24px;
      position: absolute;
      bottom: 10px;
      right: 0px;
      &::before {
        font-size: 24px;
      }
      &.show_pwd1 {
        top: 10px;
      }
      i {
        color: rgba(58, 74, 90, 0.4);
      }
    }
  }

  .login_btn {
    width: 270px;
    height: 44px;
    line-height: 44px;
    margin: 0 auto;
    text-align: center;
    background: linear-gradient(
      141deg,
      rgba(255, 137, 184, 1) 0%,
      rgba(249, 67, 165, 1) 100%
    );
    box-shadow: 0px 6px 6px 0px rgba(252, 37, 187, 0.2);
    border-radius: 22px;
    font-size: 18px;
    font-family: SourceHanSansCN-Bold, SourceHanSansCN;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
  }
}
</style>
