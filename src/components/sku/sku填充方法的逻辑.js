//属性集
let key = [
    { name: '颜色', item: ['黑', '金', '白'] },
    { name: '内存', item: ['16G', '32G'] },
    { name: '运营商', item: ['电信', '移动', '联通'] }
];
// 数据集
let skuData = [
    // { id: 1608188117177, specs: ["红色", "套餐一", "64G"] },
    { id: 1608188117178, skuItem: ["红色", "套餐一", "128G"], price: 100, stock: 10 },
    { id: 1608188117179, skuItem: ["红色", "套餐一", "256G"], price: 101, stock: 11 },
    { id: 1608188117180, skuItem: ["红色", "套餐二", "64G"], price: 102, stock: 12 },
    { id: 1608188117181, skuItem: ["红色", "套餐二", "128G"], price: 103, stock: 13 },
    { id: 1608188117182, skuItem: ["红色", "套餐二", "256G"], price: 104, stock: 14 },
    { id: 1608188117183, skuItem: ["红色", "套餐三", "64G"], price: 105, stock: 15 },
    { id: 1608188117184, skuItem: ["红色", "套餐三", "128G"], price: 106, stock: 16 },
    { id: 1608188117185, skuItem: ["红色", "套餐三", "256G"], price: 107, stock: 17 },
    // { id: 1608188117186, specs: ["红色", "套餐四", "64G"] },
    // { id: 1608188117187, specs: ["红色", "套餐四", "128G"] },
    // { id: 1608188117188, specs: ["红色", "套餐四", "256G"] },
    // { id: 1608188117189, specs: ["紫色", "套餐一", "64G"] },
    // { id: 1608188117190, specs: ["紫色", "套餐一", "128G"] },
    // { id: 1608188117191, specs: ["紫色", "套餐一", "256G"] },
    { id: 1608188117192, skuItem: ["紫色", "套餐二", "64G"], price: 108, stock: 18 },
    { id: 1608188117193, skuItem: ["紫色", "套餐二", "128G"], price: 109, stock: 19 },
    { id: 1608188117194, skuItem: ["紫色", "套餐二", "256G"], price: 110, stock: 20 },
    { id: 1608188117195, skuItem: ["紫色", "套餐三", "64G"], price: 111, stock: 21 },
    { id: 1608188117196, skuItem: ["紫色", "套餐三", "128G"], price: 112, stock: 22 },
    { id: 1608188117197, skuItem: ["紫色", "套餐三", "256G"], price: 113, stock: 23 },
    { id: 1608188117198, skuItem: ["紫色", "套餐四", "64G"], price: 114, stock: 24 },
    { id: 1608188117199, skuItem: ["紫色", "套餐四", "128G"], price: 115, stock: 25 },
    { id: 1608188117200, skuItem: ["紫色", "套餐四", "256G"], price: 116, stock: 26 },
    { id: 1608188117201, skuItem: ["白色", "套餐一", "64G"], price: 117, stock: 27 },
    { id: 1608188117202, skuItem: ["白色", "套餐一", "128G"], price: 118, stock: 28 },
    { id: 1608188117203, skuItem: ["白色", "套餐一", "256G"], price: 119, stock: 29 },
    { id: 1608188117204, skuItem: ["白色", "套餐二", "64G"], price: 120, stock: 30 },
    // { id: 1608188117205, specs: ["白色", "套餐二", "128G"] },
    // { id: 1608188117206, specs: ["白色", "套餐二", "256G"] },
    // { id: 1608188117207, specs: ["白色", "套餐三", "64G"] },
    // { id: 1608188117208, specs: ["白色", "套餐三", "128G"] },
    // { id: 1608188117209, specs: ["白色", "套餐三", "256G"] },
    // { id: 1608188117210, specs: ["白色", "套餐四", "64G"] },
    { id: 1608188117211, skuItem: ["白色", "套餐四", "128G"], price: 121, stock: 31 },
    { id: 1608188117212, skuItem: ["白色", "套餐四", "256G"], price: 122, stock: 32 },
    { id: 1608188117213, skuItem: ["黑色", "套餐一", "64G"], price: 123, stock: 33 },
    { id: 1608188117214, skuItem: ["黑色", "套餐一", "128G"], price: 124, stock: 34 },
    { id: 1608188117215, skuItem: ["黑色", "套餐一", "256G"], price: 125, stock: 35 },
    { id: 1608188117216, skuItem: ["黑色", "套餐二", "64G"], price: 126, stock: 36 },
    // { id: 1608188117217, specs: ["黑色", "套餐二", "128G"] },
    // { id: 1608188117218, specs: ["黑色", "套餐二", "256G"] },
    // { id: 1608188117219, specs: ["黑色", "套餐三", "64G"] },
    // { id: 1608188117220, specs: ["黑色", "套餐三", "128G"] },
    // { id: 1608188117221, specs: ["黑色", "套餐三", "256G"] },
    // { id: 1608188117222, specs: ["黑色", "套餐四", "64G"] },
    { id: 1608188117223, skuItem: ["黑色", "套餐四", "128G"], price: 127, stock: 37 },
    { id: 1608188117224, skuItem: ["黑色", "套餐四", "256G"], price: 128, stock: 38 }
]
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
    "紫色;套餐四;64G": { id: 1608188117198, sprice: 114, stock: 24 },
    "紫色;套餐四;128G": { id: 1608188117199, price: 115, stock: 25 },
    "紫色;套餐四;256G": { id: 1608188117200, price: 116, stock: 26 },
    "白色;套餐一;64G": { id: 1608188117201, sprice: 117, stock: 27 },
    "白色;套餐一;128G": { id: 1608188117202, price: 118, stock: 28 },
    "白色;套餐一;256G": { id: 1608188117203, price: 119, stock: 29 },
    "白色;套餐二;64G": { id: 1608188117204, sprice: 120, stock: 30 },
    "白色;套餐四;128G": { id: 1608188117211, price: 121, stock: 31 },
    "白色;套餐四;256G": { id: 1608188117212, price: 122, stock: 32 },
    "黑色;套餐一;64G": { id: 1608188117213, sprice: 123, stock: 33 },
    "黑色;套餐一;128G": { id: 1608188117214, price: 124, stock: 34 },
    "黑色;套餐一;256G": { id: 1608188117215, price: 125, stock: 35 },
    "黑色;套餐二;64G": { id: 1608188117216, sprice: 126, stock: 36 },
    "黑色;套餐四;128G": { id: 1608188117223, price: 127, stock: 37 },
    "黑色;套餐四;256G": { id: 1608188117224, price: 128, stock: 38 }
}


