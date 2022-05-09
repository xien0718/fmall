//封装首页的所有请求方法
import request from './request'
/**
 * @desc 获取商品列表
 * @returns axios promise
 */
const getGoodsList = () => request({
    url: `/mock/home/getgoods`,
    method: 'post'
})

/**
 * @desc 获取banner
 * @returns axios promise
 */
const getSwiper = () => request({
    url: `/mock/home/getswiper`,
    method: 'post'
})


export {
    getGoodsList,
    getSwiper,
}