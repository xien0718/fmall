<template>
  <div>
    <!-- 头部导航 -->
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="toDetail" />
      <span slot="mid">填写收货信息</span>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/navbar/Navbar";
export default {
  name: "FillReceivingInfo",
  data() {
    return {};
  },
  components: {
    NavBar,
  },
  computed: {},
  methods: {
    toDetail() {
      this.$router.back();
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
</style>