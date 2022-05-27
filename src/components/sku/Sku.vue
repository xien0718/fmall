<template>
  <div class="">
    <div v-for="item in spec" :key="item.spec_key">
      <div class="title">{{ item.spec_key }}</div>
      <div class="spec">
        <div
          class="spec-item"
          v-for="its in item.spec_value_all"
          :key="its.spec_value"
        >
          <!-- 点击高亮逻辑：动态绑定class -->
          <!-- 点击的时候把当前项加入selectSpec，并判断已经选择的和当前的是否一致， -->
          <!-- 假如点击了颜色下面的红色，则selectSpec['颜色']='红色' -->
          <!-- its.spec_value依次为：'红色'、'紫色'、'白色'、'黑色' -->
          <!-- 只有its.spec_value=红色时，selectSpec['颜色']和its.spec_value相等，因此class添加active类名 -->
          <span
            @click="changeSpec(item.spec_key, its.spec_value, its.able)"
            :class="[
              selectSpec[item.spec_key] === its.spec_value ? 'active' : '',
              its.able ? '' : 'disabled',
            ]"
            >{{ its.spec_value }}</span
          >
        </div>
      </div>
    </div>
    <div>库存：{{ show_stock }}</div>
    <div>价格：{{ show_price }}</div>
  </div>
</template>

<script>
import { spec, sku } from "utils/sku";
import { count_skuComb_SP } from "utils/sku填充方法的逻辑";
export default {
  name: "Sku",
  data() {
    return {
      count_skuComb_SP_res: {}, //所有商品数据  的  所有组合  的 价格和库存
      min_price: 0,
      max_price: 0,
      sku: {},
      spec: [],
      selectSpec: {}, //用来存储 所有已选择的spec_value 对象
      //假如选择了红色，则selectSpec:{ '颜色':'红色' ， '套餐':'' , '内存':'' }
    };
  },
  components: {},
  computed: {
    show_stock() {
      return this.count_skuComb_SP_res[Object.values(this.selectSpec).join(";")]
        .stock;
    },
    show_price() {
      let select_prices =
        this.count_skuComb_SP_res[Object.values(this.selectSpec).join(";")]
          .prices; //从 所有组合中 取出 已选规格值 对应的价格数组
      this.min_price = Math.min.apply(null, select_prices);
      this.max_price = Math.max.apply(null, select_prices);
      return this.min_price == this.max_price
        ? `${this.min_price}`
        : `${this.min_price}~${this.max_price}`;
    },
  },
  created() {
    this.sku = sku;
    // 根据规格数据的spec_key数量创建slectSpec
    spec.forEach((item) => {
      this.$set(this.selectSpec, item.spec_key, "");
    });
    // 将spec规格数据处理成我们视图所需要的数据类型
    this.spec = spec.map((item) => {
      //item是{ spec_key: "颜色", spec_value_all: ["红色", "紫色", "白色", "黑色"] }
      return {
        spec_key: item.spec_key,
        spec_value_all: item.spec_value_all.map((its) => {
          //its是红色、紫色、白色、黑色其一
          return {
            spec_value: its,
            able: this.isAble(item.spec_key, its),
          };
        }),
      };
    });

    //根据所有商品数据获取所有的组合的价格和库存
    this.count_skuComb_SP_res = count_skuComb_SP(this.sku);
    console.log(this.count_skuComb_SP_res);
    let prices = Object.values(this.sku).map((item) => item.price);
    this.max_price = Math.max.apply(null, prices);
    this.min_price = Math.min.apply(null, prices);
    // this.min_price = Object.values(this.count_skuComb_SP_res).map();
  },
  methods: {
    /**
     * @desc 检验：传入的规格键值 与 已选的规格键值 组合后，能否与商品匹配，能则return true，不能则return false
     * @param key {String} 点击的规格键spec_key
     * @param value {String} 点击的规格值spec_value
     * @returns {Boolean} flag是否可以被选中
     */
    isAble(key, value) {
      //把this.selectSpec深拷贝，里面存储的是所有已选择的spec_value
      let copySelectSpec = JSON.parse(JSON.stringify(this.selectSpec));
      copySelectSpec[key] = value;
      let skuKeys = Object.keys(this.sku);
      let skuKeys_inStock = skuKeys.filter(
        //取出有库存的商品
        (item) => this.sku[item].stock !== 0
      );

      let flag = skuKeys_inStock.some((item) => {
        let i = 0;
        for (let k in copySelectSpec) {
          if (
            copySelectSpec[k] != "" &&
            item.split(";").includes(copySelectSpec[k]) //字符串先转数组，再判断已选则的规格值是否在其中
          ) {
            i++;
          } else if (copySelectSpec[k] == "") {
            i++;
          }
        }
        return i == spec.length;
      });

      // let flag = this.sku.some((item) => {
      //   let i = 0;
      //   for (let k in copySelectSpec) {
      //     if (
      //       copySelectSpec[k] != "" &&
      //       item.skuItem.includes(copySelectSpec[k])
      //     ) {
      //       i++;
      //     } else if (copySelectSpec[k] == "") {
      //       i++;
      //     }
      //   }
      //   return i == spec.length;
      // });
      return flag;
    },
    /**
     * @desc 点击规格值spec_value的时候
     *       ①修改点击的spec_value状态
     *       ②修改其他spec_value状态
     * @param key {String} 点击的规格键spec_key
     * @param value {String} 点击的规格值spec_value
     * @param able {boolean} 点击的规格值spec_value是否可以被选中
     * @return
     */
    changeSpec(key, value, able) {
      if (!able) return;
      if (this.selectSpec[key] === value) {
        this.selectSpec[key] = "";
      } else {
        this.selectSpec[key] = value;
      }

      this.spec.forEach((item) => {
        item.spec_value_all.forEach((its) => {
          //its是{ "spec_value":"红色","able":true }
          its.able = this.isAble(item.spec_key, its.spec_value);
        });
        //首先执行isAble('颜色','红色')、isAble('颜色','紫色')、isAble('颜色','白色')、isAble('颜色','黑色')

        //然后执行isAble('套餐','套餐一')、isAble('套餐','套餐二')、isAble('套餐','套餐三')、isAble('套餐','套餐四')

        //最后执行isAble('存储','64G')、isAble('存储','128G')、isAble('存储','256G')

        //item是
        //{  "spec_key":"颜色",
        //   "spec_value_all":[
        //    {
        //        "spec_value":"红色",
        //        "able":true
        //    },
        //    {
        //      "spec_value":"紫色",
        //      "able":true
        //    },
        //    {
        //      "spec_value":"白色",
        //      "able":true
        //    },
        //    {
        //      "spec_value":"黑色",
        //      "able":true
        //    }
        //]}
      });
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.spec-item {
  display: inline-block;
  margin-right: 10px;
}
.spec-item span {
  border: 1px solid #eee;
  cursor: pointer;
  padding: 5px 10px;
}
.spec-item .active {
  border: 1px solid red;
  background-color: red;
  color: #fff;
}
.spec-item .disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
</style>
