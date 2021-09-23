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
  resCancelOrder,
  resApplyForRefund,
  resRushToSendOut,
  resConfirmReceipt,
  resApplyForAfterSales,
  resDelOrder,
  resReorder,
  resOrderDetailData,
  resUpdateUserInfo
} = require('./src/mock/order')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const bodyParser = require('body-parser'); //该插件用于服务端获取客户端发送请求传递的参数
module.exports = {
  lintOnSave: false,
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
    //关闭host检查，保证魔法隧道可以访问
    disableHostCheck: true,
    //每次在3333端口启动服务，不会占用默认8080端口
    port: 3333,
    //相当于const app=express(),app.get或app.post
    before(app) {
      app.use(bodyParser.json()); //数据JSON类型
      // app.use(bodyParser.urlencoded({
      //   extended: false
      // })); //解析post请求数据
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
      app.get('/mock/order/orderlist', resOrderListData)
      app.post('/mock/order/createorder', resCreateOrder)
      app.post('/mock/order/topay', resToPay)
      app.post('/mock/order/cancelOrder', resCancelOrder)
      app.post('/mock/order/applyforrefund', resApplyForRefund)
      app.post('/mock/order/rushtosendout', resRushToSendOut)
      app.post('/mock/order/confirmreceipt', resConfirmReceipt)
      app.post('/mock/order/applyforaftersales', resApplyForAfterSales)
      app.post('/mock/order/delorder', resDelOrder)
      app.post('/mock/order/reorder', resReorder)
      app.post('/mock/order/resorderdetaildata', resOrderDetailData)
      app.post('/mock/order/requestupdateuserinfo', resUpdateUserInfo)
      //
    },
    //设置跨域
    proxy: {
      "/mock/*": {
        target: 'http://localhost:3333',
        changeOrigin: true
      }
    },
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