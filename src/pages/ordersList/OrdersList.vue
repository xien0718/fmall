<template>
  <div class="orders-list">
    <!-- 头部导航 -->
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="backToUser" />
      <div slot="mid">订单列表</div>
    </nav-bar>
    <!-- 订单tab -->
    <van-tabs class="orders-tab" v-model="active" color="#00b799" @click="ordersTabItemClick">
      <van-tab :title="item.desc" :key="item.statusCode" v-for="item in orderCatetory"></van-tab>
    </van-tabs>
    <!-- <van-tabs @click="onClick">
      <van-tab :title="title">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
    </van-tabs>-->
    <!-- 订单列表：商品卡片 -->
    <order-list-item
      v-for="item in ordersList"
      :key="item.product_list.item_id"
      :ordersListItem="item"
    ></order-list-item>
  </div>
</template>

<script>
import { ORDERCATEGORY } from "utils/orderStatus";
import { getOrdersListData, get } from "network/ordersList";
import NavBar from "components/navbar/Navbar";
import OrderListItem from "components/orderListItem/OrderListItem";
export default {
  name: "OrdersList",
  data() {
    return {
      active: 0,
      orderCatetory: Object.values(ORDERCATEGORY),
      ordersList: [],
      activeOrderTab: 0 //订单页当前展示的tab对应的orderList的数组元素orderListItem.order_status
    };
  },
  computed: {},
  components: {
    NavBar,
    OrderListItem
  },
  methods: {
    //封装方法：请求订单列表数据
    async _getOrdersListData() {
      let res = await getOrdersListData();
      if (res && res.errorCode == 0) {
        this.ordersList = res.data.order_list;
      }
    },
    //返回用户页
    backToUser() {
      this.$router.back();
    },
    //点击的分类对应的
    ordersTabItemClick(index, item) {
      //item是title
      this.activeOrderTab = this.orderCatetory[index].activeOrderTab;
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