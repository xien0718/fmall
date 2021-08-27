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
import { mapState, mapMutations } from "vuex";
import Tabbar from "components/tabbar/Tabbar";
export default {
  name: "App",
  components: {
    Tabbar
  },
  computed: {
    ...mapState(["count1"])
  },
  mounted() {},
  methods: {
    ...mapMutations(["increment"])
  }
};
</script>

<style lang="less" scoped>
//样式中设置的都是pc端的px，移动端实际px要除以2
@import "assets/css/resset.css";
#app {
  // height: 100vh;
  background-color: #f8f8f8;
  // box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  // color="#00b799"
}
</style>
