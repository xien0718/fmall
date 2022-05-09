/**
 * @desc 获取商品详情页数据
 * @returns axios promise
 */
import request from './request'
const getGoodsDetail = item_id => request({
    url: '/mock/detail/getgoodsdetail',
    method: 'get',
    params: {
        item_id
    }
})
export {
    getGoodsDetail
}