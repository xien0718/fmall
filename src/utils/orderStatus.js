/**
  OrderStateWaitPay = 10,     //待付款  （左：取消订单 右：去支付）  
  OrderStatePayed = 20,       //已付款  （左：申请退款 右：催发货）
  OrderStateWaitShip = 30,    //待发货  （左：无       右：催发货）
  OrderStateWaitRecv = 40,    //待收货  （左：无       右：确认收货）
  OrderStateDone = 50,        //交易完成（左：无       右：申请售后）
  OrderStateClose = 60,       //支付超时（左：无       右：重新购买)
*/
import * as orderRequest from 'network/ordersList'

//订单tab分类：全部、待付款、待发货、待收货、已完成、已取消
export const ORDERCATEGORY = [{
        desc: '全部',
        icon: 'cashier-o',
        statusCode: 0,
        activeOrderTab: 0 //订单页当前展示的tab对应的orderList的数组元素orderListItem.order_status
    },
    {
        desc: '待付款',
        icon: 'cashier-o',
        statusCode: 1,
        activeOrderTab: 10

    },
    {
        desc: '待发货',
        icon: 'logistics',
        statusCode: 2,
        activeOrderTab: 30

    },
    {
        desc: '待收货',
        icon: 'send-gift-o',
        statusCode: 3,
        activeOrderTab: 40
    },
    {
        desc: '已完成',
        icon: 'sign',
        statusCode: 4,
        activeOrderTab: 50

    },
    {
        desc: '已取消',
        icon: 'sign',
        statusCode: 5,
        activeOrderTab: 60

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
                round: true //是否圆角
            }
        }
    },
    //待付款：按钮去支付
    10: {
        desc: '待付款', //描述
        button: {
            toPay: {
                trigger: 'toPay', //点击该按钮触发方法:去支付
                text: '去支付',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true //是否圆角
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
                round: true //是否圆角
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
                round: true //是否圆角
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
                round: true //是否圆角
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
                round: true //是否圆角
            }
        }
    },
    //已取消：删除订单、再次购买
    60: {
        desc: '已取消', //描述
        trigger: [ //点击该按钮触发:删除订单，重新下单
            'delOrder',
            'reorder'
        ],
        button: {
            delOrder: {
                trigger: 'delOrder', //点击该按钮触发方法:申请售后
                text: '删除订单',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true //是否圆角
            },
            reorder: {
                trigger: 'reorder', //点击该按钮触发方法:申请售后
                text: '再次购买',
                type: 'info', //按钮种类
                color: '#00b799', //按钮颜色
                round: true //是否圆角
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
import {
    Notify
} from 'vant'
export const ORDERSBTNMETHODS = {
    async createOrder(data, cb = () => {}) {
        let res = await orderRequest.createOrder();
        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                message: "创建订单"
            });

        }
    },
    async toPay(data) {
        let res = await orderRequest.toPay();
        console.log(data);

        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "去支付"
            });
        }
    },
    async applyForRefund(data, cb = () => {}) {
        let res = await orderRequest.applyForRefund();
        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "申请退款"
            });
        }
    },
    async rushToSendOut(data, cb = () => {}) {
        let res = await orderRequest.rushToSendOut();
        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "催发货"
            });
        }
    },
    async confirmReceipt(data, cb = () => {}) {
        let res = await orderRequest.confirmReceipt();
        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "确认收货"
            });
        }
    },
    async applyForAfterSales(data, cb = () => {}) {
        let res = await orderRequest.applyForAfterSales();
        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "申请售后"
            });
        }
    },
    async delOrder(data, cb = () => {}) {
        let res = await orderRequest.delOrder();
        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "删除订单"
            });
        }
    },
    async reorder(data, cb = () => {}) {
        let res = await orderRequest.reorder();

        if (res && res.errorCode == 0) {
            Notify({
                type: "primary",
                background: '#00b799',
                message: "再次购买"
            });
        }
    },
}