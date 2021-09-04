export const order = {
    namespaced: true, // 通过这个参数 实现模块化
    state: {
        //服务端响应的客户订单列表内容
        orderList: [],
    },
    mutations: {
        //更新客户订单列表
        updateOrderList(state, payload) {
            state.orderList = payload
        },

        //点击删除订单按钮删除订单
        delOrder(state, payload) {
            //filter是将item执行表达式后结果为true放入新数组并返回，结果为false舍弃
            //点击的orderListItem.order_id等于orderList中某个元素(==为true)，为true还想舍弃则需要取反
            state.orderList = state.orderList.filter(item => item.order_id !== payload)
        }
    },
    actions: {},

}