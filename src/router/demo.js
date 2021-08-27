const ACompnenent = () => import('../pages/a.vue')

export default [{
  path: '/a',
  name: 'Apage',
  meta: {
    title: 'a',
    scroll: true, // 判断是否记录滚动位置
    keepAlive: true // 是否不销毁组件
  },
  component: ACompnenent
}]