/**
  OrderStateWaitPay = 10,     //待付款  （左：取消订单 右：去支付）  
  OrderStatePayed = 20,       //已付款  （左：申请退款 右：催发货）
  OrderStateWaitShip = 30,    //待发货  （左：无       右：催发货）
  OrderStateWaitRecv = 40,    //待收货  （左：无       右：确认收货）
  OrderStateDone = 50,        //交易完成（左：无       右：申请售后）
  OrderStateClose = 60,       //支付超时（左：无       右：重新购买)
*/
import * as orderRequest from 'network/order'

//订单tab分类：全部、待付款、待发货、待收货、已完成、已取消
export const ORDERCATEGORY = [{
        desc: '全部',
        icon: 'cashier-o',
        statusCode: 0,
        orderStatusShowing: 0 //当前活跃的tab正在展示的商品卡片的order.status
    },
    {
        desc: '待付款',
        icon: 'cashier-o',
        statusCode: 1,
        orderStatusShowing: 10
    },
    {
        desc: '待发货',
        icon: 'logistics',
        statusCode: 2,
        orderStatusShowing: 30

    },
    {
        desc: '待收货',
        icon: 'send-gift-o',
        statusCode: 3,
        orderStatusShowing: 40
    },
    {
        desc: '已完成',
        icon: 'sign',
        statusCode: 4,
        orderStatusShowing: 50
    },
    {
        desc: '已取消',
        icon: 'sign',
        statusCode: 5,
        orderStatusShowing: 60

    }
]
//订单页商品状态：描述(待付款、已付款等)、按钮内容、按钮类型、按钮颜色、按钮圆角、点击按钮(申请退款、催发货等)触发的方法
export const ORDERSTATUS = {
    //status：点击按钮触发的方法
    //立即购买(创建订单)：详情页立即购买按钮
    0: {
        desc: '立即购买',
        button: {
            toBuy: {
                trigger: 'createOrder', //点击该按钮触发方法:立即购买，创建订单
                text: '立即购买',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
            }
        }
    },
    //待付款：按钮去支付
    10: {
        desc: '待付款', //描述
        button: {
            cancelOrder: {
                trigger: 'cancelOrder', //点击该按钮触发方法:取消订单
                text: '取消',
                type: 'default', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: true
            },
            toPay: {
                trigger: 'toPay', //点击该按钮触发方法:去支付
                text: '去支付',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: false
            }
        }
    },
    //已付款：申请退款
    20: {
        desc: '已付款', //描述
        button: {
            applyForRefund: {
                trigger: 'applyForRefund', //点击该按钮触发:创建订单方法
                text: '申请退款',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: false
            }
        }
    },
    //待发货：催发货
    30: {
        desc: '待发货', //描述
        button: {
            rushToSendOut: {
                trigger: 'rushToSendOut', //点击该按钮触发:催发货
                text: '催发货',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: false
            }
        }
    },
    //待收货：确认收货
    40: {
        desc: '待收货', //描述
        button: {
            confirmReceipt: {
                trigger: 'confirmReceipt', //点击该按钮触发方法：确认收货
                text: '确认收货',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: false
            }
        }
    },
    //已完成：申请售后
    50: {
        desc: '已完成', //描述
        button: {
            applyForAfterSales: {
                trigger: 'applyForAfterSales', //点击该按钮触发方法:申请售后
                text: '申请售后',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: false
            }
        }
    },
    //已取消：删除订单、再次购买
    60: {
        desc: '已取消', //描述
        button: {
            delOrder: {
                trigger: 'delOrder', //点击该按钮触发方法:申请售后
                text: '删除订单',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: true
            },
            reorder: {
                trigger: 'reorder', //点击该按钮触发方法:申请售后
                text: '再次购买',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true, //是否圆角
                plain: false
            }
        }
    }
}
//订单方法：创建订单、去支付等
// {
//     createOrder,
//     toPay,
//     applyForRefund,
//     rushToSendOut,
//     confirmReceipt,
//     applyForAfterSales,
//     delOrder,
//     reorder
// }
export const ORDERSBTNMETHODS = {
    //商品详情页的立即购买按钮对应的方法
    async createOrder(data, cb) {
        let res = await orderRequest.createOrder(data);
        if (res && res.errorCode == 0) {
            return cb();
        }
    },

    //订单列表页的商品卡片按钮对应的方法
    //cb是orderListItem中的handleBtnClick，点击不同的按钮触发不同的方法并弹窗提示
    async toPay(data, cb) {
        //data.orderListItem是订单页商品卡片展示的商品数据，data.btnType是点击的按钮对象
        //res是点击按钮发送请求后服务端响应的数据，如果响应结果errorCode为0则说明响应成功，此时调用cb即handleBtnClick弹窗且调用微信支付方法
        let res = await orderRequest.toPay();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async cancelOrder(data, cb) {
        //data.orderListItem是订单页商品卡片展示的商品数据，data.btnType是点击的按钮对象
        //res是点击按钮发送请求后服务端响应的数据，如果响应结果errorCode为0则说明响应成功，此时调用cb即handleBtnClick弹窗且调用微信支付方法
        let res = await orderRequest.toPay();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async applyForRefund(data, cb) {
        let res = await orderRequest.applyForRefund();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async rushToSendOut(data, cb) {
        let res = await orderRequest.rushToSendOut();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async confirmReceipt(data, cb) {
        let res = await orderRequest.confirmReceipt();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async applyForAfterSales(data, cb) {
        let res = await orderRequest.applyForAfterSales();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async delOrder(data, cb) {
        let res = await orderRequest.delOrder();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
    async reorder(data, cb) {
        let res = await orderRequest.reorder();
        if (res && res.errorCode == 0) {
            return cb && cb(data.btnType, res)
        }
    },
}