<template>
  <div class="found">
    <!-- 头部导航 -->
    <nav-bar>
      <div slot="mid">发现</div>
    </nav-bar>

    <!-- 发现页商品列表 -->
    <found-list :foundList="foundList"></found-list>
  </div>
</template>

<script>
import { getFoundList, getFoundDetail } from "network/found";
import NavBar from "components/navbar/Navbar";
import FoundList from "components/foundList/FoundList";
export default {
  name: "Found",
  data() {
    return {
      foundList: [],
      foundDetail: []
    };
  },
  components: {
    NavBar,
    FoundList
  },
  methods: {
    /**
     * @desc 请求发现页列表数据
     */
    async _getFoundList() {
      try {
        let res = await getFoundList();
        this.foundList = res.data.feed_info_list;
      } catch (err) {
        console.log(err);
      }
    },
    /**
     * @desc 发现页商品详情数据
     */
    async _getFoundDetail() {
      try {
        let res = await getFoundDetail();
      } catch (err) {
        console.log(err);
      }
    }
  },
  created() {
    this._getFoundList();
    // this._getFoundDetail();
  }
};
</script>

<style lang='less' scoped>
.found {
  padding: 0 20px 105px;
}
</style>