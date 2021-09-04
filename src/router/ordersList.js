const OrdersList = () => import('pages/ordersList/OrdersList')
export default [{
    path: '/ordersList',
    meta: {
        title: '订单',
        showTabbar: false,
        keepAlive: false // 是否不销毁组件

    },
    component: OrdersList
}]