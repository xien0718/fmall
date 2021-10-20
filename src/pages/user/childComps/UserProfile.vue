<template>
  <div class="user-profile">
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="backToUser" />
      <div slot="mid">个人资料</div>
    </nav-bar>
    <!-- 修改头像 -->
    <div class="revise-avatar">
      <van-image width="60" height="60" :src="user.avatar" fit="cover" round />
      <van-cell is-link title="修改头像" @click="changeAvatarShow = true" />
      <van-action-sheet
        v-model="changeAvatarShow"
        cancel-text="取消"
        close-on-click-action
      >
        <!-- 拍照 -->
        <label>
          <div class="take-photos" @touchstart="pressDown" @touchend="pressUp">
            拍照
          </div>
          <input
            type="file"
            accept="image/*"
            capture="camera"
            v-show="false"
            @change="takePhotos"
          />
        </label>
        <!-- 从相册选择 -->
        <label>
          <div
            class="choose-in-album"
            @touchstart="pressDown"
            @touchend="pressUp"
          >
            从相册选择
          </div>
          <input
            type="file"
            accept="image/*"
            v-show="false"
            @change="chooseInAlbum"
          />
        </label>
      </van-action-sheet>
    </div>

    <!-- 修改昵称 -->
    <div class="revise-nickname">
      <van-cell is-link title="修改昵称" @click="displayReviseNickname" />
      <van-action-sheet
        v-model="reviseNicknameShow"
        title="修改昵称"
        :round="false"
      >
        <van-cell-group>
          <van-field v-model="nicknameRevised" />
        </van-cell-group>
        <div class="revise-nickname-btns">
          <van-button
            plain
            hairline
            type="primary"
            color="#00b799"
            height="30"
            @click="reviseNicknameShow = false"
            >取消</van-button
          >
          <van-button
            hairline
            type="primary"
            color="#00b799"
            @click="reviseNickname"
            >保存</van-button
          >
        </div>
      </van-action-sheet>
    </div>
    <!-- 修改性别 -->
    <div class="revise-sex">
      <van-cell is-link title="修改性别" @click="changeSexShow = true" />
      <van-action-sheet
        v-model="changeSexShow"
        :actions="changeSex"
        cancel-text="取消"
        close-on-click-action
        @cancel="onCancel"
        @select="reviseSex"
      />
    </div>
    <!-- 生日 -->
    <div class="revise-birthday">
      <van-cell is-link title="生日" @click="changeBirthdayShow = true" />
      <van-action-sheet v-model="changeBirthdayShow">
        <div class="content">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="reviseBirthday"
            @cancel="changeBirthdayCancel"
          />
        </div>
      </van-action-sheet>
    </div>
    <!-- 修改地址 -->
    <van-cell is-link title="修改地址" @click="toReceiverAddress" />
  </div>
