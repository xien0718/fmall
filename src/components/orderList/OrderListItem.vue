<template>
  <div class="order-list-item" @click="toOrderDetail">
    <!-- 订单创建时间和订单状态 -->
    <div class="order-info">
      <!-- 创建时间 -->
      <div class="date">{{ordersCreatedTime}}</div>
      <!-- 待发货、待付款等信息 -->
      <div class="desc">{{itemDescBtn.desc}}</div>
    </div>

    <!-- 商品信息 -->
    <van-card
      class="item-info"
      v-for="(item,index) in orderListItem.product_list"
      :key="index"
      :num="item.count"
      :price="item.format_product_price"
      :title="item.product_name"
      :thumb="item.main_image"
    />
    <!-- 底部取消、去支付按钮 -->
    <div class="footer">
      <div class="total">共{{orderListItem.product_list.length}}件商品，共计&yen;{{total}}</div>
      <van-button
        v-for="item in Object.keys(itemDescBtn.button)"
        class="btns"
        :key="itemDescBtn.button[item].nanoKey"
        :plain="itemDescBtn.button[item].plain"
        :round="itemDescBtn.button[item].round"
        :type="itemDescBtn.button[item].type"
        :color="itemDescBtn.button[item].color"
        @click.stop="orderListItemClick(item)"
      >{{itemDescBtn.button[item].text}}</van-button>
    </div>
  </div>
</template>

<script>
//引入订单状态对象和订单按钮对应的方法对象
import {
  ORDERCATEGORY,
  ORDERSTATUS,
  ORDERSBTNMETHODS
} from "utils/orderStatus";
import { mapState, mapMutations } from "vuex";
export default {
  name: "OrderListItem",
  props: {
    orderListItem: {
      type: Object,
      default() {
        return {};
      }
    },
    itemDescBtn: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      //当前商品卡片对应的desc待支付   和按钮信息
      dataOrderListItem: this.orderListItem

      //父组件请求当前item的商品信息
    };
  },
  computed: {
    total() {
      return this.orderListItem.product_list.reduce(
        (a, b) => a + b.count * b.format_product_price,
        0
      );
    },
    ordersCreatedTime() {
      //时间戳毫秒数
      let timeStampMilliSecond = this.orderListItem.created_timestamp * 1000;
      return this.$dayjs(timeStampMilliSecond).format("YYYY-MM-DD HH:mm:ss");
    }
  },

  components: {},
  methods: {
    // 给orderStatus.button添加nanoKey用于遍历绑定key
    addNanoKey() {
      Object.values(this.itemDescBtn.button).map(
        item => (item.nanoKey = this.$nanoid())
      );
    },
    /**
     * @desc 商品卡片的按钮点击：去支付等等
     * @param { Object } btn 点击的按钮对象名toPay，对应值为{color/nanoKey/round/text/trigger/type}
     */
    orderListItemClick(btn) {
      //根据点击的按钮对象名在orderStatus.js中调用ORDERSBTNMETHODS对象的方法，同时传入当前商品的信息和cb给后端
      //后端返回cb的调用，cb中有个switch，判断点击的哪个按钮，如果点击的是toPay按钮，则调用封装好的支付方法
      ORDERSBTNMETHODS[btn](
        { btn, orderListItem: this.orderListItem },
        this.handleBtnClick
      ); //后端响应哪个按钮的调用方法来处理按钮点击
    },
    //根据点击的按钮触发orderStatus.js中的方法
    handleBtnClick(btn, res) {
      switch (btn) {
        case "toPay":
          //跳转到收银台页面
          this.$router.push({ path: "/cashierdesk" });
          break;
        case "cancelOrder":
          this.$Dialog
            .confirm({
              message: "确定取消该订单？取消后将错过优惠价格",
              cancelButtonText: "我再想想"
            })
            .then(() => {
              this.$notify({
                type: "primary",
                background: "#00b799",
                message: "订单已取消"
              });
            })
            .catch(() => {
              // on cancel
            });

          break;
        case "applyForRefund":
          this.$notify({
            type: "primary",
            background: "#00b799",
            message: "申请退款"
          });
          break;
        case "rushToSendOut":
          this.$notify({
            type: "primary",
            background: "#00b799",
            message: "催发货"
          });
          break;
        case "confirmReceipt":
          this.$notify({
            type: "primary",
            background: "#00b799",
            message: "确认收货"
          });
          break;
        case "applyForAfterSales":
          this.$notify({
            type: "primary",
            background: "#00b799",
            message: "申请售后"
          });
          break;
        case "delOrder":
          this.$Dialog
            .confirm({
              title: "确定删除订单？",
              message: "删除后不可恢复"
            })
            .then(() => {
              this.$emit("delOrderItem", this.orderListItem.order_id);
              this.$toast("订单已删除");
            })
            .catch(() => {
              // on cancel
            });
          break;
        case "reorder":
          this.$notify({
            type: "primary",
            background: "#00b799",
            message: "再次购买"
          });
          break;
      }
    },
    //点击商品卡片跳转至订单页商品详情
    toOrderDetail() {
      this.$router.push({
        path: "/orderitemdetail",
        query: this.orderListItem
      });
    }
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
    border-bottom: 4px solid #e0e0e0;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    .desc {
      color: #595959;
    }
  }
  .item-info {
    margin: 0;
    border-bottom: 4px solid #e0e0e0;
  }
  .footer {
    display: flex;
    padding: 20px;
    font-size: 28px;
    display: flex;
    align-items: center;
    button {
      margin-left: 10px;
      height: 50px;
    }
    button:first-of-type {
      margin-left: auto;
    }
  }
}
</style>