/**
 * @desc 将传入的商品skuItem转为组合，用数组展示，保存到skuComb中
 * @param {Array} 传入的商品skuItem，例如['黑', '16G', '电信']
 * @returns {Array} skuComb 传入的商品skuItem数组元素的组合，例如
 * [[空属性 × 3],['黑', 空属性 × 2],[空白, '16G', 空白],[空属性 × 2, '电信'],['黑', '16G', 空白],['黑', 空白, '电信'],[空白, '16G', '电信'],['黑', '16G', '电信']]
 */
function skuItemToComb(skuItem) {
    let skuComb = [];
    for (let n = 0; n <= skuItem.length; n++) {
        let flagArrs = fill_vacancy(skuItem.length, n);
        while (flagArrs.length) {
            let flagArr = flagArrs.shift();
            let combArr = Array(skuItem.length);
            for (let i = 0; i < skuItem.length; i++) {
                if (flagArr[i]) {
                    combArr[i] = skuItem[i];
                }
            }
            skuComb.push(combArr);
        }
    }
    return skuComb;
}


/**
 * @desc 填充空位，求出m个位置要填充n个位置的所有情况放入数组，该位置填充则数组元素为1，不填充则为0
// 假设m=4，n=3，即4个坑要填3个的填法:[[1,1,1,0],[1,1,0,1],[1,0,1,1],[0,1,1,1]
 * @param {Number} m 总共m个位置
 * @param {Number} n 填充n个位置
 * @returns {Array} flagArrs 
 */
