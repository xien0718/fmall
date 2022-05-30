<template>
  <div class="sku">
    <!-- 下面是商品规格键值goods_spec -->
    <div class="goods_spec">
      <div class="price_stock">
        <div>价格：{{ price }}</div>
        <div>库存：{{ stock }}</div>
      </div>
      <div
        class="spec_item"
        v-for="a in format_goods_spec"
        :key="a.format_goods_spec_item_key"
      >
        <div class="spec_item_key">{{ a.format_goods_spec_item_key }}</div>
        <div class="spec_item_value_all">
          <!-- 点击红色的时候给select_spec['颜色']添加'红色' -->
          <!-- 即select_spec['颜色']=='红色' -->
          <!-- 因此当遍历到b.format_goods_spec_item_value = 绿色 -->
          <!-- select_spec['颜色'] !== 绿色 -->
          <!-- 因此不添加active类名 -->
          <div
            :class="[
              { able: b.able },
              {
                active: isActive(
                  a.format_goods_spec_item_key,
                  b.format_goods_spec_item_value
                ),
              },
            ]"
            class="spec_item_value"
            v-for="b in a.format_goods_spec_item_value_all"
            :key="b.format_goods_spec_item_value"
            @click="
              change_spec_value_status(
                a.format_goods_spec_item_key,
                b.format_goods_spec_item_value,
                b.able
              )
            "
          >
            {{ b.format_goods_spec_item_value }}
          </div>
        </div>
      </div>
    </div>

    <!-- 下面是附加规格键值attach_spec -->
    <div
      class="attach_spec"
      v-for="(a, attach_spec_key_index) in format_attach_spec"
      :key="a.format_attach_spec_key"
    >
      <div class="attach_key">{{ a.format_attach_spec_key }}</div>
      <div class="attach_values">
        <div
          v-for="(b, attach_spec_value_index) in a.format_attach_spec_value_all"
          :key="b.format_attach_spec_value"
          class="attach_value"
          :class="b.isChecked ? 'active' : ''"
          @click="
            attach_spec_click(
              a.format_attach_spec_key,
              b.format_attach_spec_value,
              b.isChecked,
              attach_spec_key_index,
              attach_spec_value_index
            )
          "
        >
          {{ b.format_attach_spec_value }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { original_spec, sku, attach_spec } from "utils/sku";
export default {
  name: "SkuSelf",
  data() {
    return {
      skuComb_SP_list: {}, //所有商品生成的所有组合的价格和库存列表
      sku_instock: {}, //有库存的商品数据
      select_spec: {}, //相当于currentIndex，select_spec初始是{'颜色':'','套餐':'','存储':''}

      attach_spec: [], //所有附加规格键值
      format_attach_spec: [], //给规格值添加isChecked属性来判断规格值是否被选中
      select_attach_spec: {}, //已选的所有附加规格键值
      format_attach_spec1: [
        {
          format_attach_spec_key: "灯饰",
          format_attach_spec_value_all: [
            { format_attach_spec_value: "蓝色", isChecked: false },
            { format_attach_spec_value: "黄色", isChecked: false },
            { format_attach_spec_value: "粉色", isChecked: false },
          ],
        },
        {
          format_attach_spec_key: "糖果",
          format_attach_spec_value_all: [
            { format_attach_spec_value: "蓝色", isChecked: false },
            { format_attach_spec_value: "黄色", isChecked: false },
            { format_attach_spec_value: "粉色", isChecked: false },
          ],
        },
      ],
      select_attach_spec1: { 灯饰: [], 糖果: [] },

      sku: {}, //所有的商品数据
      format_goods_spec: [], //格式化后的规格键值数据,format_goods_spec1是示例
      format_goods_spec1: [
        {
          //a
          format_goods_spec_item_key: "颜色",
          format_goods_spec_item_value_all: [
            { format_goods_spec_item_value: "红色", able: true }, //b
            { format_goods_spec_item_value: "紫色", able: true },
            { format_goods_spec_item_value: "白色", able: true },
            { format_goods_spec_item_value: "黑色", able: true },
          ],
        },
        {
          format_goods_spec_item_key: "套餐",
          format_goods_spec_item_value_all: [
            { format_goods_spec_item_value: "套餐一", able: true },
            { format_goods_spec_item_value: "套餐二", able: true },
            { format_goods_spec_item_value: "套餐三", able: true },
            { format_goods_spec_item_value: "套餐四", able: true },
          ],
        },
        {
          format_goods_spec_item_key: "存储",
          format_goods_spec_item_value_all: [
            { format_goods_spec_item_value: "64G", able: true },
            { format_goods_spec_item_value: "128G", able: true },
            { format_goods_spec_item_value: "256G", able: true },
          ],
        },
      ],
    };
  },
  components: {},
  created() {
    this.sku = sku;
    this.attach_spec = attach_spec;

    //根据原始数据创建  选中的商品属性  和  选中的附加属性
    attach_spec.forEach((a) => {
      this.$set(this.select_attach_spec, a.attach_spec_item_key, []);
    });
    original_spec.forEach((a) => {
      this.$set(this.select_spec, a.original_spec_item_key, "");
    });

    //筛选有库存的商品
    this.sku_instock = Object.keys(this.sku).reduce((a, b) => {
      if (this.sku[b].stock !== 0) {
        a[b] = this.sku[b];
      }
      return a;
    }, {});

    //格式化商品规格，添加able
    this.format_goods_spec = original_spec.map((a) => {
      return {
        format_goods_spec_item_key: a.original_spec_item_key,
        format_goods_spec_item_value_all: a.original_spec_item_value_all.map(
          (b) => {
            return {
              format_goods_spec_item_value: b,
              able: this.judge_isAble(a.original_spec_item_key, b),
            };
          }
        ),
      };
    });

    //格式化附加规格，添加isChecked
    this.format_attach_spec = attach_spec.map((a) => {
      return {
        format_attach_spec_key: a.attach_spec_item_key,
        format_attach_spec_value_all: a.attach_spec_item_value_all.map((b) => {
          return {
            format_attach_spec_value: b,
            isChecked: false,
          };
        }),
      };
    });

    //根据商品原始数据，得到所有商品的所有组合对应的 库存 和 价格数组
    this.skuComb_SP_list = this.count_skuComb_SP(sku);
  },
  computed: {
    //判断规格值是否添加active类名
    isActive() {
      return function (select_key, current_value) {
        return this.select_spec[select_key] == current_value;
      };
    },
    //return选择的规格值string形式
    select_spec_values_str() {
      //用分号连接数组为字符串
      return Object.values(this.select_spec).join(";");
    },
    //展示价格
    price() {
      //遍历数组，取出最大和最小值
      //最大最小一样，则显示最小值
      //最大和最小不一样，最小~最大展示
      let prices = this.skuComb_SP_list[this.select_spec_values_str].prices;
      //min方法参数不能为数组，null为任何值都行，主要是为了传第二个参数 数组prices
      let min_price = Math.min.apply({}, prices);
      let max_price = Math.max.apply({}, prices);
      return min_price === max_price ? min_price : `${min_price}~${max_price}`;
    },
    //展示库存
    stock() {
      return this.skuComb_SP_list[this.select_spec_values_str].stock;
    },
  },
  methods: {
    //传入规格值与已选的规格值组合后是否符合规则，符合return值true
    judge_isAble(key, value) {
      let copy_select_spec = JSON.parse(JSON.stringify(this.select_spec));
      copy_select_spec[key] = value; //key='颜色'，value='红色'
      let select_spec_value = Object.values(copy_select_spec); //选择的规格值 数组
      let sku_instock_key = Object.keys(this.sku_instock); //有库存商品str形式 数组
      let flag = sku_instock_key.some((sku_instock_key_item) => {
        let i = 0;
        select_spec_value.forEach((select_spec_value_item) => {
          if (
            //select_spec_value_items  已选的规格值1
            //sku_instock_key_item  有库存的商品1
            select_spec_value_item != "" &&
            sku_instock_key_item.indexOf(select_spec_value_item) != -1
            //如果表达式为true，则已选规格值1存在于商品1中
          ) {
            i++;
          } else if (select_spec_value_item == "") {
            i++;
          }
        });
        return i == original_spec.length;
      });
      return flag;
    },
    //商品规格值的点击事件
    change_spec_value_status(key, value, able) {
      if (!able) return; //able是false，规格值不能选，直接退出
      if (this.select_spec[key] == value) {
        this.select_spec[key] = "";
      } else {
        this.select_spec[key] = value;
      }
      //修改format_goods_spec的able
      this.format_goods_spec.forEach((a) => {
        a.format_goods_spec_item_value_all.forEach((b) => {
          b.able = this.judge_isAble(
            a.format_goods_spec_item_key,
            b.format_goods_spec_item_value
          );
        });
      });
    },
    //附加属性值的点击事件
    //如果已经选中，点击则取消选中且在this.select_attach_spec[键]对应的值中删除该value
    attach_spec_click(key, value, check, keyIndex, valueIndex) {
      if (!check) {
        this.select_attach_spec[key].push(value);
        this.format_attach_spec[keyIndex].format_attach_spec_value_all[
          valueIndex
        ].isChecked = true;
      } else {
        let delIndex = this.select_attach_spec[key].findIndex((a) => a == key);
        this.select_attach_spec[key].splice(delIndex, 1);
        this.format_attach_spec[keyIndex].format_attach_spec_value_all[
          valueIndex
        ].isChecked = false;
      }
    },
    //传入sku，返回所有商品生成的所有组合的价格和库存列表
    count_skuComb_SP(sku) {
      //S代表stock，P代表price
      let count_skuComb_SP_res = {}; //统计结果保存至count_skuComb_SP_res
      let skuKeys = Object.keys(sku);
      //skuKeys=[["红色", "套餐一", "128G"],["红色", "套餐一", "256G"]...]
      skuKeys.forEach((skuKey) => {
        //将skuKey以分号分隔为数组
        let skuItem_str_to_arr = skuKey.split(";");
        //使用skuItemToComb函数得到当前商品的所有组合skuItemComb
        let skuItemComb = this.skuItemToComb(skuItem_str_to_arr);
        //// skuItemComb = [[空属性 × 3],['黑', 空属性 × 2],[空白, '16G', 空白],[空属性 × 2, '电信'],['黑', '16G', 空白],['黑', 空白, '电信'],[空白, '16G', '电信'],['黑', '16G', '电信']]

        //然后遍历当前商品所有组合skuItemComb，查看count_skuComb_SP_res中是否有skuItemComb的数组元素，
        ////没有则先给count_skuComb_SP_res[b.join(';')]添加属性名为stock，值为sku[item].stock；再给count_skuComb_SP_res[b.join(';')]添加属性名为prices，值为[sku[item].price]数组形式
        ////有则给item.stock累加sku[item].stock，且给item.prices加入新元素sku[item].price
        skuItemComb.reduce((a, b) => {
          //先将数组元素b由数组转为字符串，用分号分隔
          ////此时b.join(';') = ' ; ; '
          ////sku[item]即为{ price: 100, stock: 10 }
          if (a[b.join(";")]) {
            a[b.join(";")].stock += sku[skuKey].stock;
            a[b.join(";")].prices.push(sku[skuKey].price);
          } else {
            a[b.join(";")] = {
              stock: sku[skuKey].stock,
              prices: [sku[skuKey].price],
            };
          }
          return count_skuComb_SP_res;
        }, count_skuComb_SP_res);
      });
      return count_skuComb_SP_res;
    },
    //填充空位，skuItemToComb中用到的方法
    fill_vacancy(m, n) {
      //fill_vacancy填坑函数
      let filled_res_all = [], //filled_res_all填充的全部结果
        filled_res = [], //filled_res填充的结果
        isEnd = false;
      for (let i = 0; i < m; i++) {
        //m=4,n=3,i=0,1,2,3
        ////i=0,filled_res[0]=0<3,filled_res[0]=1
        ////i=1,filled_res[1]=1<3,filled_res[1]=1
        ////i=2,filled_res[2]=2<3,filled_res[2]=1
        ////i=3,filled_res[3]=3=3,filled_res[3]=0
        ////filled_res=[1110]
        filled_res[i] = i < n ? 1 : 0;
      }
      //filled_res_all=[[1110]]
      filled_res_all.push(filled_res.concat());
      // 当n不等于0并且m大于n的时候进入
      if (n && m > n) {
        while (!isEnd) {
          let flag = 0;
          for (let i = 0; i < m - 1; i++) {
            if (filled_res[i] == 1 && filled_res[i + 1] == 0) {
              for (let j = 0; j < i; j++) {
                filled_res[j] = j < flag ? 1 : 0;
              }
              filled_res[i] = 0;
              filled_res[i + 1] = 1;
              let aTmp = filled_res.concat();
              filled_res_all.push(aTmp);
              //slice(-n)即为从数组倒数第n个元素取到最后一个元素
              //截取filled_res的后三位，如果不包含0走if，包含0跳出循环
              if (aTmp.slice(-n).join("").indexOf("0") == -1) {
                isEnd = true;
              }
              break;
            }
            filled_res[i] == 1 && flag++;
          }
        }
      }
      return filled_res_all;
    },
    //商品转为组合，count_skuComb_SP中用到的方法
    skuItemToComb(skuItem) {
      let skuComb = [];
      for (let n = 0; n <= skuItem.length; n++) {
        let flagArrs = this.fill_vacancy(skuItem.length, n);
        while (flagArrs.length) {
          let flagArr = flagArrs.shift();
          let combArr = Array(skuItem.length);
          for (let i = 0; i < skuItem.length; i++) {
            if (flagArr[i]) {
              combArr[i] = skuItem[i];
            }
          }
          skuComb.push(combArr);
        }
      }
      return skuComb;
    },
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.sku {
  background-color: #fff;
  padding-top: 10px;
  .goods_spec {
    .price_stock {
      font-size: 40px;
      display: flex;
      justify-content: space-around;
    }
    .spec_item {
      .spec_item_key {
        margin: 10px;
      }
      .spec_item_value_all {
        display: flex;
        .spec_item_value {
          background-color: #f6f6f6;
          color: #989898;
          margin: 10px;
          padding: 5px;
        }
        .able {
          color: black;
        }
        .active {
          color: red;
          border: 1px solid red;
        }
      }
    }
  }
  .attach_spec {
    .attach_key {
      margin: 10px;
    }
    .attach_values {
      display: flex;
      .attach_value {
        background-color: #f6f6f6;
        margin: 10px;
        padding: 5px;
      }
      .active {
        color: red;
        border: 1px solid red;
      }
    }
  }
}
</style>

