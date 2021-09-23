<template>
  <div class="address">
    <div class="default-message">请添加收货地址</div>
    <van-button
      type="primary"
      class="add-address"
      color="#00b799"
      @click="toAddAddress"
      >新增</van-button
    >
  </div>
</template>
<script>
export default {
  name: "Address",
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {
    toAddAddress() {
      this.$router.push({
        path: "/addaddress",
      });
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.address {
  .add-address {
    width: 96%;
    display: block;
    margin: 0 auto;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 20px;
  }
}
</style>