/**
 * @desc 响应订单列表数据
 */

const resOrderListData = (request, response) => {
    // console.log(request);

    let list = [{
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }, {
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1606053880,
        "pay_status": 0,
        "order_status": 10,
        "total_product_count": 1,
        "order_sn": "202011221404409316254",
        "order_id": 2708,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": "订单将于30分钟内关闭，请尽快支付",
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605875921,
        "pay_status": 0,
        "order_status": 20,
        "total_product_count": 1,
        "order_sn": "202011201238412980421",
        "order_id": 2702,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 98000,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 98000,
        "format_product_total_price": "980.00",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "980.00"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605859843,
        "pay_status": 0,
        "order_status": 30,
        "total_product_count": 1,
        "order_sn": "202011200810431370305",
        "order_id": 2694,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605859756,
        "pay_status": 0,
        "order_status": 40,
        "total_product_count": 1,
        "order_sn": "202011200809161861023",
        "order_id": 2693,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605859595,
        "pay_status": 0,
        "order_status": 50,
        "total_product_count": 1,
        "order_sn": "202011200806359939678",
        "order_id": 2692,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605858232,
        "pay_status": 0,
        "order_status": 60,
        "total_product_count": 1,
        "order_sn": "202011200743527737353",
        "order_id": 2691,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": "订单已于2020-11-20 08:18:01超时未支付关闭",
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605788651,
        "pay_status": 2,
        "order_status": 10,
        "total_product_count": 1,
        "order_sn": "202011191224119352278",
        "order_id": 2640,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 180,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 180,
        "format_product_total_price": "1.80",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.80"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605787749,
        "pay_status": 2,
        "order_status": 20,
        "total_product_count": 1,
        "order_sn": "202011191209096136633",
        "order_id": 2638,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 180,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 180,
        "format_product_total_price": "1.80",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.80"
    },
    {
        "product_list": [{
            "item_id": 288,
            "sku_id": 0,
            "product_name": "名称",
            "product_price": 160,
            "format_product_price": "1.60",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012332.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605787446,
        "pay_status": 2,
        "order_status": 50,
        "total_product_count": 1,
        "order_sn": "202011191204066128101",
        "order_id": 2616,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 160,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 160,
        "format_product_total_price": "1.60",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.60"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605630006,
        "pay_status": 0,
        "order_status": 60,
        "total_product_count": 1,
        "order_sn": "202011171620069239205",
        "order_id": 2597,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": "订单已于2020-11-17 16:54:01超时未支付关闭",
        "product_total_price": 180,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 180,
        "format_product_total_price": "1.80",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.80"
    }
    ]
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": {
            "page_info": {
                "page_size": 10,
                "index": 1,
                "has_more": false,
                "count": 10
            },
            "order_list": list
        },
        "success": true
    }

    response.json(result)
}

/**
 * @desc 点击(立即购买按钮)响应该数据
 */
let resCreateOrder = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(去支付按钮)响应该数据
 */
let resToPay = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(取消按钮)响应该数据
 */
let resCancelOrder = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true,
        "msg": '取消订单成功！'
    }
    response.json(result)
}

/**
 * @desc 点击(申请退款按钮)响应该数据
 */
let resApplyForRefund = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(催发货按钮)响应该数据
 */
let resRushToSendOut = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(确认收货按钮)响应该数据
 */
let resConfirmReceipt = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(申请售后按钮)响应该数据
 */
let resApplyForAfterSales = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(删除订单按钮)响应该数据
 */
let resDelOrder = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 点击(再次购买按钮)响应该数据
 */
let resReorder = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true
    }
    response.json(result)
}


/**
 * @desc 根据传入的order_id响应该order_id对应的商品数据
 */
