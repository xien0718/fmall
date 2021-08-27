<template>
  <div class="goods-types">
    <div class="goods-types-item" v-for="item in goodsTypes" :key="item.title">
      <van-icon class="icon" :name="item.iconName" :color="item.color" />
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsTypes",
  props: {
    goodsTypes: {
      type: Array,
      required: true,
      default() {
        return [];
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
.goods-types {
  display: flex;
  background-color: #f8f8f8;
  justify-content: space-evenly;
  .goods-types-item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    flex-basis: 46%;
    height: 140px;
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
    font-size: 36px;
    font-weight: 700;
    color: #666666;
    .icon {
      margin-right: 20px;
      font-size: 60px;
    }
  }
}
// .goods-types的亲子带第一个和最后一个加border-radius
.goods-types > div:first-of-type {
  border-radius: 15px 0 0 15px;
}
.goods-types > div:last-of-type {
  border-radius: 0 15px 15px 0;
}
</style>