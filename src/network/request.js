import axios from 'axios'
import router from 'router'
import {
  Toast
} from 'vant'
import * as sysConfig from '../utils/config'



/**
 * @desc 添加token至请求头
 * @param {*} config 参数config
 * @returns config
 */
const addToken = config => {

  //从本地存储取出token

  let token = localStorage.getItem(sysConfig.TOKENKEY);
  //判断是否有token,有token添加至请求头，无token跳转到登录页
  // if (token && token.length !== 0) {
  let userId = localStorage.getItem(sysConfig.USERID);
  let deviceId = 'h5'
  config.headers.Authorization = `Bearer ${token}`;
  config.headers.DevideId = deviceId;
  config.headers.UserId = userId || -1;
  // } else {
  // router.push('/login')
  // }

  return config
}



/**
 * @desc 添加userId和设备Id
 * @param {*} config 参数config
 * @returns config
 */
const addParams = config => {
  let userId = 'userId' // 用户id
  let deviceId = 'h5' // 设备类型

  let params = {
    userId,
    deviceId
  }

  let key = config.method == 'post' ? 'data' : 'params'
  // console.log(config);

  // 参数拼接
  //config.data={请求时传入的参数，userId，deviceId}
  config[key] = {
    ...config[key],
    ...params
  }
  // console.log(config);

  return config
}

/**
 * @desc 根据相应状态status判断请求是否成功
 * @param {*} response 参数是response
 * @returns 
 */
const checkStatus = response => {
  // console.log('response', response)
  let {
    status,
    message
  } = response
  const errorCodes = [404, 403]
  // 请求结果错误 提示用户
  if (errorCodes.includes(status)) {
    Toast({
      type: 'fail',
      message
    })
  }

  // 
  return response
}


/**
 * @desc 从localStorage中清除token、userId、userInfo
 */
const clearLoginInfo = () => {

  const keys = [
    sysConfig.TOKENKEY,
    sysConfig.USERINFO,
    sysConfig.USERID,

  ]
  keys.map(key => localStorage.removeItem(key))
}

/**
 * @desc 根据服务器相应的errCode判断请求是否成功 
 * @param {*} response 参数是response
 * @returns 
 */
const checkErrorCode = response => {
  let {
    errorCode,
    errorMessage
  } = response.data
  // errorCode = 401;
  // errorMessage = '登录失效，请重新登录'
  // errcode不等于0说明请求失败，先弹失败窗口
  if (errorCode !== 0) {
    Toast({
      type: 'fail',
      message: errorMessage
    })
  }
  // 然后再判断若errcode为401：无token或token失效
  // 
  // 此时需要先清空token、userId、userInfo，再保存当前页面路由，并跳转到登录页重新登录
  let codes = [401]
  // 登录 失效检测
  if (codes.includes(errorCode)) {
    clearLoginInfo()
    //origin是协议+域名+端口
    //href是协议+域名+端口+斜杠
    //因此要获取到路由，需要删除掉origin部分，并将路由保存到会话存储sessionStorage中
    sessionStorage.setItem(sysConfig.REDIRECTURL, location.href.replace(location.origin, ''))
    // 重定向至登录页面 ，可以后退
    router.push('/login')
  }
  return response
}


//设置默认timeout和baseURL
const timeout = 60000 // 超时时间 默认1分钟

//封装axios实例为request方法
function request(config) {
  const instance = axios.create({
    timeout,
  })
  // 发送请求前的处理
  instance.interceptors.request.use(config => {
    return Promise.resolve(config)
      .then(addToken)
      .then(addParams)
  })

  // 收到响应前的处理
  instance.interceptors.response.use(response => {
    return Promise.resolve(response)
      .then(checkStatus) //根据status判断请求是否成功
      .then(checkErrorCode) //根据errorCode判断token是否可用
      .then(response => response.data)
  })
  return instance(config)
}

// 导出用axios封装的网络请求方法request，在别处直接传入config即可使用
export default request