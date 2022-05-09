const FillOrder = () => import('pages/fillOrder/FillOrder')
export default [{
    path: '/fillorder',
    name: 'FillOrder',
    meta: {
        title: '发现',
        showTabbar: false
    },
    component: FillOrder
}]