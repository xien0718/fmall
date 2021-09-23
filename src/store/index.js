import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import {
  moduleA
} from './moduleA'
import {
  moduleB
} from './moduleB'

import {
  order
} from './order'
import * as types from './types'

Vue.use(Vuex)
// 模块化state
const modules = {
  moduleA,
  moduleB,
  order
}
//  创建store
const store = new Vuex.Store({
  plugins: [
    createPersistedState({
      key: '$vuexState'
    })
  ],
  state: {
    count1: 0,
    user: {
      name: 'leo',
      age: 11,
      birthday: '1970/01/01'
    },

  },
  getters: {

  },
  mutations: { // 只能同步
    //更新用户信息
    updateUserInfo(state, payload) {
      state.user = payload
    },
    //更新用户生日
    updateUserBirthday(state, payload) {
      state.user.birthday = payload
    },
    updateUserNickname(state, payload) {
      state.user.nick_name = payload
    }

  },
  actions: { // 处理异步 ajax请求 文件流等

  },
  modules,

})


// 导出
export default store