import Vue from 'vue'
import VueRouter from 'vue-router'
import demo from './demo'
import home from './home'
import found from './found'
import user from './user'
import login from './login'
import order from './order'
import {
  TOKENKEY
} from 'utils/config'
Vue.use(VueRouter)

// 所有路由信息
const routes = [
  ...demo,
  ...home,
  ...found,
  ...user,
  ...login,
  ...order
]

// 创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 守卫函数
router.beforeEach((to, from, next) => {
  //从a路由跳转到b路由，to就是b，from就是a
  // console.log('to', to);
  // console.log('from', from);
  //修改当前活跃的页面title，如果活跃路由的meta.title没有值就用mall
  document.title = to.meta.title || 'mall'
  //next调用的时候不传参数，则会跳转至to对应的路由，
  //next调用的时候如果传入参数{path:'/login'},则会跳转至登录页面
  //next调用的时候也可以传入参数{name:'Login'},也会跳转至登录页面
  //从本地存储取出token，如果没有token且当前活跃路由不是login，则跳转到login页
  let token = localStorage.getItem(TOKENKEY);
  if (to.name !== 'Login' && !token) {
    next({
      path: '/login'
    })
  } else next()
})
// 导出路由
export default router


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}