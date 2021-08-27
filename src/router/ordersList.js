const OrdersList = () => import('pages/ordersList/OrdersList')
export default [{
    path: '/ordersList',
    meta: {
        title: '订单',
        showTabbar: false
    },
    component: OrdersList
}]