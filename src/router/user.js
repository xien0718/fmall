const User = () => import('pages/user/User');
const UserProfile = () => import('pages/user/childComps/UserProfile')
const Address = () => import('pages/user/childComps/childComps/Address')
const AddAddress = () => import('pages/user/childComps/childComps/childComps/AddAddress')
export default [{
    path: '/user',
    name: 'User',
    meta: {
        title: '我的',
        showTabbar: true
    },
    component: User,
},
{
    //这里不能用子路由因为是跳转到了新的页面，不是在user页面下展示子组件
    path: '/userprofile',
    name: 'UserProfile',
    meta: {
        title: '个人信息',
        showTabbar: false
    },
    component: UserProfile
}, {
    path: '/address',
    meta: {
        title: '地址管理',
        showTabbar: false,
        keepAlive: false
    },
    component: Address
}, {
    path: '/addaddress',
    meta: {
        title: '添加收货地址',
        showTabbar: false,
        keepAlive: false
    },
    component: AddAddress
}
]