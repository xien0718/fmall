const appId = 'wxdd969a55e83a3e13'
/**
 * @desc 获取微信code
 */
export const getWxCode = () => {
    //保存当前页面url，即location.href
    //通过appId获取到微信服务器返回的code然后再跳转到当前页面
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appId}&redirect_uri=${location.href}&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect`
}