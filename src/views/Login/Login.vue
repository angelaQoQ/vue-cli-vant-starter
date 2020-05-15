<!--
 * @Description:
 * @FilePath: \vue-cli-vant-starter\src\views\Login\Login.vue
 * @Version: 1.0
 * @Autor: CuiGang
 * @Date: 2020-05-14 10:50:09
 * @LastEditors: CuiGang
 * @LastEditTime: 2020-05-15 14:14:16
 -->
<template>
  <div class="login_page">
    <div class="login_bg">
      <div class="login_top">
        <img src="../../assets/images/login/icon_skip.png" alt="skipLogin" title="goodNovel" />
        <span>Skip</span>
      </div>

      <div class="login_logo">
        <img src="../../assets/images/login/logo.png" alt />
        <p>Love all, believe a few</p>
      </div>

      <div class="login_group">
        <ul>
          <li @click.self="handleLoginFGT('facebook')">
            <img src="../../assets/images/login/icon_face.png" alt="facebook" />Facebook
          </li>
          <li @click.self="handleLoginFGT('google')">
            <img src="../../assets/images/login/icon_google.png" alt="Google" />Google
          </li>
          <li @click.self="handleLoginFGT('twitter')">
            <img src="../../assets/images/login/icon_twitter.png" alt="Twitter" />Twitter
          </li>
        </ul>
      </div>

      <div class="login_choose_type" @click="showLoginPopup = true">Continue with Email</div>

      <!-- 登陸彈出層 -->
      <van-popup
        class="login_pop"
        v-model="showLoginPopup"
        position="bottom"
        :style="{ height: '56%' }"
        closeable
        close-icon="close"
        close-icon-position="top-left"
        round
      >
        <div class="title">Join or log in</div>

        <div class="user_info">
          <!-- 用戶名 -->
          <van-field
            :class="['ipt', {'error':emailInfo.emailError} ]"
            v-model="emailInfo.email"
            placeholder="Example@email.com"
            type="email"
            label
            left-icon="envelop-o"
            :formatter="formatter"
            clickable
            :rules="[{ pattern:emailInfoExg.emailExg, message: emailInfoExg.emailExgMsg }]"
          />
          <!-- 密碼 -->
          <van-field
            :class="['ipt', {'error':emailInfo.pwdError} ]"
            v-model="emailInfo.password"
            placeholder="Enter Password"
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

        <div class="login_btn" @click="handleEmailLogin">Log in</div>
        <div class="login_btn" @click="handleShowRegisterMask">Register</div>
        <div class="forget_pwd">Forgot Password ？</div>
      </van-popup>

      <!-- 註冊彈出層 -->
      <van-popup
        class="login_pop"
        v-model="showRegisterPopup"
        position="bottom"
        :style="{ height: '54%' }"
        closeable
        close-icon="close"
        close-icon-position="top-left"
        round
      >
        <!-- 標題 -->
        <div class="title">Register</div>

        <!-- 註冊信息 -->
        <div class="user_info">
          <!-- 用戶名 -->
          <van-field
            :class="['ipt', {'error':emailInfo.emailError} ]"
            v-model="emailInfo.email"
            placeholder="Example@email.com"
            type="email"
            label
            left-icon="envelop-o"
            :formatter="formatter"
            clickable
            :rules="[{ pattern:emailInfoExg.emailExg, message: emailInfoExg.emailExgMsg }]"
          />
          <!-- 密碼 -->
          <van-field
            :class="['ipt', {'error':emailInfo.pwdError} ]"
            v-model="emailInfo.password"
            placeholder="Enter Password"
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

        <!-- 協議 -->
        <div class="detail_words">
          <ul>
            <li>
              <van-checkbox
                v-model="checkedInfo.one"
                checked-color="rgba(238, 55, 153, 1)"
                icon-size="16px"
              >I accept the conditions of the Terms of Use and agree to the processing of my personal data according to the Privacy Policy.</van-checkbox>
            </li>
            <li>
              <van-checkbox
                v-model="checkedInfo.two"
                checked-color="rgba(238, 55, 153, 1)"
                icon-size="16px"
              >I am 18 years old or older.</van-checkbox>
            </li>
            <li>
              <van-checkbox
                v-model="checkedInfo.three"
                checked-color="rgba(238, 55, 153, 1)"
                icon-size="16px"
              >I agree to receive Goodnovel's.</van-checkbox>
            </li>
          </ul>
        </div>

        <!-- 注册按钮 -->
        <div class="login_btn" @click="handleEmailRegister">Register</div>
      </van-popup>

      <!-- 忘记密码彈出層 -->
      <van-popup
        class="login_pop"
        v-model="showResetPWDPopup"
        position="bottom"
        :style="{ height: '54%' }"
        closeable
        close-icon="close"
        close-icon-position="top-left"
        round
      >
        <!-- 標題 -->
        <div class="title">Password recovery</div>

        <!-- 註冊信息 -->
        <div class="user_info">
          <!-- 用戶名 -->
          <van-field
            :class="['ipt', {'error':emailInfo.emailError} ]"
            v-model="emailInfo.email"
            placeholder="Example@email.com"
            type="email"
            label
            left-icon="envelop-o"
            :formatter="formatter"
            clickable
            :rules="[{ pattern:emailInfoExg.emailExg, message: emailInfoExg.emailExgMsg }]"
          />
        </div>
        <!-- 注册按钮 -->
        <div class="login_btn" @click="handleResetPWD">Reset password</div>
      </van-popup>
    </div>
  </div>
