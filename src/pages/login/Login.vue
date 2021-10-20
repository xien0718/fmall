<template>
  <div class="login">
    <!-- 标题 -->
    <h3 class="title">AS Flower Boutique</h3>
    <!-- 账号输入+正则验证 -->
    <form-validate ref="uname" :reg="reg.uname">
      <span slot="empty">请输入手机号</span>
      <span slot="legal">手机号格式正确</span>
      <span slot="illegal">手机号格式不正确，请重新输入</span>
    </form-validate>
    <!-- 密码输入+正则验证 -->
    <form-validate ref="pwd" :reg="reg.pwd" type="password">
      <span slot="empty">请输入密码</span>
      <span slot="legal">密码格式正确</span>
      <span slot="illegal">密码格式不正确，请重新输入</span>
    </form-validate>

    <!-- 账号登录 -->
    <van-button
      :disabled="isAccountDisabled"
      class="click-to-login"
      round
      type="info"
      @click="clickLogin"
      >立即登录</van-button
    >
    <!-- 微信登录 -->
    <van-button
      class="click-to-login"
      v-if="isWxBrowser()"
      round
      type="info"
      @click="clickWxLogin"
      >微信一键登录</van-button
    >
  </div>
</template>

<script>
import { mapMutations } from "vuex";
//引入封装好的登入和登出请求
import {
  login,
  getWxCode,
  getOpenIdAndToken,
  getWxUserInfo,
} from "network/login";
import { isWxBrowser } from "utils/wx-config";
//引入表单验证提示
import FormValidate from "components/formValidate/FormValidate";
//引入常量并使用
import * as config from "utils/config";
export default {
  name: "Login",
  components: {
    FormValidate,
  },
  data() {
    return {
      //虚拟dom是否渲染到真实dom
      isMounted: false,
      //登录账号密码
      loginInfo: {
        uname: "",
        pwd: "",
      },
      //定义账号密码正则
      reg: {
        uname:
          /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        pwd: [/^[A-Z][A-Za-z\d_-~\+\/\\\@\#\$\%\^\&]{5,15}$/, /\d/],
      },
    };
  },
  computed: {
    //当账号密码正则都验证成功后，立即登录按钮才可以点击
    isAccountDisabled() {
      if (this.isMounted) {
        return !(
          this.$refs.uname.promptType == 1 && this.$refs.pwd.promptType == 1
        );
      }
    },
  },
  created() {
    window.addEventListener("keyup", (e) => {
      if (e.keyCode == 13) {
        this.clickLogin();
      }
    });
  },
  mounted() {
    this.isMounted = true;
  },
  methods: {
    ...mapMutations(["updateUserInfo"]),
    //封装登录方法
    async _login(loginData) {
      //post请求发送账号密码给服务端，res即服务端响应结果
      let res = await login(loginData);
      //res.errorCode为0则说明账号存在且密码匹配，登录成功，此时保存token和用户信息到本地存储
      if (res && res.errorCode == 0) {
        //将birthday转换为2020/11/07格式再存储到vuex和localStorage中
        //毫秒数原本是字符串，*1隐式转换成数字
        res.data.user.birthday = new Date(
          res.data.user.birthday * 1
        ).toLocaleDateString();
        localStorage.setItem(config.TOKENKEY, JSON.stringify(res.data.token));
        localStorage.setItem(config.USERINFO, JSON.stringify(res.data.user));
        localStorage.setItem(config.USERID, JSON.stringify(res.data.user.id));

        //更新store中的用户信息
        this.updateUserInfo(res.data.user);
        //弹窗提示登录成功
        this.$toast.success("登录成功");
        //从会话存储sessionStorage中取出跳转到登录页之前的路由
        const redirectUrl = sessionStorage.getItem(config.REDIRECTURL);
        //判断redirectUrl是否有值，有值则跳转到该路由，无值则跳转到首页
        const skipTo = redirectUrl ? redirectUrl : "/home";
        //跳转至登录之前的页面
        this.$router.replace(skipTo);
      }
    },
    //封装账号验证方法，验证通过，调用封装好的账号登录方法
    clickLogin() {
      //如果账号登录按钮可以点击，即按钮的disabled为false，则说明账号密码(正则验证)已通过，则可以调用登录方法
      if (!this.isAccountDisabled) {
        this._login();
      }
    },
    //封装(微信授权登录)(获取微信用户信息)方法
    clickWxLogin() {
      //通过appid和url拿到微信服务器返回的code
      this.getWxCode();
      //从url中取出code
      let aPcode = this.$route.query.code;
      //获取access_token和openid
      this._getOpenIdAndToken(aPcode); //这里传入的是实参code
      let { access_token, openid } = JSON.parse(
        localStorage.getItem("infoThroughWxCode")
      );
      let lang = "zh_CN";
      this._getWxUserInfo({ access_token, openid, lang });
    },
    //封装方法：拿到微信服务器返回的access_token、openid
    async _getOpenIdAndToken(fPcode) {
      let res = await getOpenIdAndToken(fPcode); //这里是形参code
      if (res && !res.errcode) {
        localStorage.setItem("infoThroughWxCode", JSON.stringify(res));
      }
    },
    //封装方法：获取微信用户信息
    async _getWxUserInfo(params) {
      let res = await getWxUserInfo(params);
      console.log(1);
      if (res && !res.errcode) {
        console.log("请求微信用户信息成功");
        localStorage.setItem("wxUserInfo", JSON.stringify(res));
      } else {
        console.log("获取微信用户信息失败");
      }
    },
  },
  mixins: [
    {
      methods: {
        getWxCode,
        isWxBrowser,
      },
    },
  ],
};
</script>
<style lang="less" scoped>
</style>