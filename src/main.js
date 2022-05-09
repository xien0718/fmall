import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './vant'
import 'amfe-flexible'
import dayjs from 'dayjs';
import {
  nanoid
} from 'nanoid'
import FastClick from 'fastclick';
import '../public/static/iconfont.js'
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$nanoid = nanoid
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')

//解决移动端300ms延迟
if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body);
  }, false);
}