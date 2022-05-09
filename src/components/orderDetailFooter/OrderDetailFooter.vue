<template>
  <div class="order-detail-footer">
    <slot name="left"></slot>
    <van-button
      v-for="btn in Object.values(btns)"
      :plain="btn.plain"
      :round="btn.round"
      :type="btn.type"
      :color="btn.color"
      class="btns"
      :key="btn.text"
      @click="handleFooterClick(btn)"
    >{{btn.text}}</van-button>
  </div>
</template>

<script>
import { ORDERBTNMETHODS } from "utils/orderStatus";
export default {
  name: "OrderDetailFooter",
  props: {
    btns: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  components: {},
  methods: {
    //处理order-detail页面底部的按钮点击
    handleFooterClick(btn) {}
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.order-detail-footer {
  background-color: #fff;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  .btns {
    height: 50px;
    margin-right: 15px;
  }
}
</style>