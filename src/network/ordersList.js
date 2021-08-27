import request from './request';
/**
 * @desc 获取订单页数据
 */
const getOrdersListData = params => request({
    url: "/mock/orders/orderlist",
    method: 'get',
    params
})

/**
 * @desc 获取(点击立即购买按钮)服务端响应的数据
 */
const createOrder = data => request({
    url: "/mock/orders/createorder",
    method: 'post',
    data
})

/**
 * @desc 获取(点击去支付按钮)服务端响应的数据
 */
const toPay = data => request({
    url: "/mock/orders/topay",
    method: 'post',
    data
})


/**
 * @desc 获取(点击申请退款按钮)服务端响应的数据
 */
const applyForRefund = data => request({
    url: "/mock/orders/applyforrefund",
    method: 'post',
    data
})

/**
 * @desc 获取(点击催发货按钮)服务端响应的数据
 */
const rushToSendOut = data => request({
    url: "/mock/orders/rushtosendout",
    method: 'post',
    data
})

/**
 * @desc 获取(点击确认收货按钮)服务端响应的数据
 */
const confirmReceipt = data => request({
    url: "/mock/orders/confirmreceipt",
    method: 'post',
    data
})

/**
 * @desc 获取(点击申请售后按钮)服务端响应的数据
 */
const applyForAfterSales = data => request({
    url: "/mock/orders/applyforaftersales",
    method: 'post',
    data
})

/**
 * @desc 获取(点击删除订单按钮)服务端响应的数据
 */
const delOrder = data => request({
    url: "/mock/orders/delorder",
    method: 'post',
    data
})

/**
 * @desc 获取(点击再次购买按钮)服务端响应的数据
 */
const reorder = data => request({
    url: "/mock/orders/reorder",
    method: 'post',
    data
})
export {
    getOrdersListData,
    createOrder,
    toPay,
    applyForRefund,
    rushToSendOut,
    confirmReceipt,
    applyForAfterSales,
    delOrder,
    reorder
}