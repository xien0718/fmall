<template>
  <van-cell-group class="cell-wrap" inset>
    <van-cell class="cell" :title="title" is-link :value="content" />
  </van-cell-group>
</template>

<script>
export default {
  name: "Cell",
  props: {
    title: {
      type: String,
      default: "标题"
    },
    content: {
      type: String,
      default: "内容"
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.cell-wrap {
  margin: 0 20px;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  .cell {
    padding: 20px;
  }
}
</style>