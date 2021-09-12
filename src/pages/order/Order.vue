<template>
  <div class="order">
    <!-- 头部导航 -->
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="backToUser" />
      <div slot="mid">订单列表</div>
    </nav-bar>
    <!-- 订单tab -->
    <van-tabs class="orders-tab" v-model="active" color="#00b799">
      <van-tab :title="item.desc" :key="item.desc" v-for="item in orderCatetory"></van-tab>
    </van-tabs>
    <!-- 订单商品列表-->
    <order-list class="order-list" :activeTab="active"></order-list>
  </div>
</template>

<script>
import { ORDERSTATUS, ORDERCATEGORY } from "utils/orderStatus";
import { getOrderListData } from "network/order";
import NavBar from "components/navbar/Navbar";
import OrderList from "components/orderList/OrderList";
import { mapMutations } from "vuex";
export default {
  name: "Order",
  data() {
    return {
      active: 0, //订单页当前活跃的tab的index
      orderCatetory: ORDERCATEGORY //订单页tab数组，一个数组元素是一个tab
    };
  },
  computed: {},
  components: {
    NavBar,
    OrderList
  },
  methods: {
    //引入vuex的order模块的mutations.updateOrderList更新订单列表方法
    ...mapMutations("order", ["updateOrderList"]),

    //引入vuex的order模块的mutations.delOrder删除订单方法
    ...mapMutations("order", ["delOrder"]),

    //封装方法：请求订单列表数据，请求下来以后存到vuex中共享
    async _getOrderListData() {
      let res = await getOrderListData();
      if (res && res.errorCode == 0) {
        //调用updateOrderList传入从服务端请求的用户订单列表数据，更新order模块的state
        this.updateOrderList(res.data.order_list);
      }
    },
    //返回用户页
    backToUser() {
      this.$router.back();
    }
  },
  created() {
    this._getOrderListData();
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>