function fill_vacancy(m, n) {//fill_vacancy填坑函数
    let filled_res_all = [],//filled_res_all填充的全部结果
        filled_res = [],//filled_res填充的结果
        isEnd = false;
    for (let i = 0; i < m; i++) {
        //m=4,n=3,i=0,1,2,3
        ////i=0,filled_res[0]=0<3,filled_res[0]=1
        ////i=1,filled_res[1]=1<3,filled_res[1]=1
        ////i=2,filled_res[2]=2<3,filled_res[2]=1
        ////i=3,filled_res[3]=3=3,filled_res[3]=0
        ////filled_res=[1110]
        filled_res[i] = i < n ? 1 : 0;
    }
    //filled_res_all=[[1110]]
    filled_res_all.push(filled_res.concat());
    // 当n不等于0并且m大于n的时候进入
    if (n && m > n) {
        while (!isEnd) {
            let flag = 0;
            for (let i = 0; i < m - 1; i++) {
                if (filled_res[i] == 1 && filled_res[i + 1] == 0) {
                    for (let j = 0; j < i; j++) {
                        filled_res[j] = j < flag ? 1 : 0;
                    }
                    filled_res[i] = 0;
                    filled_res[i + 1] = 1;
                    let aTmp = filled_res.concat();
                    filled_res_all.push(aTmp);
                    //slice(-n)即为从数组倒数第n个元素取到最后一个元素
                    //截取filled_res的后三位，如果不包含0走if，包含0跳出循环
                    if (aTmp.slice(-n).join('').indexOf('0') == -1) {
                        isEnd = true;
                    }
                    break;
                }
                filled_res[i] == 1 && flag++;
            }
        }
    }
    return filled_res_all;
}


/**
 * @desc 统计sku生成的组合的stock和price,并保存到return值count_skuComb_SP_res中,详细步骤请看下面注释，较为复杂
 * @param  {Array} 商品sku的原始数据
 * @returns {Object} count_skuComb_SP_res
 */
function count_skuComb_SP(sku) {//S代表stock，P代表price
    let count_skuComb_SP_res = {};//统计结果保存至count_skuComb_SP_res
    let skuKeys = Object.keys(sku)
    //skuKeys=[["红色", "套餐一", "128G"],["红色", "套餐一", "256G"]...]
    skuKeys.forEach((skuKey) => {
        //将skuKey以分号分隔为数组
        let skuItem_str_to_arr = skuKey.split(';')
        //使用skuItemToComb函数得到当前商品的所有组合skuItemComb                
        let skuItemComb = skuItemToComb(skuItem_str_to_arr)
        //// skuItemComb = [[空属性 × 3],['黑', 空属性 × 2],[空白, '16G', 空白],[空属性 × 2, '电信'],['黑', '16G', 空白],['黑', 空白, '电信'],[空白, '16G', '电信'],['黑', '16G', '电信']]

        //然后遍历当前商品所有组合skuItemComb，查看count_skuComb_SP_res中是否有skuItemComb的数组元素，
        ////没有则先给count_skuComb_SP_res[b.join(';')]添加属性名为stock，值为sku[item].stock；再给count_skuComb_SP_res[b.join(';')]添加属性名为prices，值为[sku[item].price]数组形式
        ////有则给item.stock累加sku[item].stock，且给item.prices加入新元素sku[item].price
        skuItemComb.reduce((a, b) => {
            //先将数组元素b由数组转为字符串，用分号分隔
            ////此时b.join(';') = ' ; ; '
            ////sku[item]即为{ price: 100, stock: 10 }
            if (a[b.join(';')]) {
                a[b.join(';')].stock += sku[item].stock
                a[b.join(';')].prices.push(sku[item].price)
            } else {
                a[b.join(';')] = {
                    stock: sku[item].stock,
                    prices: [sku[item].price]
                }
            }
            return count_skuComb_SP_res
        }, count_skuComb_SP_res)
    })
    return count_skuComb_SP_res;
}

let final_res = count_skuComb_SP(sku)
console.log(final_res);