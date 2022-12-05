<template>
  <div class="pop-up">
    <div class="outside">
      <div class="inside"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PopUp",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="less" scoped>
@keyframes pop-up {
  0% {
    height: 0;
  }
  100% {
    height: 100vh;
  }
}
.pop-up {
  width: 100%;
  height: 100vh;
  background-color: black;
  animation-name: pop-up;
  animation-duration: 1s;
}
</style>
