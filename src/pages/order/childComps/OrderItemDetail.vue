<template>
  <div class="order-item-detail" v-if="orderListItem">
    <!-- 头部：订单详情标题 -->
    <nav-bar>
      <div slot="left" @click="backToOrder">
        <van-icon name="arrow-left" />
      </div>
      <div slot="mid">订单详情</div>
    </nav-bar>
    <!-- 订单详情title -->
    <div class="title">
      <!-- 订单页商品状态：待付款、待收货等 -->
      <div class="order-item-desc">{{orderStatus[orderListItem.order_status].desc}}</div>
      <!-- shopping_word：订单将于30分钟内关闭，请及时支付 -->
      <div class="order-item-word">{{orderListItem.shopping_word}}</div>
    </div>
    <!-- 收货信息 -->
    <info-card class="receiver-info">
      <div slot="top">收货信息</div>
      <div slot="mid">
        <div>收货人：{{orderListItem.shopping_info.receiver}}</div>
        <div class="except-first-margin-top">手机号码：{{orderListItem.shopping_info.phone}}</div>
        <div class="except-first-margin-top over-line-height">收货地址：{{address}}</div>
      </div>
    </info-card>
    <!-- 订单信息 -->
    <info-card class="order-info">
      <div slot="top">订单信息</div>
      <div slot="mid">
        <div>订单号码：{{orderListItem.order_sn}}</div>
        <div class="except-first-margin-top">下单时间：{{ordersCreatedTime}}</div>
        <div class="except-first-margin-top">支付方式：微信</div>
        <div class="except-first-margin-top">祝福卡：111</div>
      </div>
    </info-card>
    <!-- 商品信息 -->
    <div class="item-info">
      <!-- 商品信息标题 -->
      <div class="item-info-title">商品信息</div>
      <!-- 商品图片信息 -->
      <van-card
        class="item-info-card"
        v-for="(item,index) in orderListItem.product_list"
        :key="index"
        :num="item.count"
        :price="item.format_product_price"
        :title="item.product_name"
        :thumb="item.main_image"
      />
      <!-- 商品结算信息 -->
      <div class="item-info-account">
        <!-- 商品总额 -->
        <div class="item-info-account-total">
          <span>商品总额</span>
          <span>&yen;{{itemTotal}}</span>
        </div>
        <!-- 优惠 -->
        <div class="discount except-first-margin-top">
          <span>优惠</span>
          <span>&yen;{{orderListItem.discount_price.toFixed(2)}}</span>
        </div>
        <!-- 运费 -->
        <div class="carriage except-first-margin-top">
          <span>运费</span>
          <span>&yen;{{orderListItem.product_list[0].carriage}}</span>
        </div>
      </div>
      <!-- 订单总额 -->
      <div class="order-total">
        <span>订单总额</span>
        <span>&yen;{{orderTotal}}</span>
      </div>
    </div>
    <!-- 底部总价格和取消按钮和去支付按钮 -->
    <order-detail-footer :btns="orderStatus[orderListItem.order_status].button"></order-detail-footer>
  </div>
</template>

<script>
import NavBar from "components/navbar/Navbar";
import OrderDetailFooter from "components/orderDetailFooter/OrderDetailFooter";
import InfoCard from "components/infoCard/InfoCard";
import { ORDERSTATUS } from "utils/orderStatus";
import { getOrderDetailData } from "network/order";
export default {
  name: "OrderItemDetail",
  data() {
    return {
      orderListItem: "",
      orderStatus: ORDERSTATUS
    };
  },
  computed: {
    //展示地址
    address() {
      return (
        this.orderListItem.shopping_info.province +
        this.orderListItem.shopping_info.city +
        this.orderListItem.shopping_info.area
      );
    },
    ordersCreatedTime() {
      //时间戳毫秒数
      let timeStampMilliSecond = this.orderListItem.created_timestamp * 1000;
      return this.$dayjs(timeStampMilliSecond).format("YYYY-MM-DD HH:mm:ss");
    },
    //商品总价格
    itemTotal() {
      return (
        this.orderListItem.product_list[0].format_product_price *
        this.orderListItem.product_list[0].count
      ).toFixed(2);
    },
    orderTotal() {
      return (
        parseFloat(this.itemTotal) +
        parseFloat(this.orderListItem.product_list[0].carriage) -
        parseFloat(this.orderListItem.discount_price)
      ).toFixed(2);
    }
  },
  components: {
    NavBar,
    InfoCard,
    OrderDetailFooter
  },
  methods: {
    //封装方法：根据点击的order_id请求商品数据
    async _getOrderDetailData() {
      let res = await getOrderDetailData({
        clickOrderId: this.$route.query.order_id
      });
      if (res && res.errorCode == 0) {
        this.orderListItem = res.data.order_list;
      }
    },
    backToOrder() {
      this.$router.back();
    }
  },
  created() {
    this._getOrderDetailData();
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.order-item-detail {
  padding-bottom: 110px;
  .title {
    color: #ffffff;
    background-image: linear-gradient(#22b698, #ffffff);
    height: 250px;
    padding: 50px 35px 0;
    .order-item-desc {
      margin-bottom: 20px;
    }
    .order-item-word {
      font-size: 28px;
    }
  }
  .item-info {
    background-color: #fff;
    width: 92%;
    border-radius: 20px;
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
    font-size: 28px;
    margin: 0 auto;
    .item-info-title {
      padding: 20px;
      border-bottom: 4px solid #ededea;
    }
    .item-info-card {
      margin-top: 0;
      background-color: #fff;
      border-bottom: 4px solid #ededea;
    }
    .item-info-account {
      padding: 20px;
      .item-info-account-total,
      .discount,
      .carriage {
        display: flex;
        justify-content: space-between;
      }
    }
    .order-total {
      padding: 20px;
      border-top: 4px solid #ededea;
      display: flex;
      justify-content: space-between;
    }
  }
  .receiver-info {
    z-index: 0;
    margin-top: -80px;
  }
  .receiver-info,
  .order-info,
  .item-info {
    margin-bottom: 25px;
  }
}
.except-first-margin-top {
  margin-top: 20px;
}
//内容超出以后设置行高
.over-line-height {
  line-height: 40px;
}
</style>