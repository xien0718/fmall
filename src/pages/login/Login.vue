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

    <van-button
      :disabled="isDisabled"
      class="click-to-login"
      round
      type="info"
      @click="clickToLogin"
    >立即登录</van-button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
//引入封装好的登入和登出请求
import { login } from "network/login";
//引入表单验证提示
import FormValidate from "components/formValidate/FormValidate";
//引入常量并使用
import * as config from "utils/config";
export default {
  name: "Login",
  components: {
    FormValidate
  },
  data() {
    return {
      //虚拟dom是否渲染到真实dom
      isMounted: false,
      //登录账号密码
      loginInfo: {
        uname: "",
        pwd: ""
      },
      //定义账号密码正则
      reg: {
        uname: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
        pwd: [/^[A-Z][A-Za-z\d_-~\+\/\\\@\#\$\%\^\&]{5,15}$/, /\d/]
      }
    };
  },
  computed: {
    //当账号密码正则都验证成功后，立即登录按钮才可以点击
    isDisabled() {
      if (this.isMounted) {
        return !(
          this.$refs.uname.promptType == 1 && this.$refs.pwd.promptType == 1
        );
      }
    }
  },
  created() {
    window.addEventListener("keyup", e => {
      console.log(e);
      if (e.keyCode == 13) {
        this.clickToLogin();
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
        localStorage.setItem(config.TOKENKEY, res.data.token);
        localStorage.setItem(config.USERINFO, res.data.user);
        localStorage.setItem(config.USERID, res.data.user.id);

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
    //封装验证方法，验证通过，调用封装好的登录方法
    clickToLogin() {
      //如果登录按钮可以点击，即按钮的disabled为false，则说明账号密码(正则验证)已通过，则可以调用登录方法
      if (!this.isDisabled) {
        this._login();
      }
    }
  }
};
</script>
<style lang="less" scoped>
</style>