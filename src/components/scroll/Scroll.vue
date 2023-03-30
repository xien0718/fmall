<template>
  <div class="scroll">
    <!-- 视口 -->
    <div class="view-port">
      <!-- 滚动区域 -->
      <div @touchmove="touchMove" class="scroll-area"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  data() {
    return {};
  },
  components: {},
  methods: {
    touchMove() {
      console.log(11);
    },
  },
  mounted() {},
};
</script>

<style scoped>
</style>