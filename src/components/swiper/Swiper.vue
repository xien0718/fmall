<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in swiper" :key="item.id">
      <van-image width="375" height="180" fit="cover" :src="item.image" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "Swiper",
  props: {
    swiper: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    // async _getSwiper() {
    //   let res = await getSwiper();
    //   this.swiper = res.data.advertising_list;
    //   console.log(this.swiper);
    // }
  },
  created() {},
  mounted() {}
};
</script>

<style lang='less' scoped>
.my-swipe .van-swipe-item {
  width: 100vw;
  height: 180px;
}
</style>