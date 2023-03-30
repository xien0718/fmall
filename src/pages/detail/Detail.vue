<template>
  <div class="detail">
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="backToHome" />
      <div slot="mid">商品详情</div>
    </nav-bar>

    <!-- 弹出组件 -->
    <pop-up-comp
      ref="popUpComp"
      v-show="isPopUpLayerShow"
      :isPopUpLayerShow="isPopUpLayerShow"
      @coverLayerClicked="popUpCompCoverLayerClicked"
    ></pop-up-comp>

    <!-- <sku-self></sku-self> -->

    <!-- 底部立即购买栏 -->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" />
      <van-goods-action-button
        color="#be99ff"
        type="warning"
        text="选规格加购"
        @click="addToCart"
      />
      <van-goods-action-button
        color="#7232dd"
        type="danger"
        text="选规格购买"
        @click="buyNow"
      />
      <!-- 点击立即购买弹出的遮罩层 -->
    </van-goods-action>
  </div>
</template>

<script>
// import SkuSelf from "components/sku/SkuSelf";
import { getGoodsDetail } from "network/detail";
import { regGetParams } from "utils/getParams";
import NavBar from "components/navbar/Navbar";
import PopUpComp from "components/popUpComp/PopUpComp";
export default {
  name: "Detail",
  data() {
    return {
      isPopUpLayerShow: false, //sku是否展示,即弹出层popUPComp是否展示
    };
  },
  components: {
    NavBar,
    PopUpComp,
  },
  created() {
    //当详情页面加载的时候请求对应商品的数据
    this._getGoodsDetail();
  },
  mounted() {
    this.$nextTick(function () {
      console.log("mounted");
      console.log(this.$refs.popUpComp.$el.children[1].offsetHeight);
      // console.log(this.$refs.popUpComp.$el.offsetHeight);
      // 仅在整个视图都被渲染之后才会运行的代码
    });
  },

  computed: {
    // isPopUpCompUp() {
    //   return this.$refs.popUpComp.isPopUpCompUp1;
    // },
  },
  methods: {
    //请求点击的商品所对应的商品详情页数据
    async _getGoodsDetail() {
      try {
        let item_id = this.$route.query.item_id;
        let res = await getGoodsDetail(item_id);
        if (res && res.errorCode == 0) {
          this.goodsItemInfo = res.req_item_info;
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    //点击加入购物车按钮
    addToCart() {
      // this.skuIsShow = true;
    },
    //点击立即购买按钮，下面弹出PopUp组件，选好sku后点击购买跳转到创建订单页面
    buyNow() {
      this.isPopUpLayerShow = true;
      console.log(this.$refs.popUpComp);
    },
    //监听popUpComp的遮罩层被点击后发射的自定义事件，同时隐藏popUpComp
    popUpCompCoverLayerClicked() {
      this.isPopUpLayerShow = false;
    },
    //返回首页
    backToHome() {
      this.$router.back();
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  font-size: 40px;
  padding-bottom: 160px;
  .pop-up-comp {
    z-index: 1;
  }
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-to,
.v-leave {
  opacity: 1;
}
.v-enter-active {
  // animation: pop-up-fade-in 0.5 forwards;
  transition: height 0.5;
}
.v-leave-active {
  // animation: pop-down-fade-out 0.5 forwards;
}
</style>
