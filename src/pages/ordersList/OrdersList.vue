<template>
  <div class="orders-list">
    <!-- 头部导航 -->
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="backToUser" />
      <div slot="mid">订单列表</div>
    </nav-bar>
    <!-- 订单tab -->
    <van-tabs class="orders-tab" v-model="active" color="#00b799">
      <van-tab :title="item.desc" :key="item.desc" v-for="item in orderCatetory"></van-tab>
    </van-tabs>
    <!-- 订单列表：商品卡片 -->
    <order-list-item
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
import { ORDERSTATUS, ORDERCATEGORY } from "utils/orderStatus";
import { getOrdersListData } from "network/ordersList";
import NavBar from "components/navbar/Navbar";
import OrderListItem from "components/orderListItem/OrderListItem";
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "OrdersList",
  data() {
    return {
      active: 0, //订单页当前活跃的tab
      orderCatetory: ORDERCATEGORY, //订单页tab数组，一个数组元素是一个tab
      orderList: []
    };
  },
  computed: {
    //从localStorage中取出订单商品卡片数据

    //当前活跃的tab展示哪些商品卡片
    isShowItem() {
      //如果等于0则都显示
      //不等于0则看爹中活跃的tab对应的order_status是否等于点击的商品卡片的order_status,等于则为true显示，不等于为false不显示
      return function name(item) {
        return this.active == 0
          ? true
          : item.order_status == ORDERCATEGORY[this.active].orderStatusShowing
          ? true
          : false;
      };
    },
    // ...mapState({ orderList: state => state.order.orderList }),
    //将当前商品卡片order_status对应的ORDERSTATUS中的信息(desc和button)传给子组件展示
    itemDescBtn() {
      return function(item) {
        return ORDERSTATUS[item.order_status];
      };
    }
  },
  components: {
    NavBar,
    OrderListItem
  },
  methods: {
    //引入vuex的order模块的mutations.updateOrderList更新订单列表方法
    ...mapMutations("order", ["updateOrderList"]),

    //引入vuex的order模块的mutations.delOrder删除订单方法
    ...mapMutations("order", ["delOrder"]),

    //封装方法：请求订单列表数据，请求下来以后存到vuex中共享
    async _getOrdersListData() {
      let res = await getOrdersListData();
      if (res && res.errorCode == 0) {
        //调用updateOrderList传入从服务端请求的用户订单列表数据，更新order模块的state
        this.updateOrderList(res.data.order_list);
        this.orderList = res.data.order_list;
      }
    },
    //返回用户页
    backToUser() {
      this.$router.back();
    },

    //点击商品卡片中的删除按钮，删除该卡片
    delOrderItem(delItemId) {
      //每一个order_id与点击的删除按钮的id是否相等，相等则拿到该index，删除该商品卡片
      let delIndex = this.orderList
        .map(item => item.order_id)
        .indexOf(delItemId);

      this.$delete(this.orderList, delIndex);

      // let getList = JSON.parse(localStorage.getItem("$vuexState")).order
      //   .orderList;
      // let setList = getList.filter(item => item.order_id !== delItemId);
      // localStorage.setItem("$vuexState", JSON.stringify(setList));
      // this.delOrder(delItemId);
    }
  },
  created() {
    this._getOrdersListData();
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>