const Detail = () => import('pages/detail/Detail')
export default [{
    path: '/detail',
    name: 'Detail',
    meta: {
        title: '详情',
        showTabbar: false,
        keepAlive: false

    },
    component: Detail
}]