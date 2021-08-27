<template>
  <!-- <van-col span="12" class="monthly">
      <van-icon size="28" name="calendar-o" color="#00b799"/>包月鲜花
    </van-col>
    <van-col span="12" class="gift">
      <van-icon size="28" name="gift-o" color="#00b799"/>礼品鲜花
  </van-col>-->
  <div class="goods-types">
    <div class="monthly">
      <van-icon size="28" name="calendar-o" color="#00b799" />包月鲜花
    </div>
    <div class="gift">
      <van-icon size="28" name="gift-o" color="#00b799" />礼品鲜花
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsTypes",
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.goods-types {
  margin: 16px 24px;
  border-radius: 16px;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  .monthly,
  .gift {
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);

    font-size: 32px;
    font-weight: 700;
    color: #666666;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 48%;
    height: 140px;
    background-color: #fff;
  }
}
</style>