</template>
<script>
import { checkEmail, judgePassword } from "@/plugins/common.js";

export default {
  name: "LoginPage",
  data() {
    return {
      name: "LoginPage",
      showPWD: false, // 查看密碼
      showLoginPopup: false, // 登陸彈層
      showRegisterPopup: false, // 註冊彈層
      showResetPWDPopup: false, // 重置密码弹层
      // 账号密码信息
      emailInfo: {
        email: "",
        emailError: false,
        password: "",
        pwdError: false
      },
      // 账号密码检验规则及错误提示
      emailInfoExg: {
        emailExg: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        emailExgMsg: "郵箱格式要求:***",
        passwordExg: /^[\w_-]{6,16}$/,
        passwordExgMsg: "密碼格式要求:***"
      },
      // 注册时协议选择
      checkedInfo: {
        one: false,
        two: false,
        three: false
      }
    };
  },
  created() {
    this.handleGetFGT(); // 获取三方登录ID
  },
  methods: {
    // 三方登录---------------------------------------------------------------------------↓
    // 获取三方登录id
    async handleGetFGT() {
      let res = await this.axios.post("/hwyc/user/third/login/attrs", {
        device: "m"
      });

      if (res.status == 0) {
        this.initHelloFGT(res.data);
      }
    },
    // 初始化第三方登录id
    initHelloFGT(loginInfo) {
      this.$hello.init(
        {
          facebook: loginInfo.facebookId,
          google: loginInfo.googleId,
          twitter: loginInfo.twitterKey
        },
        { redirect_uri: loginInfo.redirectUrl }
      );
    },
    // 进行登录
    handleLoginFGT(type) {
      // 开启第三方登录成功监听
      this.$hello.on("auth.login", function(auth) {
        // Call user information, for the given network
        this.$hello(auth.network)
          .api("me")
          .then(function(r) {
            // Inject it into the container
            var label = document.getElementById("profile_" + auth.network);
            if (!label) {
              label = document.createElement("div");
              label.id = "profile_" + auth.network;
              document.getElementById("profile").appendChild(label);
            }
            label.innerHTML = '<img src="' + r.thumbnail + '" /> Hey ' + r.name;
          });
      });

      // fb google 处理
      this.$hello(type).login();
    },
    // 三方登录---------------------------------------------------------------------------↑

    // 邮箱登录---------------------------------------------------------------------------↓
    async handleEmailLogin() {
      let that = this;

      if (!checkEmail(that.emailInfo.email)) {
        that.emailInfo.emailError = true;
        return;
      } else {
        that.emailInfo.emailError = false;
      }

      if (!judgePassword(that.emailInfo.password)) {
        that.emailInfo.pwdError = true;
        return;
      } else {
        that.emailInfo.pwdError = false;
      }

      let res = await this.axios.post("/hwyc/user/login", {
        loginType: "email",
        oauthVerifier: "",
        accessToken: that.emailInfo.email,
        password: that.emailInfo.password
      });

      if (res.status == 0) {
        this.$toast("login suc");
        this.$store.dispatch("setLoginState", true); // 记录登录状态
        this.$store.dispatch("setUserInfo", res.data); // 存储用户数据
        this.$store.dispatch("showLogin", false); // 关闭登录页
        window.localStorage.setItem("userInfo", JSON.stringify(res.data)); // 本地存储用户数
        this.closeMask();
        this.$forceUpdate();
      }
    },

    // 邮箱登录---------------------------------------------------------------------------↑

    // 展示註冊彈窗
    handleShowRegisterMask() {
      this.showLoginPopup = false;
      this.showRegisterPopup = true;
    },
    // 郵箱註冊請求
    handleEmailRegister() {},
    // 郵箱登陸請求
    // 重置密码请求
    handleResetPWD() {},

    // 用戶名密碼去兩端空格
    formatter(val) {
      return val.trim();
    },

    // 关闭所有弹窗
    closeMask(){
      this.showLoginPopup = false;
      this.showRegisterPopup = false;
      this.showResetPWDPopup = false;
    },
  }
};
</script>
<style lang="less">
.login_page {
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  z-index: 99999;
  background: #fff;

  .login_bg {
    width: 100%;
    background: url("../../assets/images/login/login_bg.png") no-repeat top
      center;
    background-size: 100% auto;
    padding-top: 58px;
  }

  .login_top {
    text-align: right;
    height: 24px;
    font-size: 16px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    font-weight: 500;
    color: rgba(58, 74, 90, 1);
    line-height: 24px;
    margin-bottom: 62px;
    span {
      display: inline-block;
      width: 35px;
      height: 24px;
    }
    img {
      float: right;
      width: 12px;
      height: 24px;
      margin-right: 16px;
    }
  }
  .login_logo {
    width: 100%;
    margin-bottom: 140px;
    position: relative;
    img {
      width: 100%;
    }
    p {
      position: absolute;
      bottom: 0;
      width: 100%;
      text-align: center;
      margin: 0;
      padding: 0;
      height: 24px;
      line-height: 24px;
      font-size: 16px;
      font-family: SourceHanSansCN-Regular, SourceHanSansCN;
      font-weight: 400;
      color: rgba(58, 74, 90, 1);
    }
  }
  .login_group {
    ul {
      li {
        margin: 0 auto;
        width: 270px;
        height: 44px;
        line-height: 44px;
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
        position: relative;
        margin-bottom: 22px;
        img {
          position: absolute;
          width: 32px;
          height: 32px;
          left: 6px;
          top: 6px;
        }
      }
    }
  }
  .login_choose_type {
    width: 100%;
    height: 24px;
    font-size: 16px;
    font-family: SourceHanSansCN-Medium, SourceHanSansCN;
    font-weight: bold;
    color: rgba(238, 55, 153, 1);
    line-height: 24px;
    text-align: center;
  }
  .login_pop {
    overflow: hidden;
    padding-left: 20px;
    .title {
      height: 36px;
      font-size: 30px;
      font-family: STIXGeneral-Bold, STIXGeneral;
      font-weight: bold;
      color: rgba(58, 74, 90, 1);
      line-height: 36px;
      margin-top: 66px;
      margin-bottom: 32px;
    }
    .user_info {
      position: relative;
      .ipt {
        &.van-cell {
          width: 320px;
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
            &::before {
              font-size: 24px;
            }
          }
          .van-field__control {
            font-size: 16px;
            font-family: SourceHanSansCN-Regular, SourceHanSansCN;
            font-weight: 400;
            color: #3a4a5a;
            line-height: 44px;
            [placeholder] {
              color: rgba(58, 74, 90, 0.4);
            }
          }
        }
      }
      .show_pwd {
        width: 24px;
        height: 24px;
        position: absolute;
        bottom: 10px;
        right: 60px;
        &::before {
          font-size: 24px;
        }
      }
    }
    .login_btn {
      width: 270px;
      height: 44px;
      line-height: 44px;
      margin-left: 25px;
      margin-top: 22px;
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
    .forget_pwd {
      width: 158px;
      height: 24px;
      margin-left: 80px;
      font-size: 16px;
      font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      font-weight: bold;
      color: rgba(58, 74, 90, 1);
      line-height: 24px;
      margin-top: 16px;
    }
    .detail_words {
      margin: 16px 0;
      ul {
        li {
          margin-bottom: 12px;
          .van-checkbox {
            align-items: flex-start;
            .van-checkbox__label {
              width: 284px;
              font-size: 12px;
              font-family: SourceHanSansCN-Regular, SourceHanSansCN;
              font-weight: 400;
              color: rgba(58, 74, 90, 1);
              line-height: 16px;
              text-align: justify;
            }
          }
        }
      }
    }
  }
}
</style>
