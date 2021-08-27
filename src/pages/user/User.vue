<template>
  <div class="user">
    <!-- 头部 -->
    <nav-bar class="header">
      <div slot="mid">AS Flower Boutique</div>
    </nav-bar>
    <!-- 用户头像、用户昵称、购物车按钮 -->
    <div class="personal">
      <!-- 头像 -->
      <div class="avatar">
        <van-image fit="cover" round width="80" height="80" :src="user.avatar" />
      </div>
      <!-- 昵称 -->
      <div class="nick-name">{{user.nick_name}}</div>
      <!-- 购物车 -->
      <div class="cart">
        <van-icon class="cart-icon" name="shopping-cart-o" color="#ffffff" badge="0" />
      </div>
    </div>
    <!-- 商品类型：收花日历和近期福利 -->
    <goods-types class="goods-types" :goods-types="goodsTypes"></goods-types>
    <!--我的订单 -->
    <orders-tab></orders-tab>
    <!-- 联系我们 -->
    <cell class="contact-us" title="联系我们" content="客服电话"></cell>
    <!-- 在线客服 -->
    <cell class="custom-service" title="在线客服" content></cell>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBar from "components/navbar/Navbar";
import Cell from "components/cell/Cell";
import OrdersTab from "components/ordersTab/OrdersTab";
import GoodsTypes from "components/goodsTypes/GoodsTypes";
export default {
  name: "User",
  data() {
    return {
      goodsTypes: [
        { title: "收花日历", iconName: "notes-o", color: "#00b799" },
        { title: "近期福利", iconName: "bag-o", color: "#00b799" }
      ]
    };
  },
  computed: {
    ...mapState(["user"])
  },
  components: {
    NavBar,
    GoodsTypes,
    OrdersTab,
    Cell
  },
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.user {
  height: calc(100vh - 120px);
  .header {
    border-bottom: 1px solid #cacdd1;
    background-color: #ffffff;
  }
  .personal {
    height: 150px;
    padding: 40px 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #cacdd1;
    background-color: #ffffff;
    box-sizing: content-box;
    .avatar {
      margin-right: 20px;
    }
    .cart {
      border-radius: 50px;
      background-color: #47a899;
      padding: 5px 50px;
      margin-left: auto;
    }
    .cart-icon {
    }
  }
  .goods-types {
    padding: 20px 0;
    background-color: #fff;
  }
  .contact-us {
    margin-bottom: 20px;
  }
}
</style>