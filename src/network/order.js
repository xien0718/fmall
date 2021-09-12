import request from './request';
/**
 * @desc 获取订单页数据
 */
const getOrderListData = params => request({
    url: "/mock/order/orderlist",
    method: 'get',
    params
})

/**
 * @desc 获取(点击立即购买按钮)服务端响应的数据
 */
const createOrder = data => request({
    url: "/mock/order/createorder",
    method: 'post',
    data
})

/**
 * @desc 获取(点击去支付按钮)服务端响应的数据
 */
const toPay = data => request({
    url: "/mock/order/topay",
    method: 'post',
    data
})

/**
 * @desc 获取(点击取消订单按钮)服务端响应的数据
 */
const cancelOrder = data => request({
    url: "/mock/order/cancelorder",
    method: 'post',
    data
})


/**
 * @desc 获取(点击申请退款按钮)服务端响应的数据
 */
const applyForRefund = data => request({
    url: "/mock/order/applyforrefund",
    method: 'post',
    data
})

/**
 * @desc 获取(点击催发货按钮)服务端响应的数据
 */
const rushToSendOut = data => request({
    url: "/mock/order/rushtosendout",
    method: 'post',
    data
})

/**
 * @desc 获取(点击确认收货按钮)服务端响应的数据
 */
const confirmReceipt = data => request({
    url: "/mock/order/confirmreceipt",
    method: 'post',
    data
})

/**
 * @desc 获取(点击申请售后按钮)服务端响应的数据
 */
const applyForAfterSales = data => request({
    url: "/mock/order/applyforaftersales",
    method: 'post',
    data
})

/**
 * @desc 获取(点击删除订单按钮)服务端响应的数据
 */
const delOrder = data => request({
    url: "/mock/order/delorder",
    method: 'post',
    data
})

/**
 * @desc 获取(点击再次购买按钮)服务端响应的数据
 */
const reorder = data => request({
    url: "/mock/order/reorder",
    method: 'post',
    data
})

/**
 * @desc 点击商品卡片跳转至订单详情并传参order_id，根据order_id来请求对应的商品数据
 */
const getOrderDetailData = data => request({
    url: "/mock/order/resorderdetaildata",
    method: 'post',
    data
})
export {
    getOrderListData,
    createOrder,
    toPay,
    cancelOrder,
    applyForRefund,
    rushToSendOut,
    confirmReceipt,
    applyForAfterSales,
    delOrder,
    reorder,
    getOrderDetailData
}