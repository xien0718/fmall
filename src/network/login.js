//封装登录页所有请求方法
import request from './request';
/**
 * @desc 获取token和用户信息
 * @returns axios promise
 */
const login = data => request({
    url: '/mock/user/login',
    method: 'post',
    data
})

/**
 * @desc 发送登出请求
 * @returns axios promise
 */
const logout = params => request({
    url: '/mock/user/logout',
    method: 'get',
    params
})
export {
    login,
    logout
}