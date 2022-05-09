<template>
  <div class="pay-type">
    <pay-type-item
      v-for="(item,index) in payType"
      :key="item.name"
      :name="item.name"
      :iconHref="item.iconHref"
      :themeColor="themeColor"
      :isChecked="activePayTypeIndex==index"
      @click.native="payTypeItemClick(index)"
    ></pay-type-item>
  </div>
</template>

<script>
import PayTypeItem from "./PayTypeItem";
export default {
  name: "PayType",
  data() {
    return {
      themeColor: "#00b799",
      activePayTypeIndex: 0 //当前被选中的支付类型index
    };
  },
  props: {
    payType: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    PayTypeItem
  },
  computed: {},
  methods: {
    payTypeItemClick(index) {
      this.activePayTypeIndex = index;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.pay-type {
  border-radius: 25px;
  overflow: hidden;
  //最后一个item不要底边
  //写法一：
  // & > div:last-of-type::after {
  //   width: 0;
  //   height: 0;
  // }
  //写法二：
  .pay-type-item:last-of-type::after {
    width: 0;
    height: 0;
  }
}
</style>