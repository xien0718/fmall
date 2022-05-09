<template>
  <div
    class="pay-type-item"
    :style="pressedStyle"
    @touchstart="payTypeItemPressed"
    @touchend="payTypeItemReleased"
  >
    <!-- 支付宝or微信图标 -->
    <div class="icon-href">
      <svg slot="icon" class="svg-icon svg-icon-pay" aria-hidden="true">
        <use :xlink:href="iconHref" />
      </svg>
    </div>
    <!-- 支付宝or微信支付名称 -->
    <div class="item-name">{{name}}</div>
    <!-- 选中按钮 -->
    <div class="item-check" :style="checkedStyle">
      <svg v-show="isChecked" slot="icon" class="svg-icon svg-icon-check" aria-hidden="true">
        <use xlink:href="#icon-check" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayTypeItem",
  data() {
    return {
      isPressed: false
    };
  },
  props: {
    //父传过来的支付名称，由子展示
    name: {
      type: String,
      default: "支付方式"
    },
    //父传过来的svg图标名称，由子展示
    iconHref: {
      type: String,
      default: "#icon-zhifu"
    },
    //父传过来的主题颜色
    themeColor: {
      type: String,
      default: "#1692b8"
    },
    //初始第1个payTypeItem被选中，
    //点击的payTypeItem变为活跃，点击的时候activeIndex=点击的index，
    //isChecked="activeIndex==点击的index"为true，
    //如果isChecked为true，则给PayTypeItem的选中按钮添加style：bgC和borderC=主题色
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  computed: {
    checkedStyle() {
      return this.isChecked
        ? { backgroundColor: this.themeColor, borderColor: this.themeColor }
        : {};
    },
    pressedStyle() {
      return this.isPressed ? { backgroundColor: "#eef0f4" } : {};
    }
  },
  methods: {
    payTypeItemPressed() {
      this.isPressed = true;
    },
    payTypeItemReleased() {
      this.isPressed = false;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.pay-type-item {
  position: relative;
  background-color: #fff;
  display: flex;
  padding: 20px 35px;
  font-size: 28px;
  align-items: center;
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 2px;
    left: 80px;
    bottom: 0;
    background-color: #eef0f4;
  }
  .icon-href {
    margin-right: 15px;
    .svg-icon-pay {
      width: 50px;
      height: 50px;
    }
  }
  .item-name {
    margin-right: auto;
  }
  .item-check {
    width: 40px;
    height: 40px;
    border: 4px solid #cbcccf;
    border-radius: 20px;
    .svg-icon-check {
      color: #ffffff;
      width: 32px;
      height: 32px;
    }
  }
}
</style>