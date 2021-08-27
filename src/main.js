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

Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs;
Vue.prototype.$nanoid = nanoid
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')