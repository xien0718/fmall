<template>
  <div class="order-list">
    <order-list-item
      class="order-list-item"
      v-if="isShowItem(item)"
      @delOrderItem="delOrderItem"
      v-for="item in orderList"
      :key="item.product_list.item_id"
      :orderListItem="item"
      :itemDescBtn="itemDescBtn(item)"
    ></order-list-item>
  </div>
</template>

<script>
import OrderListItem from "./OrderListItem";
import { ORDERSTATUS, ORDERCATEGORY } from "utils/orderStatus";
import { mapState, mapMutations } from "vuex";
export default {
  name: "OrderList",
  props: ["activeTab"],
  data() {
    return {
      active: 0 //订单页当前活跃的tab
    };
  },
  components: {
    OrderListItem
  },
  computed: {
    //使用vuex中保存的订单列表数据来渲染orderList
    ...mapState({ orderList: state => state.order.orderList }),
    //将当前商品卡片order_status对应的ORDERSTATUS中的信息(desc和button)传给子组件展示
    itemDescBtn() {
      return function(item) {
        return ORDERSTATUS[item.order_status];
      };
    },
    //当前活跃的tab展示哪些商品卡片
    isShowItem() {
      //如果等于0则都显示
      //不等于0则看爹中活跃的tab对应的order_status是否等于点击的商品卡片的order_status,等于则为true显示，不等于为false不显示
      return function name(item) {
        return this.activeTab == 0
          ? true
          : item.order_status ==
            ORDERCATEGORY[this.activeTab].orderStatusShowing
          ? true
          : false;
      };
    }
  },
  methods: {
    ...mapMutations("order", ["delOrder"]),
    //点击商品卡片中的删除按钮，删除该卡片
    delOrderItem(delItemId) {
      this.delOrder(delItemId);
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>