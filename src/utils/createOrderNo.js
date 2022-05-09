//利用格式化后的时间+随机数生成商户订单号

//引入封装好的方法：获取当前时间并自定义格式化
const {
    dateMethods
} = require('./dateFormat.js')
let date = dateMethods.format('yyyyMMddHHmmss') //20211207223429     年+月+日+时+分+秒

//封装方法:得到一位随机整数
//Math.random()生成一个大于等于0且小于1的任意浮点数，乘以10后即为0~9之间的任意数字，再使用Math.floor()向下取整
let getRandomNo = () => Math.floor(Math.random() * 10)

//封装方法:得到n位随机整数组成的字符串
let getRandomStr = (n = 6) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(getRandomNo())
    };
    let str = arr.join('');
    return str
}

//封装方法:给随机字符串末尾添加0718，作为公司标识
let addMark = (mark) => getRandomStr(3) + mark

//封装方法并导出:根据 时间戳+随机字符串+公司标识 生成商户订单号
const create_server_order_no = () => date + addMark('0718')
module.exports = {
    create_server_order_no
}