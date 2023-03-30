import Home from 'pages/home/Home'

export default [{ //重定向
  path: '/',
  redirect: '/home'
},
{ // 首页
  path: '/home',
  name: 'Home',
  meta: {
    title: '首页',
    showTabbar: true,
    keepAlive: true
  },
  component: Home
},

]