</template>
<script>
import NavBar from "components/navbar/Navbar";
import { mapMutations, mapState } from "vuex";
import { USERINFO } from "../../../utils/config";
import { requestUpdateUserInfo } from "network/order";
export default {
  name: "UserProfile",
  components: {
    NavBar,
  },
  data() {
    return {
      changeAvatarShow: false,
      changeSexShow: false,
      changeAvatar: [{ name: "拍照" }, { name: "从相册选择" }],
      changeSex: [{ name: "男" }, { name: "女" }],
      //修改用户名
      reviseNicknameShow: false,
      nicknameRevised: "",
      //日期选择
      changeBirthdayShow: false,
      minDate: new Date(1900, 1, 1),
      maxDate: new Date(2021, 8, 14),
      currentDate: new Date(2021, 8, 14),
    };
  },
  computed: {
    ...mapState(["user"]),
  },
  watch: {},
  methods: {
    async _requestUpdateUserInfo(data) {
      let res = await requestUpdateUserInfo(data);
      if (res && res.errorCode == 0) {
        // console.log(res);
      }
    },
    //调用vuex.mutations方法更新用户生日
    ...mapMutations([
      "updateUserInfo",
      "updateUserBirthday",
      "updateUserNickname",
    ]),
    //返回用户页
    backToUser() {
      this.$router.back();
    },
    //取消
    onCancel() {},
    //弹出层
    showPopup() {
      this.show = true;
    },
    //拍照
    takePhotos(e) {
      let _this = this;
      let file = e.target.files[0];
      if (window.FileReader) {
        let reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.addEventListener("load", function (e) {
            console.log(e.target.result);
            let res = e.target.result;
            _this.saveOperation("avatar", res);
          });
        }
      }
    },
    //相册选择
    chooseInAlbum(e) {
      let _this = this;
      let file = e.target.files[0];
      if (window.FileReader) {
        let reader = new FileReader();
        if (file) {
          reader.readAsDataURL(file);
          reader.addEventListener("load", function (e) {
            console.log(e.target.result);
            let res = e.target.result;
            _this.saveOperation("avatar", res);
          });
        }
      }
    },
    //touchstart添加的样式
    pressDown(e) {
      this.changeAvatarShow = false;
      e.target.style.backgroundColor = "#f2f3f5";
      // this.style.backgroundColor = "#f2f3f5";
    },
    //touchend添加的样式
    pressUp(e) {
      e.target.style.backgroundColor = "#ffffff";
      // this.style.backgroundColor = "#f2f3f5";
    },
    //修改性别
    reviseSex(value) {
      let res = value.name == "男" ? "1" : "2";
      this.saveOperation("sex", res);
    },
    //修改生日
    reviseBirthday(value) {
      this.changeBirthdayShow = false;
      //将生日格式转化为2020/10/22
      let res = value.toLocaleDateString();
      //调用封装好的保存方法，存到vuex、localStorage、数据库中
      this.saveOperation("birthday", res);
    },
    //点击选择生日弹出窗口的取消按钮
    changeBirthdayCancel() {
      this.changeBirthdayShow = false;
    },
    //点击修改昵称按钮展示对应面板
    displayReviseNickname() {
      this.reviseNicknameShow = true;
      this.nicknameRevised = this.user.nick_name;
    },
    //点击保存修改后的用户名
    reviseNickname() {
      this.reviseNicknameShow = false;
      let res = this.nicknameRevised;
      this.saveOperation("nick_name", res);
      this.updateUserNickname(this.nicknameRevised);
    },
    //把要修改的属性名和属性值保存到vuex、localStorage、发送给服务端
    saveOperation(key, value) {
      //取出localStorage.user数据
      let userInfo = JSON.parse(localStorage.getItem(USERINFO));
      //修改user数据
      userInfo[key] = value;
      //更新vuex.user数据
      this.updateUserInfo(userInfo);
      //更新localStorage.user数据
      localStorage.setItem(USERINFO, JSON.stringify(userInfo));
      //更新数据库数据
      this._requestUpdateUserInfo({ userInfo });
    },
    //跳转到地址管理页
    toReceiverAddress() {
      this.$router.push({
        path: "/address",
      });
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
.user-profile {
  background-color: #fff;
  .revise-avatar {
    padding-left: 25px;
    display: flex;
    .take-photos,
    .choose-in-album {
      text-align: center;
      padding: 28px 32px;
      font-size: 32px;
    }
    .van-image {
      background-color: #fff;
      flex: 1 0 auto;
    }
    .van-cell__title {
      line-height: 40px;
    }
    .van-cell__right-icon {
      height: 40px;
    }
    .van-cell__right-icon::before {
      line-height: 40px;
    }
  }
  .revise-nickname {
    .revise-nickname-btns {
      display: flex;
      justify-content: space-evenly;
      padding: 30px 0;
      .van-button {
        height: 30px;
        width: 150px;
      }
    }
  }
}
</style>