import Vue from 'vue'
import 'vant/lib/index.css' // 样式文件需要单独引入
// 全量引入UI 组件
import Vant from 'vant'
import {
    Toast,
    Notify
} from 'vant'


// 全量引入UI 组件
Vue.use(Vant);
Vue.prototype.$toast = Toast
Vue.prototype.$notify = Notify