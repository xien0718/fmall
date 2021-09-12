<template>
  <div class="order-detail-card">
    <div class="image">
      <img :src="product_listItem.main_image" alt />
    </div>
    <div class="info">
      <div class="title">{{product_listItem.product_name}}</div>
      <div class="price">
        <span class="unit-price">&yen;{{product_listItem.format_product_price}}</span>
        <span class="amount">&times;{{product_listItem.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetailCard",
  props: {
    //订单详情页-商品信息栏-商品卡片
    product_listItem: {
      type: Object,
      default() {
        return {};
      }
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
.order-detail-card {
  display: flex;
  .image {
    margin: 0 30px 0 10px;
    width: 120px;
    height: 120px;
    overflow: hidden;
    border-radius: 20px;
    img {
      width: 180px;
      transform: translate(-30px, -10px);
    }
  }
  .info {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .price {
      display: flex;
      justify-content: space-between;
      .amount {
      }
    }
  }
}
</style>