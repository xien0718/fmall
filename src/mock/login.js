/**
 * @desc 服务端响应登出数据
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
const resLogout = (request, response) => {
  let result = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      msg: '退出登录成功'
    },
    "success": true
  }
  response.json(result)
}
const token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYXNmbG93ZXIuc3RvcmUiLCJhdWQiOiJ3d3cuYXNmbG93ZXIuc3RvcmUiLCJpYXQiOjE2MjcxMzAxNzksIm5iZiI6MTYyNzEzMDE3OSwic3ViIjpudWxsLCJleHAiOjE2Mjg0MjYxNzksImp0aSI6bnVsbCwidXNlcl9pZCI6IjEwMDAxMzAiLCJuaWNrX25hbWUiOiJjcnVtYlx1NjYxZlx1NjcxZlx1NGU5NCIsImF2YXRhciI6Imh0dHBzOlwvXC90aGlyZHd4LnFsb2dvLmNuXC9tbW9wZW5cL3ZpXzMyXC9EWUFJT2dxODNlckNPZnpSU3B3YTZpYlBzT1E3R0ZhWkVWS3N5QktiSzNxSE4zUkc4R1hwSFNSSmdFSjh0bHZLbjVHM05Icm80ZWRTbDA0RlhGTTdJVEFcLzEzMiJ9.nj-9dQsUlgNrqayNabC7jMHoFsAfad84IHNn-wIw7Mw`
/**
 * @desc 登录成功后服务端响应token和用户信息
 * @param { object } request express 请求对象
 * @param { object } response express 响应对象
 * @returns { object } json 对象
 */
const resLogin = (request, response) => {
  let successResult = {
    "errorCode": 0,
    "errorMessage": "success",
    "data": {
      token,
      user: {
        "id": "1000130",
        "user_type": null,
        "sex": "1",
        "nick_name": "高富帅",
        "avatar": "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/DYAIOgq83erCOfzRSpwa6ibPsOQ7GFaZEVKsyBKbK3qHN3RG8GXpHSRJgEJ8tlvKn5G3NHro4edSl04FXFM7ITA\/132",
        "background": null,
        "birthday": "1605542400000",
        "status": "1",
        "created_timestamp": "1603205522"
      }
    },
    "success": true
  };

  //模拟密码错误服务端返回登录失败响应状态码和错误信息
  let failureResult = {
    "errorCode": 403,
    "errorMessage": "密码错误,请重新输入",
    "success": false
  };
  response.json(successResult);
  // response.json(failureResult);
}


module.exports = {
  resLogin,
  resLogout,
}