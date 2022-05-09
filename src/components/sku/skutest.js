function skuItemToComb(skuItem) {
    var skuComb = [];
    for (var n = 0; n <= skuItem.length; n++) {
        var flagArrs = getFlagArrs(skuItem.length, n);
        while (flagArrs.length) {
            var flagArr = flagArrs.shift();
            var combArr = Array(skuItem.length);
            for (var i = 0; i < skuItem.length; i++) {
                if (flagArr[i]) {
                    combArr[i] = skuItem[i];
                }
            }
            skuComb.push(combArr);
        }
    }
    return skuComb;
}

function getFlagArrs(m, n) {
    var flagArrs = [],
        flagArr = [],
        isEnd = false;
    for (var i = 0; i < m; i++) {
        flagArr[i] = i < n ? 1 : 0;
    }
    flagArrs.push(flagArr.concat());
    // 当n不等于0并且m大于n的时候进入
    if (n && m > n) {
        while (!isEnd) {
            var leftCnt = 0;
            for (var i = 0; i < m - 1; i++) {
                if (flagArr[i] == 1 && flagArr[i + 1] == 0) {
                    for (var j = 0; j < i; j++) {
                        flagArr[j] = j < leftCnt ? 1 : 0;
                    }
                    flagArr[i] = 0;
                    flagArr[i + 1] = 1;
                    var aTmp = flagArr.concat();
                    flagArrs.push(aTmp);
                    if (aTmp.slice(-n).join('').indexOf('0') == -1) {
                        isEnd = true;
                    }
                    break;
                }
                flagArr[i] == 1 && leftCnt++;
            }
        }
    }
    return flagArrs;
}
function getObjKeys(obj) {
    //Object(obj)等同于new Object(参数)

    if (obj !== Object(obj)) {//检验传入的参数obj是否为对象
        throw new TypeError('Invalid object');
    }
    //取出obj的key
    let keys = Object.keys(obj)
    return keys;
}
function initSKU(sku) {
    var resultSKU = [];
    var skuKeys = getObjKeys(sku);
    for (var i in skuKeys) {
        var skuKey = skuKeys[i]; // 获取一条SKU的key
        var skuData = sku[skuKey]; // 获取一条SKU的相关数据
        var skuKeyAttrs = skuKey.split(';'); // 获取SKU的key的属性数组
        var combArr = skuItemToComb(skuKeyAttrs);
        for (var j = 0; j < combArr.length; j++) {
            var key = combArr[j].join(';');
            if (resultSKU[key]) {
                resultSKU[key].count += skuData.count;
                resultSKU[key].prices.push(skuData.price);
            } else {
                resultSKU[key] = {
                    count: skuData.count,
                    prices: [skuData.price]
                };
            }
        }
    }
    return resultSKU;
}
var sku = {
    '黑;16G;电信': { price: 100, count: 10 },
    '黑;16G;移动': { price: 101, count: 11 },
    '黑;16G;联通': { price: 102, count: 0 },
    '黑;32G;电信': { price: 103, count: 13 },
    '黑;32G;移动': { price: 104, count: 14 },
    '黑;32G;联通': { price: 105, count: 0 },
    '金;16G;电信': { price: 106, count: 16 },
    '金;16G;移动': { price: 107, count: 17 },
    '金;16G;联通': { price: 108, count: 18 },
    '金;32G;电信': { price: 109, count: 0 },
    '金;32G;移动': { price: 110, count: 20 },
    '金;32G;联通': { price: 111, count: 21 },
    '白;16G;电信': { price: 112, count: 0 },
    '白;16G;移动': { price: 113, count: 23 },
    '白;16G;联通': { price: 114, count: 24 },
    '白;32G;电信': { price: 115, count: 0 },
    '白;32G;移动': { price: 116, count: 26 },
    '白;32G;联通': { price: 117, count: 27 }
};
let res = initSKU(sku)
console.log(res);