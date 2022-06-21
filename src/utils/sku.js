//spec规格数据
//spec_key规格键：颜色
//spec_value_all所有的规格值：红色、紫色、白色、黑色
const original_spec = [
    { original_spec_item_key: "颜色", original_spec_item_value_all: ["红色", "紫色", "白色", "黑色"] },
    { original_spec_item_key: "套餐", original_spec_item_value_all: ["套餐一", "套餐二", "套餐三", "套餐四"] },
    { original_spec_item_key: "存储", original_spec_item_value_all: ["64G", "128G", "256G"] }
]


//skuData所有存在的商品集合的原始数据
//skuItem一个存在商品
const picture__basePath = 'https://xien0718.oss-cn-beijing.aliyuncs.com/goods/';
const sku = {
    "红色;套餐一;128G": { id: 1608188117178, price: 100, stock: 10, picture: `${picture__basePath}红色-套餐一-128G.png` },
    "红色;套餐一;256G": { id: 1608188117179, price: 101, stock: 11, picture: `${picture__basePath}红色-套餐一-256G.png` },
    "红色;套餐二;64G": { id: 1608188117180, price: 102, stock: 12, picture: `${picture__basePath}红色-套餐二-64G.png` },
    "红色;套餐二;128G": { id: 1608188117181, price: 103, stock: 13, picture: `${picture__basePath}红色-套餐二-128G.png` },
    "红色;套餐二;256G": { id: 1608188117182, price: 104, stock: 14, picture: `${picture__basePath}红色-套餐二-256G.png` },
    "红色;套餐三;64G": { id: 1608188117183, price: 105, stock: 15, picture: `${picture__basePath}红色-套餐三-64G.png` },
    "红色;套餐三;128G": { id: 1608188117184, price: 106, stock: 16, picture: `${picture__basePath}红色-套餐三-128G.png` },
    "红色;套餐三;256G": { id: 1608188117185, price: 107, stock: 17, picture: `${picture__basePath}红色-套餐三-256G.png` },
    "紫色;套餐二;64G": { id: 1608188117192, price: 108, stock: 18, picture: `${picture__basePath}紫色-套餐二-64G.png` },
    "紫色;套餐二;128G": { id: 1608188117193, price: 109, stock: 19, picture: `${picture__basePath}紫色-套餐二-128G.png` },
    "紫色;套餐二;256G": { id: 1608188117194, price: 110, stock: 20, picture: `${picture__basePath}紫色-套餐二-256G.png` },
    "紫色;套餐三;64G": { id: 1608188117195, price: 111, stock: 21, picture: `${picture__basePath}紫色-套餐三-64G.png` },
    "紫色;套餐三;128G": { id: 1608188117196, price: 112, stock: 22, picture: `${picture__basePath}紫色-套餐三-128G.png` },
    "紫色;套餐三;256G": { id: 1608188117197, price: 113, stock: 23, picture: `${picture__basePath}紫色-套餐三-256G.png` },
    "紫色;套餐四;64G": { id: 1608188117198, price: 114, stock: 24, picture: `${picture__basePath}紫色-套餐四-64G.png` },
    "紫色;套餐四;128G": { id: 1608188117199, price: 115, stock: 25, picture: `${picture__basePath}紫色-套餐四-128G.png` },
    "紫色;套餐四;256G": { id: 1608188117200, price: 116, stock: 26, picture: `${picture__basePath}紫色-套餐四-256G.png` },
    "白色;套餐一;64G": { id: 1608188117201, price: 117, stock: 27, picture: `${picture__basePath}白色-套餐一-64G.png` },
    "白色;套餐一;128G": { id: 1608188117202, price: 118, stock: 28, picture: `${picture__basePath}白色-套餐一-128G.png` },
    "白色;套餐一;256G": { id: 1608188117203, price: 119, stock: 29, picture: `${picture__basePath}白色-套餐一-256G.png` },
    "白色;套餐二;64G": { id: 1608188117204, price: 120, stock: 30, picture: `${picture__basePath}白色-套餐二-64G.png` },
    "白色;套餐四;128G": { id: 1608188117211, price: 121, stock: 31, picture: `${picture__basePath}白色-套餐四-128G.png` },
    "白色;套餐四;256G": { id: 1608188117212, price: 122, stock: 32, picture: `${picture__basePath}白色-套餐四-256G.png` },
    "黑色;套餐一;64G": { id: 1608188117213, price: 123, stock: 33, picture: `${picture__basePath}黑色-套餐一-64G.png` },
    "黑色;套餐一;128G": { id: 1608188117214, price: 124, stock: 34, picture: `${picture__basePath}黑色-套餐一-128G.png` },
    "黑色;套餐一;256G": { id: 1608188117215, price: 125, stock: 35, picture: `${picture__basePath}黑色-套餐一-256G.png` },
    "黑色;套餐二;64G": { id: 1608188117216, price: 126, stock: 36, picture: `${picture__basePath}黑色-套餐二-64G.png` },
    "黑色;套餐四;128G": { id: 1608188117223, price: 127, stock: 37, picture: `${picture__basePath}黑色-套餐四-128G.png` },
    "黑色;套餐四;256G": { id: 1608188117224, price: 128, stock: 38, picture: `${picture__basePath}黑色-套餐四-256G.png` }
}

//附加属性，可以多选
const attach_spec = [
    { attach_spec_item_key: '灯饰', attach_spec_item_value_all: ['蓝色', '黄色', '粉色'] },
    { attach_spec_item_key: '糖果', attach_spec_item_value_all: ['蓝色', '黄色', '粉色'] }

]

export { original_spec, sku, attach_spec }

let SPEC = [//this.spec
    {
        "spec_item_key": "颜色",
        "spec_item_value_all": [
            {
                "spec_item_value": "红色",
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
