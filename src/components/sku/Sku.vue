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
  </div>
</template>

<script>
import { spec, sku } from "utils/sku";
export default {
  name: "Sku",
  data() {
    return {
      sku: [],
      spec: [],
      selectSpec: {}, //用来存储 所有已选择的规格值spec_value的 对象
    };
  },
  components: {},
  computed: {},
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
  },
  methods: {
    /**
     * @desc 判断spec_value是否可选
     * @param key {String} 点击的规格键spec_key
     * @param value {String} 点击的规格值spec_value
     * @returns {Boolean} flag是否可以被选中
     */
    isAble(key, value) {
      //把this.selectSpec深拷贝，里面存储的是所有已选择的spec_value
      let copySelectSpec = JSON.parse(JSON.stringify(this.selectSpec));
      //把点击的规格值spec_value赋给点击的规格键spec_key
      copySelectSpec[key] = value;

      //假设已经选择了颜色：紫色，套餐：套餐四，内存：未选择，
      //copySelectSpec = { '颜色':'紫色','套餐':'套餐四','内存':'' }

      //第一次循环：创建计数器i=0，spec.length=3，item.skuItem = ["红色", "套餐一", "128G"]
      //第一次循环中的第一次循环：copySelectSpec=['颜色']='紫色'，走if，再判断["红色", "套餐一", "128G"]中是否包含'紫色'，不包含，此时i不等于3，结束第一次循环中的第一次循环，
      //第一次循环中的第二次循环：copySelectSpec=['套餐']='套餐一'，走if，再判断["红色", "套餐一", "128G"]中是否包含'套餐一'，包含，i=i+1=1，此时i不等于3，结束第一次循环中的第二次循环
      let flag = this.sku.some((item) => {
        let i = 0;
        for (let k in copySelectSpec) {
          if (
            copySelectSpec[k] != "" &&
            item.skuItem.includes(copySelectSpec[k])
          ) {
            i++;
          } else if (copySelectSpec[k] == "") {
            i++;
          }
        }
        return i == spec.length;
      });
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
      //按钮逻辑：
      //1.如果该spec_value已经被选中，即存在于selectSpec中，则点击取消选中
      //实现：
      //在已经选择的规格selectSpec中，点击的spec_key对应的值是否等于点击的spec_value,如果等于说明该spec_value已经被选中，此时点击应该取消选中，从selectSpec中删除
      if (this.selectSpec[key] === value) {
        this.selectSpec[key] = "";
        //2.如果spec_value没有被选中，不存在于selectSpec中，则点击
      } else {
        this.selectSpec[key] = value;
      }
      //首先执行isAble('颜色','红色')、isAble('颜色','紫色')、isAble('颜色','白色')、isAble('颜色','黑色')

      //然后执行isAble('套餐','套餐一')、isAble('套餐','套餐二')、isAble('套餐','套餐三')、isAble('套餐','套餐四')

      //最后执行isAble('存储','64G')、isAble('存储','128G')、isAble('存储','256G')
      this.spec.forEach((item) => {
        //item是
        //{"spec_key":"颜色",
        //"spec_value_all":[
        //    {
        //        "spec_value":"红色",
        //        "able":true
        //  },
        //  {
        //      "spec_value":"紫色",
        //      "able":true
        //  },
        //  {
        //      "spec_value":"白色",
        //      "able":true
        //  },
        //  {
        //      "spec_value":"黑色",
        //      "able":true
        //  }
        //]}
        item.spec_value_all.forEach((its) => {
          //its是{ "spec_value":"红色","able":true }
          its.able = this.isAble(item.spec_key, its.spec_value);
        });
      });
    },
  },
  mounted() {},
};
</script>

<style lang='less' scoped>
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