const {
  resSwiper,
  resGoodsList
} = require('./src/mock/home.js');
const {
  resLogin,
  resLogout
} = require('./src/mock/login.js');
const {
  resFoundList,
  resFoundDetail
} = require('./src/mock/found.js');
const {
  resOrderListData,
  resCreateOrder,
  resToPay,
  resApplyForRefund,
  resRushToSendOut,
  resConfirmReceipt,
  resApplyForAfterSales,
  resDelOrder,
  resReorder
} = require('./src/mock/orders')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
module.exports = {
  configureWebpack: {
    //别名
    resolve: {
      alias: {
        //使用名：resolve(对应的文件夹)
        'assets': '@/assets',
        'components': '@/components',
        'mock': '@/mock',
        'pages': '@/pages',
        'router': '@/router',
        'utils': '@/utils',
        'store': '@/store',
        'network': '@/network'
      }
    }
  },
  devServer: {
    //每次在3333端口启动服务，不会占用默认8080端口
    port: 3333,
    //相当于const app=express(),app.get或app.post
    before(app, /*server, compiler */ ) {

      // 首页相关mock接口
      //当客户端请求为post，且url为第一个参数，则执行第二个参数，响应json数据
      app.post('/mock/home/getswiper', resSwiper)
      app.post('/mock/home/getgoods', resGoodsList)

      // 用户页相关mock 接口
      app.get('/mock/user/logout', resLogout)
      //当客户端请求为post，且url为第一个参数，则执行第二个参数，服务端响应token和用户信息
      app.post('/mock/user/login', resLogin)

      //发现页相关mock接口
      app.post('/mock/found/getfoundlist', resFoundList);
      app.post('/mock/found/getfounddetail', resFoundDetail)

      //订单页相关mock接口
      //当请求为post且url为第一个参数，执行第二个参数，响应订单页列表数据
      app.get('/mock/orders/orderlist', resOrderListData)
      app.post('/mock/orders/createorder', resCreateOrder)
      app.post('/mock/orders/topay', resToPay)
      app.post('/mock/orders/applyforrefund', resApplyForRefund)
      app.post('/mock/orders/rushtosendout', resRushToSendOut)
      app.post('/mock/orders/confirmreceipt', resConfirmReceipt)
      app.post('/mock/orders/applyforaftersales', resApplyForAfterSales)
      app.post('/mock/orders/delorder', resDelOrder)
      app.post('/mock/orders/reorder', resReorder)

      //
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 75,
            propList: ['*'],
            "selectorBlackList": ["van-"] //排除vant框架相关组件
          })
        ]
      }
    }
  }
}