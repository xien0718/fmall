<template>
  <div class="goods-list" gutter="20">
    <goods-list-item v-for="item in goodsList" :goodsListItem="item" :key="item.base_info.item_id"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    GoodsListItem
  },
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.goods-list {
  // padding: 0 20px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>