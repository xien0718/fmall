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
            //filter是将item执行表达式后return值为true的放入新数组，最后return这个新数组
            //遍历orderList的数组元素item，如果要删除点击的order_id，则在需要使filter的callback的return值为false，
            //例如点击的order_id为10，当遍历到order_id为10的时候，表达式item.order_id !== payload值为false，因此该item被删除掉
            state.orderList = state.orderList.filter(item => item.order_id !== payload)
        }
    },
    actions: {},

}