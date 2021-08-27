<template>
  <!-- 表单+正则验证 -->
  <div class="form-validate">
    <!-- 表单 -->
    <div class="form">
      <label for="form">
        <input v-model="inputValue" name="form" :type="type" />
        <!-- 表单验证，并展示验证结果 -->
      </label>
    </div>
    <!-- 正则验证 -->
    <div class="validate">
      <!-- 输入框为空展示：请输入内容 -->
      <div v-if="empty" class="empty">
        <slot name="empty">
          <span>请输入内容</span>
        </slot>
      </div>
      <!-- 输入内容符合规则 -->
      <div v-if="legal" class="legal">
        <van-icon name="checked" color="#1989fa" />
        <slot name="legal"></slot>
      </div>
      <!-- 输入内容不符合规则 -->
      <div v-if="illegal" class="illegal">
        <van-icon name="clear" color="#ee0a24" />
        <slot name="illegal">
          <span>不符合规则，请重新输入</span>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormValidate",
  props: ["reg", "type", "promptMsg"], //promptMsg提示信息
  data() {
    return {
      inputValue: "",
      promptType: 0
    };
  },
  components: {},
  watch: {
    inputValue: {
      handler(newV, oldV) {
        //输入值如果长度为0，则更改提示信息类型为0：请输入内容
        if (newV.length == 0) {
          this.promptType = 0;
        } else {
          //判断使用者传过来的正则是否为数组形式
          if (this.reg.constructor !== Array) {
            //如果不是数组，则直接正则.test(验证)
            this.reg.test(this.inputValue)
              ? (this.promptType = 1) //输入内容符合正则，改提示信息类型为1：对钩
              : (this.promptType = 2); //不符合正则，改提示信息类型为2：重新输入
          } else {
            //如果是数组，则先遍历再test
            this.reg.every(item => item.test(this.inputValue))
              ? (this.promptType = 1) //输入内容符合正则，改提示信息类型为1：对钩
              : (this.promptType = 2); //不符合正则，改提示信息类型为2：重新输入
          }
        }
      },
      //是否深度监听，用于监听对象中属性变化
      immediate: true //第一次绑定的时候也属于发生变化了，如果immediate设置为true，则第一次绑定也会触发handler
    }
  },
  computed: {
    empty() {
      return this.promptType == 0;
    },
    //为1提示
    legal() {
      return this.promptType == 1;
    },
    illegal() {
      return this.promptType == 2;
    }
  },
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
</style>