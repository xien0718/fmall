//获取get请求的url参数，两种方法


//方法一：字符串方法，将所有参数键值对放入obj
const strGetQueryValue = () => {
    let url = location.search; //获得查询字符串，包括问号
    let obj = {};
    //url.indexOf("?") == -1  url中没有问号,执行后面的语句
    //取反，url中有问号，执行后面的语句
    if (url.indexOf("?") != -1) {
        //截取url问号后面的部分
        let str = url.substring(1);
        //分割截取后的字符串为数组，数组元素为：键1=值1，键2=值2
        let arr = str.split("&");
        for (let i = 0; i < arr.length; i++) {
            //将数组元素依据等号拆分为新数组，数组元素为键1，值1
            let key = arr[i].split('=')[0]
            let value = arr[i].split('=')[1]
            obj[key] = decodeURI(value);
        }
    }
    return obj
}

//方法二：正则方法,取出url中对应键的值
/**
 * @desc 后台获取get方法查询字符串键值对的值
 * @param1 url {String} 要提取查询字符串的url
 * @param2 key {String} 查询字符串键值对的键
 * @return value {String} 查询字符串键值对的值
 */
const regGetQueryValue = (url, key) => {
    //url中有问号吗，有才提取，无不提取
    if (url.indexOf('?') != -1) {
        //url.indexOf('?')返回问号的index，并截取url中问号后面的参数字符串queryStr
        let queryStr = url.substring(url.indexOf('?')).substring(1);
        //原子组1：匹配以空或and符号开头的内容
        //原子组2：匹配非and符号的内容，出现次数为0次到多次
        //原子组3：匹配以and符号或空结尾的内容
        const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)', 'i');
        let res = queryStr.match(reg)
        //arr不为空说明正则匹配到了值
        return value = res != null ? decodeURI(res[2]) : null
    }
}
let res = regGetQueryValue('1234?item_id=123', 'item_id')
console.log(res);


module.exports = {
    strGetQueryValue,
    regGetQueryValue
}