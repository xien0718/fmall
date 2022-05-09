<template>
  <div class="cashier-desk">
    <!-- 收银台标题 -->
    <nav-bar>
      <div slot="left" @click="toOrder">
        <van-icon name="arrow-left" />
      </div>
      <div slot="mid">收银台</div>
    </nav-bar>
    <!-- 支付模块：方法一：选择支付方式 -->
    <pay-type :payType="payType"></pay-type>
    <!-- 支付模块：方法二 -->
    <!-- <div class="choose-pay-type">
      <pay-cell
        v-for="(item,index) in payType"
        :key="item.name"
        :checkedColor="checkedColor"
        :isChecked="activeIndex==index"
        @click.native="payCellClick(index)"
      >
        <svg slot="icon" class="svg-icon" aria-hidden="true">
          <use :xlink:href="item.iconHref" />
        </svg>
        <span slot="text">{{item.name}}</span>
      </pay-cell>
    </div>-->
    <!-- 去支付按钮 -->
    <van-button @click="toPay" type="primary" size="large" color="#00b799" round>去支付</van-button>
  </div>
</template>

<script>
import NavBar from "components/navbar/Navbar";
import PayCell from "components/payCell/PayCell";
import PayType from "components/payType/PayType";
export default {
  name: "CashierDesk",
  data() {
    return {
      activeIndex: 0, //当前活跃的index
      checkedColor: "#00b779", //传给pay-cell组件展示的主题颜色
      payType: [
        //支付类型:用于遍历支付单元payCell，一个支付方式对应一个payCell
        {
          name: "微信支付",
          iconHref: "#icon-weixinzhifu"
        },
        {
          name: "支付宝支付",
          iconHref: "#icon-zhifubao"
        }
        // {
        //   name: "银联支付",
        //   iconHref: "#icon-yinlian"
        // }
      ]
    };
  },
  components: {
    NavBar,
    PayCell,
    PayType
  },
  computed: {},
  methods: {
    toOrder() {
      this.$router.back();
    },
    //支付方式单选按钮的点击事件
    payCellClick(index) {
      console.log(index);
      this.activeIndex = index;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.cashier-desk {
  height: 100vh;
  background-color: #eef0f4;
}
// .choose-pay-type {
//   overflow: hidden;
//   margin-top: 100px;
//   border-radius: 25px;
//   .pay-cell:last-of-type::after {
//     width: 0;
//     height: 0;
//   }
// }
// .iconfont {
//   font-size: 50px;
// }
.van-button {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 20px;
  margin: 0 auto;
  width: 90%;
  height: 40px;
  background-color: #fff;
}
</style>