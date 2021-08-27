<template>
  <div class="home">
    <!-- 头部导航 -->
    <Navbar class="nav-bar">
      <div slot="left">
        <van-icon name="point-gift" />
      </div>
      <div slot="mid" class="mid">AS Flower Boutique</div>
      <div slot="right">
        <van-icon name="plus" />
      </div>
    </Navbar>

    <!-- 轮播图 -->
    <swiper :swiper="swiper"></swiper>

    <!-- 商品类型 -->
    <goods-types class="goods-types" :goods-types="goodsTypes"></goods-types>

    <!-- 新品推荐 -->
    <div class="recommend-title-wrap">
      <h3 class="recommend-title">新品推荐</h3>
    </div>

    <!-- 商品列表 -->
    <goods-list :goodsList="goodsList"></goods-list>
  </div>
</template>

<script>
// 引入api
import {
  mapState // 返回一个计算属性，需要配合computed使用
  // mapMutations // 返回对应mapMtation，直接挂在到this实例上访问
} from "vuex";
import { getGoodsList, getSwiper } from "../../network/home";

//引入组件
import Navbar from "components/navbar/Navbar";
import Swiper from "components/swiper/Swiper";
import GoodsTypes from "components/goodsTypes/GoodsTypes";
import GoodsList from "components/goodsList/GoodsList";
export default {
  name: "Home",
  components: {
    Navbar,
    Swiper,
    GoodsTypes,
    GoodsList
  },
  data() {
    return {
      swiper: [],
      goodsList: [],
      goodsTypes: [
        { title: "包月鲜花", iconName: "calendar-o", color: "#00b799" },
        { title: "礼品花礼", iconName: "gift-o", color: "#00b799" }
      ]
    };
  },
  computed: {
    // a module  不同的module 可以引入多次
    ...mapState({
      aInfo: state => state.a
    }),
    // b moudle 不同的module 可以引入多次
    ...mapState({
      bInfo: state => state.b
    }),
    // 也可以直接引入，使用state中的key值，挂在到当前实例
    ...mapState(["count1"])
  },
  methods: {
    /**
     * @desc 请求swiper数据
     */
    async _getSwiper() {
      try {
        let res = await getSwiper();
        this.swiper = res.data.advertising_list;
      } catch (err) {
        console.log("错误信息", err);
      }
    },
    /**
     * @des 请求swiper数据
     */
    async _getGoodsList() {
      try {
        let res = await getGoodsList();

        this.goodsList = res.data.product_list;
      } catch (err) {
        console.log("错误信息", err);
      }
    }
  },
  created() {
    this._getSwiper();
    this._getGoodsList();
  },
  mounted() {
    console.log(location);
  }
};
</script>
<style lang='less' scoped>
.home {
  height: calc(100vh - 110px);
  overflow: auto;
  .goods-types {
    margin-top: 20px;
  }
}
.nav-bar {
  .mid {
  }
}
.recommend-title-wrap {
  overflow: hidden;
  .recommend-title {
    text-align: center;
    font-size: 36px;
    font-weight: 400;
    margin: 40px 0;
  }
}
</style>
