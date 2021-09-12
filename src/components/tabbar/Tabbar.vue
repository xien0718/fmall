<template>
  <van-tabbar route class="tab-bar">
    <van-tabbar-item
      class="tab-tar-item"
      v-for="item in tabbarData"
      replace
      :to="item.path"
      :icon="item.icon"
      :key="item.path"
    >{{item.title}}</van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: "mainTabbar",
  data() {
    return {
      tabbarData: [
        {
          path: "/home",
          icon: "wap-home-o",
          title: "首页"
        },
        {
          path: "/found",
          icon: "eye-o",
          title: "发现"
        },
        {
          path: "/user",
          icon: "user-circle-o",
          title: "我的"
        }
      ]
    };
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.tab-bar {
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
}
</style>