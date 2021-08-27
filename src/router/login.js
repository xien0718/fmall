const Login = () => import('pages/login/Login')
export default [{ // 登录
    path: '/login',
    name: 'Login',
    meta: {
        title: '登录',
        showTabbar: false
    },
    component: Login
}]