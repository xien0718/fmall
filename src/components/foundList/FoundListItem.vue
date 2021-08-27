<template>
  <div class="found-list-item" @click="itemClick">
    <!-- 图片 -->
    <van-image
      fit="cover"
      class="item-pic"
      :src="foundListItem.feed_detail.image_list[0].image"
      height="200"
    ></van-image>
    <!-- 方法二：动态图片作为div的背景,用动态行内样式绑定url -->

    <!-- 标题 -->
    <div class="item-title">{{foundListItem.feed_detail.description}}</div>

    <!-- 详细信息 -->
    <div class="item-info">
      <div class="author">{{foundListItem.author_info.nick_name}}</div>
      <div class="ago">{{foundListItem.feed_base_info.publish_time_str}}</div>
      <div class="view">
        <van-icon class="icon" name="eye-o" />
        <div class="text">{{foundListItem.feed_base_info.view_num}}</div>
      </div>
    </div>

    <!-- 遮罩层：点击item显示 -->
    <van-popup class="popup" v-model="isShow" :close-on-click-overlay="false">
      <div class="cover-pic-wrap">
        <van-image
          fit="cover"
          class="cover-pic"
          :src="foundListItem.feed_detail.image_list[0].image"
        />
      </div>
      <div class="cover-title">{{foundListItem.feed_detail.description}}</div>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "foundListItem",
  props: ["foundListItem"],
  data() {
    return {
      isShow: false
    };
  },
  components: {},
  methods: {
    itemClick() {
      this.isShow = !this.isShow;
    }
  },
  mounted() {}
};
</script>

<style lang='less' scoped>
.found-list-item {
  flex: 1 0 auto;
  margin-bottom: 40px;
  box-shadow: 0 0 12px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  border-radius: 20px;
  padding-bottom: 20px;
  .item-pic {
    width: 100%;
  }
  .item-title {
    margin: 15px 0 15px 15px;
    font-size: 34px;
    font-weight: 550;
  }
  .item-info {
    color: #999999;
    font-size: 28px;
    padding: 0 15px;
    display: flex;
    .author {
      margin-right: 10px;
    }
    .ago {
      margin-right: auto;
    }
    .view {
      display: flex;

      .icon {
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
  .popup {
    width: 640px;
    background-color: #ff5777;
    background-color: #fff;
    padding-top: 20px;
    border-radius: 10px;
    .cover-pic-wrap {
      margin: 0 auto;
      width: 600px;
      height: 600px;
      background-color: #ff5777;
      display: flex;
      .cover-pic {
        width: 100%;
      }
    }
    .cover-title {
      margin: 35px 35px 35px 20px;
      font-size: 36px;
      line-height: 48px;
    }
  }
}
</style>