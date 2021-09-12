const Order = () => import('pages/order/Order')
const OrderItemDetail = () => import('pages/order/childComps/OrderItemDetail')

export default [{
    path: '/order',
    meta: {
        title: '订单',
        showTabbar: false,
        keepAlive: true // 是否不销毁组件
    },
    component: Order
}, {
    path: '/orderitemdetail',
    meta: {
        title: '订单详情',
        showTabbar: false,
        keepAlive: false
    },
    component: OrderItemDetail
}]