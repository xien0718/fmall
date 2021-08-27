import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import a from './a'
import b from './b'
import * as types from './types'

Vue.use(Vuex)
// 模块化state
const modules = {
  a,
  b
}
//  创建store
const store = new Vuex.Store({
  state: {
    count1: 0,
    user: {
      name: 'leo',
      age: 11
    },

  },
  getters: {

  },
  mutations: { // 只能同步
    updateUserInfo(state, payload) {
      state.user = payload
    }
  },
  actions: { // 处理异步 ajax请求 文件流等

  },
  modules,
  plugins: [
    createPersistedState({
      key: '$vuex'
    })
  ],
})


// 导出
export default store