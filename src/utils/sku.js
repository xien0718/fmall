//spec规格数据
//spec_key规格键：颜色
//spec_value_all所有的规格值：红色、紫色、白色、黑色
const spec = [
    { spec_key: "颜色", spec_value_all: ["红色", "紫色", "白色", "黑色"] },
    { spec_key: "套餐", spec_value_all: ["套餐一", "套餐二", "套餐三", "套餐四"] },
    { spec_key: "内存", spec_value_all: ["64G", "128G", "256G"] }
]


//sku所有存在的商品的集合
//skuItem一个存在商品
const sku = [
    // { id: 1608188117177, specs: ["红色", "套餐一", "64G"] },
    { id: 1608188117178, skuItem: ["红色", "套餐一", "128G"] },
    { id: 1608188117179, skuItem: ["红色", "套餐一", "256G"] },
    { id: 1608188117180, skuItem: ["红色", "套餐二", "64G"] },
    { id: 1608188117181, skuItem: ["红色", "套餐二", "128G"] },
    { id: 1608188117182, skuItem: ["红色", "套餐二", "256G"] },
    { id: 1608188117183, skuItem: ["红色", "套餐三", "64G"] },
    { id: 1608188117184, skuItem: ["红色", "套餐三", "128G"] },
    { id: 1608188117185, skuItem: ["红色", "套餐三", "256G"] },
    // { id: 1608188117186, specs: ["红色", "套餐四", "64G"] },
    // { id: 1608188117187, specs: ["红色", "套餐四", "128G"] },
    // { id: 1608188117188, specs: ["红色", "套餐四", "256G"] },
    // { id: 1608188117189, specs: ["紫色", "套餐一", "64G"] },
    // { id: 1608188117190, specs: ["紫色", "套餐一", "128G"] },
    // { id: 1608188117191, specs: ["紫色", "套餐一", "256G"] },
    { id: 1608188117192, skuItem: ["紫色", "套餐二", "64G"] },
    { id: 1608188117193, skuItem: ["紫色", "套餐二", "128G"] },
    { id: 1608188117194, skuItem: ["紫色", "套餐二", "256G"] },
    { id: 1608188117195, skuItem: ["紫色", "套餐三", "64G"] },
    { id: 1608188117196, skuItem: ["紫色", "套餐三", "128G"] },
    { id: 1608188117197, skuItem: ["紫色", "套餐三", "256G"] },
    { id: 1608188117198, skuItem: ["紫色", "套餐四", "64G"] },
    { id: 1608188117199, skuItem: ["紫色", "套餐四", "128G"] },
    { id: 1608188117200, skuItem: ["紫色", "套餐四", "256G"] },
    { id: 1608188117201, skuItem: ["白色", "套餐一", "64G"] },
    { id: 1608188117202, skuItem: ["白色", "套餐一", "128G"] },
    { id: 1608188117203, skuItem: ["白色", "套餐一", "256G"] },
    { id: 1608188117204, skuItem: ["白色", "套餐二", "64G"] },
    // { id: 1608188117205, specs: ["白色", "套餐二", "128G"] },
    // { id: 1608188117206, specs: ["白色", "套餐二", "256G"] },
    // { id: 1608188117207, specs: ["白色", "套餐三", "64G"] },
    // { id: 1608188117208, specs: ["白色", "套餐三", "128G"] },
    // { id: 1608188117209, specs: ["白色", "套餐三", "256G"] },
    // { id: 1608188117210, specs: ["白色", "套餐四", "64G"] },
    { id: 1608188117211, skuItem: ["白色", "套餐四", "128G"] },
    { id: 1608188117212, skuItem: ["白色", "套餐四", "256G"] },
    { id: 1608188117213, skuItem: ["黑色", "套餐一", "64G"] },
    { id: 1608188117214, skuItem: ["黑色", "套餐一", "128G"] },
    { id: 1608188117215, skuItem: ["黑色", "套餐一", "256G"] },
    { id: 1608188117216, skuItem: ["黑色", "套餐二", "64G"] },
    // { id: 1608188117217, specs: ["黑色", "套餐二", "128G"] },
    // { id: 1608188117218, specs: ["黑色", "套餐二", "256G"] },
    // { id: 1608188117219, specs: ["黑色", "套餐三", "64G"] },
    // { id: 1608188117220, specs: ["黑色", "套餐三", "128G"] },
    // { id: 1608188117221, specs: ["黑色", "套餐三", "256G"] },
    // { id: 1608188117222, specs: ["黑色", "套餐四", "64G"] },
    { id: 1608188117223, skuItem: ["黑色", "套餐四", "128G"] },
    { id: 1608188117224, skuItem: ["黑色", "套餐四", "256G"] }
]


export { spec, sku }

let SPEC = [//this.spec
    {
        "spec_key": "颜色",
        "spec_value_all": [
            {
                "spec_value": "红色",
                "able": true
            },
            {
                "spec_value": "紫色",
                "able": true
            },
            {
                "spec_value": "白色",
                "able": true
            },
            {
                "spec_value": "黑色",
                "able": true
            }
        ]
    }
] 