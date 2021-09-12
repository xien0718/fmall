<template>
  <div class="info-card">
    <!-- 标题部分 -->
    <div class="title">
      <slot name="top">
        <div>标题</div>
      </slot>
    </div>
    <!-- 内容部分 -->
    <div class="content">
      <slot name="mid">
        <div>内容</div>
      </slot>
    </div>
    <!-- 结算部分 -->
    <div class="account">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoCard",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.info-card {
  background-color: #fff;
  font-size: 28px;
  color: #2b2b2b;
  width: 92%;
  margin: 0 auto;
  border-radius: 20px;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  .title {
    border-bottom: 4px solid #ededea;
  }
  .title,
  .content {
    padding: 20px;
  }
}
</style>