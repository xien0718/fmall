<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang='less' scoped>
.nav-bar {
  display: flex;
  height: 120px;
  text-align: center;
  align-items: center;
  font-size: 42px;
  .left {
    width: 120px;
  }
  .mid {
    flex: 1 0 auto;
  }
  .right {
    width: 120px;
  }
}
</style>