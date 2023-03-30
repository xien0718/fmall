const FillReceivingInfo = () => import('pages/fillReceivingInfo/FillReceivingInfo')
export default [{
    path: '/fillReceivingInfo',
    name: 'FillReceivingInfo',
    meta: {
        title: '填写收货信息',
        showTabbar: false,
        keepAlive: false//detail和fri页面都要设置keepAlive:true,这样从fri回去的时候detail的puc才会处于弹出状态
    },
    component: FillReceivingInfo
}]