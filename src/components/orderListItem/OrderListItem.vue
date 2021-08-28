<template>
  <div class="order-list-item" v-if="isShowItem" @click>
    <!-- 订单创建时间和订单状态 -->
    <div class="order-info">
      <!-- 创建时间 -->
      <div class="date">{{ordersCreatedTime}}</div>
      <!-- 待发货、待付款等信息 -->
      <div class="desc">{{orderStatus.desc}}</div>
    </div>

    <!-- 商品信息 -->
    <van-card
      class="item-info"
      :num="ordersListItem.product_list[0].count"
      :price="ordersListItem.product_list[0].format_product_price"
      :title="ordersListItem.product_list[0].product_name"
      :thumb="ordersListItem.product_list[0].main_image"
    />
    <!-- 底部取消、去支付按钮 -->
    <div class="footer">
      <div class="total">共{{ordersListItem.product_list[0].count}}件商品，共计&yen;{{total}}</div>
      <van-button
        v-for="item in Object.keys(orderStatus.button)"
        class="btns"
        :key="orderStatus.button[item].nanoKey"
        plain
        :round="orderStatus.button[item].round"
        :type="orderStatus.button[item].type"
        :color="orderStatus.button[item].color"
        @click="orderListItemClick({ordersListItem,item})"
      >{{orderStatus.button[item].text}}</van-button>
    </div>
  </div>
</template>

<script>
//引入订单状态对象和订单按钮对应的方法对象
import { ORDERSTATUS, ORDERSBTNMETHODS } from "utils/orderStatus";
export default {
  name: "OrderListItem",
  props: {
    ordersListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      //当前item的desc待支付   和按钮信息
      orderStatus: ORDERSTATUS[this.ordersListItem.order_status],

      //父组件请求当前item的商品信息
      dataOrdersListItem: this.ordersListItem
    };
  },
  computed: {
    total() {
      return (
        this.ordersListItem.product_list[0].count *
        this.ordersListItem.product_list[0].format_product_price
      );
    },
    ordersCreatedTime() {
      //时间戳毫秒数
      let timeStampMilliSecond = this.ordersListItem.created_timestamp * 1000;
      return this.$dayjs(timeStampMilliSecond).format("YYYY-MM-DD HH:mm:ss");
    },

    //当点击的order-tab的
    isShowItem() {
      return this.$parent.activeOrderTab == 0
        ? true
        : this.$parent.activeOrderTab == this.ordersListItem.order_status;
    }
  },

  components: {},
  methods: {
    // 给orderStatus.button添加nanoKey用于遍历绑定key
    addNanoKey() {
      Object.values(this.orderStatus.button).map(
        item => (item.nanoKey = this.$nanoid())
      );
    },
    /**
     * @desc 商品卡片的按钮点击：去支付等等
     * @param { Object } btnType 点击的按钮对象名toPay，对应值为{color/nanoKey/round/text/trigger/type}
     */
    orderListItemClick(btnType) {
      //button名要、item也要
      //根据点击的按钮对象名在orderStatus.js中调用ORDERSBTNMETHODS对象的方法，同时传入当前商品的信息和cb给后端
      //后端返回cb的调用，cb中有个switch，判断点击的哪个按钮，如果点击的是toPay按钮，则调用封装好的支付方法
      ORDERSBTNMETHODS[btnType](
        { btnType, ordersListItem: this.ordersListItem },
        this.handleBtnClick
      ); //后端响应哪个按钮的调用方法来处理按钮点击
    },
    //
    handleBtnClick() {}
  },
  created() {
    this.addNanoKey();
  },
  mounted() {
    //时间戳10位是秒，13位是毫秒
    // console.log(this.$dayjs().$d);
  }
};
</script>

<style lang='less' scoped>
.order-list-item {
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 20px;
  background-color: #fafafa;
  .order-info {
    font-size: 28px;
    border-bottom: 4px solid #f1f1f1;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .desc {
      color: #595959;
    }
  }

  .item-info {
    margin: 0;
  }
  .footer {
    display: flex;
    padding: 20px;
    border-top: 4px solid #f1f1f1;
    font-size: 28px;
    display: flex;
    align-items: center;
    .btns {
      margin-left: auto;
      height: 50px;
    }
  }
}
</style>