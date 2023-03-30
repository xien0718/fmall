<template>
  <!-- click.self阻止事件从最外层向下捕获，以实现点击遮罩层后弹出层收回、点击弹出层后弹出层不收回的效果 -->

  <div class="pop-up-comp">
    <!-- 遮罩层 -->
    <div class="cover-layer" @click.self="coverLayerClicked"></div>
    <!-- 弹出层 -->
    <div ref="popUpLayer" class="pop-up-layer">
      <div>11111111111</div>
      <!-- <sku-self class="sku"></sku-self> -->
      <div class="btn-area">
        <button class="to-fill-receiving-info-btn" @click="toFillReceivingInfo">
          去填写收货信息
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import SkuSelf from "components/sku/SkuSelf";
export default {
  name: "PopUpComp",
  data() {
    return {};
  },
  props: {
    isPopUpLayerShow: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    //设置弹出层的高度
    setPopUpLayerHeight() {
      return { height: this.$refs.popUpLayer.offsetHeight + "px" };
    },
    //这样用style添加动画无效，需要添加类名来解决
    // addPopDownStyle() {
    //   return this.isPopDown
    //     ? {
    //         "animation-name": "pop-up",
    //       }
    //     : {};
    // },
  },
  components: {
    SkuSelf,
  },
  methods: {
    toFillReceivingInfo() {
      this.$router.push({ path: "/fillReceivingInfo" });
    },
    coverLayerClicked() {
      console.log(this.$refs.popUpLayer.offsetHeight);
      this.$emit("coverLayerClicked");
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
@keyframes pop-up-fade-in {
  0% {
    opacity: 1;
    bottom: -1000px;
  }
  100% {
    opacity: 1;
    bottom: 0;
  }
}
@keyframes pop-down-fade-out {
  0% {
    bottom: 0;
    opacity: 1;
  }
  100% {
    bottom: -1000;
    opacity: 0;
  }
}
.pop-up-layer-up-animation {
}
.pop-up-comp {
  position: fixed;
  .cover-layer {
    z-index: 10;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
  .pop-up-layer {
    z-index: 11;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 500;
    width: 100vw;
    background-color: #fff;
    font-size: 40px;
    .sku {
      margin-bottom: 100px;
    }
    .btn-area {
      width: 100vw;
      height: 100px;
      background-color: black;
      line-height: 100px;
      vertical-align: middle;
      font-size: 0;
      .to-fill-receiving-info-btn {
        margin: 0 auto;
        padding: 10px;
        width: 90%;
        border-radius: 100px;
        border: 0;
        background-color: var(--color-main);
        color: #fff;
        font-size: 40px;
      }
    }
  }
}
</style>
