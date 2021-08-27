const User = () => import('pages/user/User');
export default [{
    path: '/user',
    name: 'User',
    meta: {
        title: '我的',
        showTabbar: true

    },
    component: User
}]