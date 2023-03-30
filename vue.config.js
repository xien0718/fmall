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
  resUpdateUserInfo,
} = require('./src/mock/order')
const {
  resGoodsDetail
} = require('./src/mock/detail')
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const bodyParser = require('body-parser'); //该插件用于服务端获取客户端发送请求传递的参数
module.exports = {

  lintOnSave: false,
  //在chainWebpack中配置别名
  chainWebpack: config => {
    config.resolve.alias
      .set('assets', '@/assets')
      .set('components', '@/components')
      .set('mock', '@/mock')
      .set('pages', '@/pages')
      .set('router', '@/router')
      .set('utils', '@/utils')
      .set('store', '@/store')
      .set('network', '@/network')
  },
  devServer: {
    //相应数据的服务端主机为192
    port: 3333,
    //关闭host检查，保证魔法隧道可以访问
    disableHostCheck: true,
    //每次在3333端口启动服务，不会占用默认8080端口
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

      //响应商品详情页数据/
      app.get('/mock/detail/getgoodsdetail', resGoodsDetail)

    },
    //设置跨域
    proxy: {
      //当请求url为/mock/xxx时，会自动将请求的(协议+域名+端口)修改为target
      // "/mock/*": {
      //   target: 'http://43946u1m30.qicp.vip',
      //   changeOrigin: true
      // },
      "^/sns": { //当请求url以/sns开头,使用如下代理
        //将请求url的协议域名端口替换成target的值，即代理后完整的请求地址为：target的值+请求url
        target: `https://api.weixin.qq.com`,
        ws: true, //websocket
        changeOrigin: true, //是否跨域
        pathRewrite: {} //url无需重写直接拼接
      },
      // '^/api': {
      //   target: 'http://learn-vue.natapp1.cc',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // },
      // '^/assets': {
      //   //   将http://localhost:3333替换成target
      //   target: 'file://',
      //   ws: true,
      //   changeOrigin: true,
      //   pathRewrite: {},
      // },
    },
  },
  css: {
    //移动端适配方案之postcss,用于将px转化为rem
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
  },

  //webpack的loader配置
  // configureWebpack: config => {
  //   // 11-02配置vux失败，弃用vux
  //   // vuxLoader.merge(config, {
  //   //   plugins: ['vux-ui', {
  //   //     name: 'less-theme',
  //   //     path: './src/theme.less'
  //   //   }]
  //   // })

  //   //url-loader配置
  //   // config.module.rules.push(
  //   //   {
  //   //     test: /\.(png|jpg|gif)$/i,
  //   //     use: [
  //   //       {
  //   //         loader: 'url-loader',
  //   //         options: {
  //   //           limit: 8192,
  //   //         },
  //   //       },
  //   //     ],
  //   //   },
  //   //   {
  //   //     test: /\.(png|jpe?g|gif)$/i,
  //   //     use: [
  //   //       {
  //   //         loader: 'file-loader',
  //   //       },
  //   //     ],
  //   //   },
  //   // )
  // },
}