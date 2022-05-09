<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view />
    </keep-alive>
    <router-view v-else />
    <tabbar v-if="$route.meta.showTabbar" />
  </div>
</template>

<script>
import Tabbar from "components/tabbar/Tabbar";
export default {
  name: "App",
  components: {
    Tabbar
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
//样式中设置的都是pc端的px，移动端实际px要除以2   #00b799
@import "assets/css/resset.css";
@import "//at.alicdn.com/t/font_2894940_6mtid8ammhy.css";
@import "assets/css/iconfont.css";
</style>
