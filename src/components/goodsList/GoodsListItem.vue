<template>
  <div class="goods-list-item">
    <img :src="goodsListItem.base_info.main_image" alt />
    <h2 class="name">{{goodsListItem.base_info.product_name}}</h2>
    <h2 class="price">&yen;{{goodsListItem.base_info.format_sale_price}}</h2>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
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
.goods-list-item {
  box-shadow: 0 0 12px 3px #eee;
  font-size: 0;
  flex: 0 0 45%;
  padding-bottom: 80px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  color: #666666;
  .name {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
  }
  .price,
  .name {
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    font-size: 28px;
  }
  img {
    width: 100%;
  }
}
</style>