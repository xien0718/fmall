//spec规格数据
//spec_key规格键：颜色
//spec_value_all所有的规格值：红色、紫色、白色、黑色
const spec = [
    { spec_key: "颜色", spec_value_all: ["红色", "紫色", "白色", "黑色"] },
    { spec_key: "套餐", spec_value_all: ["套餐一", "套餐二", "套餐三", "套餐四"] },
    { spec_key: "内存", spec_value_all: ["64G", "128G", "256G"] }
]


//skuData所有存在的商品集合的原始数据
//skuItem一个存在商品
const sku = {
    "红色;套餐一;128G": { id: 1608188117178, price: 100, stock: 10 },
    "红色;套餐一;256G": { id: 1608188117179, price: 101, stock: 11 },
    "红色;套餐二;64G": { id: 1608188117180, price: 102, stock: 12 },
    "红色;套餐二;128G": { id: 1608188117181, price: 103, stock: 13 },
    "红色;套餐二;256G": { id: 1608188117182, price: 104, stock: 14 },
    "红色;套餐三;64G": { id: 1608188117183, price: 105, stock: 15 },
    "红色;套餐三;128G": { id: 1608188117184, price: 106, stock: 16 },
    "红色;套餐三;256G": { id: 1608188117185, price: 107, stock: 17 },
    "紫色;套餐二;64G": { id: 1608188117192, price: 108, stock: 18 },
    "紫色;套餐二;128G": { id: 1608188117193, price: 109, stock: 19 },
    "紫色;套餐二;256G": { id: 1608188117194, price: 110, stock: 20 },
    "紫色;套餐三;64G": { id: 1608188117195, price: 111, stock: 21 },
    "紫色;套餐三;128G": { id: 1608188117196, price: 112, stock: 22 },
    "紫色;套餐三;256G": { id: 1608188117197, price: 113, stock: 23 },
    "紫色;套餐四;64G": { id: 1608188117198, price: 114, stock: 24 },
    "紫色;套餐四;128G": { id: 1608188117199, price: 115, stock: 25 },
    "紫色;套餐四;256G": { id: 1608188117200, price: 116, stock: 26 },
    "白色;套餐一;64G": { id: 1608188117201, price: 117, stock: 27 },
    "白色;套餐一;128G": { id: 1608188117202, price: 118, stock: 28 },
    "白色;套餐一;256G": { id: 1608188117203, price: 119, stock: 29 },
    "白色;套餐二;64G": { id: 1608188117204, price: 120, stock: 30 },
    "白色;套餐四;128G": { id: 1608188117211, price: 121, stock: 31 },
    "白色;套餐四;256G": { id: 1608188117212, price: 122, stock: 32 },
    "黑色;套餐一;64G": { id: 1608188117213, price: 123, stock: 33 },
    "黑色;套餐一;128G": { id: 1608188117214, price: 124, stock: 34 },
    "黑色;套餐一;256G": { id: 1608188117215, price: 125, stock: 35 },
    "黑色;套餐二;64G": { id: 1608188117216, price: 126, stock: 36 },
    "黑色;套餐四;128G": { id: 1608188117223, price: 127, stock: 37 },
    "黑色;套餐四;256G": { id: 1608188117224, price: 128, stock: 38 }
}


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