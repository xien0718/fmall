<template>
  <div class="add-address">
    <!-- 头部 -->
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="toAddress" />
      <div slot="mid">添加收货地址</div>
    </nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script>
import { areaList } from "@vant/area-data";
import NavBar from "components/navbar/Navbar";
export default {
  name: "AddAddress",
  components: {
    NavBar,
  },
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSave() {
      this.$toast("save");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
    //返回地址页
    toAddress() {
      this.$router.back();
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='less' scoped>
.add-address {
  background-color: #ffffff;

  .van-address-edit {
    border-radius: 5px;
    margin: 0 auto;
    width: 92%;
    box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
    /deep/.van-button--danger {
      background-color: #00b799;
      border: 1px solid #00b799;
    }
  }

  /deep/.van-switch--on {
    background-color: #00b799;
  }
  /deep/.van-address-edit__buttons {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0;
  }
  /deep/.van-button--round {
    border-radius: 0;
    margin-bottom: 0;
  }
}
</style>