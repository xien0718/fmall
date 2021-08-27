<template>
  <div class="a">
    <h3>page a</h3>
    <van-button type="primary" @click="logout">退出登录</van-button>
  </div>
</template>

<script>
import * as config from "../utils/config";
import { logout } from "network/login";
export default {
  methods: {
    // 点击按钮发送退出登录请求
    async _logout() {
      let res = await logout();
      this.$toast("退出登录成功");
      //退出登录的请求成功后，清除本地token和用户信息,然后跳转到登录页
      if (res && res.errorCode == 0) {
        this.clearCache();
        this.$router.push("/login");
      }
    },
    /**
     * @desc 清除本地存储的token和用户信息
     */
    clearCache() {
      let keys = [config.TOKENKEY, config.USERINFO];
      keys.map(key => localStorage.removeItem(key));
    }
  }
};
</script>