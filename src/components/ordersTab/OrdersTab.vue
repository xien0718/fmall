<template>
  <div class="orders-tab">
    <!-- 我的订单标题和右箭头 -->
    <div class="title">
      <div class="text">我的订单</div>
      <van-icon class="icon" name="arrow" @click="toOrder" />
    </div>
    <!-- 订单状态 -->
    <div class="status">
      <div
        class="status-item"
        v-for="item in orderCategory"
        :key="item.statusCode"
      >
        <van-icon class="icon" :name="item.icon" badge="0" />
        <div class="desc">{{ item.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ORDERCATEGORY } from "utils/orderStatus";
export default {
  name: "OrdersTab",
  data() {
    return {
      //订单分类
      orderCategory: [...Object.values(ORDERCATEGORY).slice(1, 5)],
    };
  },
  components: {},
  methods: {
    toOrder() {
      this.$router.push({
        path: "/order",
      });
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
.orders-tab {
  margin: 20px;
  background-color: #fff;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  padding: 20px;
  .title {
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    .icon {
      color: #969799;
    }
  }
  .status {
    display: flex;
    .status-item {
      text-align: center;
      flex: 1 0 auto;
      padding: 10px 0;
      .desc {
        font-size: 28px;
      }
    }
  }
}
</style>