let resOrderDetailData = (request, response) => {
    let list = [{
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }, {
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1606053880,
        "pay_status": 0,
        "order_status": 10,
        "total_product_count": 1,
        "order_sn": "202011221404409316254",
        "order_id": 2708,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区上海城区",
            "area": "黄浦区"
        },
        "shopping_word": "订单将于30分钟内关闭，请尽快支付",
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605875921,
        "pay_status": 0,
        "order_status": 20,
        "total_product_count": 1,
        "order_sn": "202011201238412980421",
        "order_id": 2702,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 98000,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 98000,
        "format_product_total_price": "980.00",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "980.00"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605859843,
        "pay_status": 0,
        "order_status": 30,
        "total_product_count": 1,
        "order_sn": "202011200810431370305",
        "order_id": 2694,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605859756,
        "pay_status": 0,
        "order_status": 40,
        "total_product_count": 1,
        "order_sn": "202011200809161861023",
        "order_id": 2693,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605859595,
        "pay_status": 0,
        "order_status": 50,
        "total_product_count": 1,
        "order_sn": "202011200806359939678",
        "order_id": 2692,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 289,
            "sku_id": 0,
            "product_name": "鲜花",
            "product_price": 90,
            "format_product_price": "0.90",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012092.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605858232,
        "pay_status": 0,
        "order_status": 60,
        "total_product_count": 1,
        "order_sn": "202011200743527737353",
        "order_id": 2691,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": "订单已于2020-11-20 08:18:01超时未支付关闭",
        "product_total_price": 90,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 90,
        "format_product_total_price": "0.90",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "0.90"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605788651,
        "pay_status": 2,
        "order_status": 10,
        "total_product_count": 1,
        "order_sn": "202011191224119352278",
        "order_id": 2640,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 180,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 180,
        "format_product_total_price": "1.80",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.80"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605787749,
        "pay_status": 2,
        "order_status": 20,
        "total_product_count": 1,
        "order_sn": "202011191209096136633",
        "order_id": 2638,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 180,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 180,
        "format_product_total_price": "1.80",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.80"
    },
    {
        "product_list": [{
            "item_id": 288,
            "sku_id": 0,
            "product_name": "名称",
            "product_price": 160,
            "format_product_price": "1.60",
            "count": 1,
            "main_image": "https:\/\/img01.hua.com\/uploadpic\/newpic\/9012332.jpg_220x240.jpg",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605787446,
        "pay_status": 2,
        "order_status": 50,
        "total_product_count": 1,
        "order_sn": "202011191204066128101",
        "order_id": 2616,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": null,
        "product_total_price": 160,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 160,
        "format_product_total_price": "1.60",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.60"
    },
    {
        "product_list": [{
            "item_id": 291,
            "sku_id": 0,
            "product_name": "怦然心动",
            "product_price": 128000,
            "format_product_price": "1280.00",
            "count": 1,
            "main_image": "http:\/\/ipxmall.oss-cn-zhangjiakou.aliyuncs.com\/ipxmall\/e7ac283d6dd0dd1b000423d6d123aec8",
            "carriage": "0.90",
        }],
        "created_timestamp": 1605630006,
        "pay_status": 0,
        "order_status": 60,
        "total_product_count": 1,
        "order_sn": "202011171620069239205",
        "order_id": 2597,
        "close_countdown": null,
        "shopping_info": {
            "receiver": "高富帅",
            "address": "详细地址",
            "phone": "15276513544",
            "province": "上海市",
            "city": "上海城区",
            "area": "黄浦区"
        },
        "shopping_word": "订单已于2020-11-17 16:54:01超时未支付关闭",
        "product_total_price": 180,
        "discount_price": 0,
        "shopping_price": 0,
        "pay_price": 180,
        "format_product_total_price": "1.80",
        "format_discount_price": "0.00",
        "format_shopping_price": "0.00",
        "format_pay_price": "1.80"
    }
    ]
    //根据客户端将点击的商品的order_id传过来
    list = JSON.parse(JSON.stringify(list))
    //根据传过来的order_id来判断响应哪个商品的数据
    let clickOrderData = list.find(item => item.order_id == request.body.clickOrderId)

    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": {
            "page_info": {
                "page_size": 10,
                "index": 1,
                "has_more": false,
                "count": 10
            },
            "order_list": clickOrderData
        },
        "success": true
    }

    response.json(result)
}

/**
 * @desc 当UserProfile页面用户修改生日的时候，响应该数据
 */
let resUpdateUserInfo = (request, response) => {
    let result = {
        "errorCode": 0,
        "errorMessage": "success",
        "data": true,
        "success": true,
        "userInfo": request.body.userInfo
    }
    response.json(result)
}
module.exports = {
    resOrderListData,
    resCreateOrder,
    resToPay,
    resCancelOrder,
    resApplyForRefund,
    resRushToSendOut,
    resConfirmReceipt,
    resApplyForAfterSales,
    resDelOrder,
    resReorder,
    resOrderDetailData,
    resUpdateUserInfo
}