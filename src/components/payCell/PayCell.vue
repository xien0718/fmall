<template>
  <div
    class="pay-cell"
    :style="pressedStyle"
    @touchstart="payCellPressed"
    @touchend="payCellReleased"
  >
    <!-- 支付单元图标 -->
    <div class="pay-cell-icon">
      <slot name="icon">
        <svg class="svg-icon svg-icon-pay" aria-hidden="true">
          <use xlink:href="#icon-fukuan" />
        </svg>
      </slot>
    </div>
    <!-- 支付单元描述 -->
    <div class="pay-cell-text">
      <slot name="text">
        <span>支付方式</span>
      </slot>
    </div>
    <!-- 支付单元勾选框 -->
    <div :style="checkedStyle" class="pay-cell-check">
      <div v-show="isChecked" class="icon-check">
        <slot name="check">
          <svg class="svg-icon svg-icon-check" aria-hidden="true">
            <use class="use-icon" xlink:href="#icon-check" />
          </svg>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PayCell",
  props: {
    isChecked: {
      type: Boolean,
      default: false
    },
    checkedColor: {
      type: String,
      default: "#cbcccf"
    }
  },
  data() {
    return {
      isPressed: false
    };
  },
  components: {},
  computed: {
    checkedStyle() {
      return this.isChecked
        ? {
            backgroundColor: this.checkedColor,
            borderColor: this.checkedColor
          }
        : {};
    },
    pressedStyle() {
      return this.isPressed
        ? {
            backgroundColor: "#eef0f4"
          }
        : {};
    }
  },
  methods: {
    //pay-cell按下
    payCellPressed(e) {
      this.isPressed = true;
    },
    //pay-cell松开
    payCellReleased() {
      this.isPressed = false;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.svg-icon-pay {
  width: 50px;
  height: 50px;
}
.svg-icon-check {
  width: 32px;
  height: 32px;
}
.pay-cell {
  background-color: #fff;
  position: relative;
  display: flex;
  padding: 20px 35px;
  align-items: center;
  i::before {
    display: block;
    width: 100%;
    height: 100%;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #eef0f4;
    left: 80px;
    bottom: 0;
  }
  .pay-cell-icon {
    margin-right: 15px;
    .icon-zhifu {
      font-size: 44px;
    }
  }
  .pay-cell-text {
    font-size: 28px;
    margin-right: auto;
  }
  .pay-cell-check {
    width: 40px;
    height: 40px;
    border: 4px solid #cbcccf;
    border-radius: 40px;
    font-size: 0;
    .icon-check {
      width: 32px;
      height: 32px;
      color: #ffffff;
    }
  }
}
.pressed {
  background-color: #eef0f4;
}
.checked {
  background-color: #cbcccf;
}
.iconfont {
  display: block;
  width: 50px;
  height: 50px;
}
</style>