//封装登录页所有请求方法
import request from './request';
import { AppId, AppSecret } from "utils/wx-config";
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

/**
 * @desc 使用appid和服务器的url向微信服务器请求code
 * @returns code
 */
const getWxCode = () => {
    const url = `${location.origin}/home`
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${AppId}&redirect_uri=${url}&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`
}

/**
 * @desc 使用code和appid和appsecret向微信服务器请求access_token和openid
 * @returns access_token和openid
 */
const getOpenIdAndToken = fPcode => request({
    //
    url: `/sns/oauth2/access_token?appid=${AppId}&secret=${AppSecret}&code=${fPcode}&grant_type=authorization_code`,
    method: 'get'
})


/**
 * @desc 使用access_token和openid向微信服务器请求用户信息
 * @returns access_token和openid
 */
const getWxUserInfo = params => request({
    url: '/sns/userinfo',
    method: 'get',
    params
})

export {
    login,
    logout,
    getWxCode,
    getOpenIdAndToken,
    getWxUserInfo
}