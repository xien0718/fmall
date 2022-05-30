<template>
  <div>
    <nav-bar>
      <van-icon slot="left" name="arrow-left" @click="backToHome" />
      <div slot="mid">商品详情</div>
    </nav-bar>
    <sku-self></sku-self>
    <!-- <sku></sku> -->
    <!-- <div class="goods-item-info">{{goodsItemInfo.base_info.product_name}}</div> -->
  </div>
</template>

<script>
import SkuSelf from "components/sku/SkuSelf";
// import Sku from "components/sku/Sku";
import { getGoodsDetail } from "network/detail";
import { regGetParams } from "utils/getParams";
import NavBar from "components/navbar/Navbar";
export default {
  name: "Detail",
  data() {
    return {
      kuCunFaZhi: 10, //库存sku.list.stock_num低于10会以红色显示
      goodsItemInfo: {},
      goods: {
        //当没有选择任何规格的时候，预览框展示的图片
        picture:
          "http://saidad.oss-cn-guangzhou.aliyuncs.com/image/58de02e0c1f3480bf2190c5e944ddefb.jpeg",
      },
      // goodsId: 1, //目前没发现有啥用
      skuShow: false, //sku是否展示
      quota: 5, //限购数量
      quotaUsed: 0, //已购数量
      //商品规格数据
      sku: {
        //类目-分类：           颜色、尺寸、购买数量等
        tree: [
          //类目-颜色-id为s1
          {
            //颜色-标题
            k: "颜色",
            //颜色-id
            k_s: "s1",
            //颜色-分类
            v: [
              //颜色-红色-id为1
              {
                //颜色-红色-id
                id: "1", // skuValueId：规格值 id
                name: "红色", // skuValueName：规格值名称
                //颜色-红色-图片
                imgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
                // 预览框展示的图片(价格左边)
                previewImgUrl: "https://b.yzcdn.cn/vant/sku/shoes-1.png",
              },
              //颜色-蓝色-id为2
              {
                id: "2",
                name: "蓝色",
                imgUrl:
                  "http://saidad.oss-cn-guangzhou.aliyuncs.com/image/cea6225257bb428d4319663384dba68f.jpeg",
                previewImgUrl:
                  "http://saidad.oss-cn-guangzhou.aliyuncs.com/image/cea6225257bb428d4319663384dba68f.jpeg",
              },
            ],
            //颜色-分类-图片-true展示大图，false展示标签
            largeImageMode: true,
          },
          //类目-尺寸-id为s2
          {
            //尺寸-标题
            k: "尺寸",
            //尺寸-id
            k_s: "s2",
            //尺寸-分类
            v: [
              //尺寸-大
              {
                //尺寸-大-id
                id: "1",
                name: "大束",
              },
              //尺寸-小
              {
                //尺寸-大-id
                id: "2",
                name: "小束",
              },
            ],
            //颜色-分类-图片-true展示大图，false展示标签
            largeImageMode: false,
          },
        ],
        //所有规格的组合列表，例如：红色-大，蓝色-小，红色-小，蓝色-大
        list: [
          {
            id: 1001, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 20000, // 价格（单位分）
            stock_num: 20, // 当前 sku 组合对应的库存
          },
          {
            id: 1002, // skuId
            s1: "1", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 16000, // 价格（单位分）
            stock_num: 16, // 当前 sku 组合对应的库存
          },
          {
            id: 2261, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 23000, // 价格（单位分）
            stock_num: 23, // 当前 sku 组合对应的库存
          },
          {
            id: 2262, // skuId
            s1: "2", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "2", // 规格类目 k_s 为 s2 的对应规格值 id
            price: 18000, // 价格（单位分）
            stock_num: 18, // 当前 sku 组合对应的库存
          },
        ],
        price: "160.00-230.00", // 默认价格（单位元）
        stock_num: 77, // 商品总库存
        // 无规格商品的skuId，否则取所选 sku 组合对应的 id
        // 是否有无规格商品
        hide_stock: false, //false显示库存，true隐藏库存
        //是否展示留言
        // messages: [
        //   {
        //     // 商品留言
        //     datetime: "0", // 留言类型为 time 时，是否含日期。'1' 表示包含
        //     multiple: "0", // 留言类型为 text 时，是否多行文本。'1' 表示多行
        //     name: "留言", // 留言名称
        //     type: "text", // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
        //     required: "1", // 是否必填 '1' 表示必填
        //     placeholder: "", // 可选值，占位文本
        //     extraDesc: "" // 可选值，附加描述文案
        //   }
        // ],
      },
      //加减数量
      customStepperConfig: {
        // 自定义限购文案
        quotaText: `每次限购件`,
        // 自定义步进器超过限制时的回调,data中包括加减操作、选择的数量、限购数量、已购数量、起售数量
        handleOverLimit: (data) => {
          console.log(data);

          const { action, limitType, quota, quotaUsed, startSaleNum } = data;
          if (action === "minus") {
            this.$toast(
              startSaleNum > 1 ? `${startSaleNum}件起售` : "至少选择一件商品"
            );
            //增加的时候
          } else if (action === "plus") {
            //如果数量等于5，
            if (limitType === 5) {
              let msg = `单次限购${quota}件`;
              //如果有已购数量，则弹窗显示‘单词限购xx件，您已购买xx件’
              if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
              this.$toast(msg);
            } else {
              this.$toast("库存不够了");
              4;
            }
          }
        },
        // 步进器变化的回调
        handleStepperChange: (currentValue) => {},
      },
      //弹出规格选择框时默认选择的规格
      initialSku: {
        // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
        // 值：skuValueId（规格值 id）
        s1: "1",
        s2: "1",
        // 初始选中数量
        selectedNum: 1,
        // 初始选中的商品属性
        // 键：属性id
        // 值：属性值id列表
      },
      //附加规格：加料-燕麦、加料-椰果等等
      fujiaguige: [
        {
          k_id: 123, // 属性id
          k: "加料", // 属性名
          is_multiple: true, // 是否可多选
          v: [
            {
              id: 1, // 属性值id
              name: "燕麦", // 属性值名
              price: 100, // 属性值加价，单位：分
            },
            {
              id: 2,
              name: "椰果",
              price: 100, // 属性值加价，单位：分
            },
          ],
        },
      ],
    };
  },
  components: {
    SkuSelf,
    // Sku,
    NavBar,
  },
  created() {
    //当详情页面加载的时候请求对应商品的数据
    this._getGoodsDetail();
  },
  computed: {},
  methods: {
    //请求点击的商品所对应的商品详情页数据
    async _getGoodsDetail() {
      try {
        let item_id = this.$route.query.item_id;
        let res = await getGoodsDetail(item_id);
        if (res && res.errorCode == 0) {
          this.goodsItemInfo = res.req_item_info;
        }
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    },
    //点击加入购物车按钮
    addToCart() {
      this.skuShow = true;
    },
    //点击立即购买按钮，下面弹出选项体，跳转到创建订单页面
    toBuy() {
      this.skuShow = true;
    },
    //选好规格以后点击规格菜单的确定按钮
    //skuData就是客户选中的商品规格和附加
    toFillOrder(skuData) {
      console.log(skuData);

      this.$router.push({ path: "/fillorder" });
    },
    //返回首页
    backToHome() {
      this.$router.back();
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
</style>