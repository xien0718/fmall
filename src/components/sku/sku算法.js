// 获得对象的key
function getObjKeys(obj) {
    //Object(obj)等同于new Object(参数)

    if (obj !== Object(obj)) {//检验传入的参数obj是否为对象
        throw new TypeError('Invalid object');
    }
    //取出obj的key
    let keys = Object.keys(obj)
    return keys;
}

/**
 * @desc 将一组数组sku的所有属性转化为组合，用数组展示
 * @param {Array} skuItem 传入的一组skuItem，例如['黑', '16G', '电信']
 * @returns {Array} skuComb 传入的这组sku所有属性的组合，例如
 * [[空属性 × 3],['黑', 空属性 × 2],[空白, '16G', 空白],[空属性 × 2, '电信'],['黑', '16G', 空白],['黑', 空白, '电信'],[空白, '16G', '电信'],['黑', '16G', '电信']]
 */
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


/**
 * @desc 求m个数中取1个的组合+取2个的组合+...+取n个的组合
 * @param {Number} m 总共m个数
 * @param {Number} n 取出n个数
 * @returns {Array} flagArrs [[3个取1个的填值情况],[3个取2个的填值情况],[3个取3个的填值情况]]
 * 假设m=3，n=2，即求c31+c32+c33
 * flagArrs=[[1,0,0],[0,1,0],[0,0,1],[1,1,0],[1,0,1],[0,1,1],[1,1,1]]
 * flagArrs的数组元素是flagArr,flagArr的元素中为1的则需要填入属性值，0则为空
 */

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

//skuKeys所有存在且有库存的属性组合：
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
// 渲染DOM
// function initDOM(key) {
//     var html = '';
//     $(key).each(function (index, el) {
//         html += '<div>';
//         html += '<label>' + this.name + '：</label>';
//         $(this.item).each(function (index, el) {
//             html += '<input type="button" class="sku" value="' + this + '">';
//         });
//         html += '</div>';
//     });
//     $('#sku').html(html);
// }
// 显示库存和价格
// function showCountAndPrice(resultSKU) {
//     var sku = [];
//     $('#sku div').each(function (index, el) {
//         sku.push($(this).children('.selected').val() || '');
//     });
//     sku = sku.join(';');
//     var maxPrice = Math.max.apply(Math, resultSKU[sku].prices);
//     var minPrice = Math.min.apply(Math, resultSKU[sku].prices);
//     $('#result').html('库存：' + resultSKU[sku].count + '<br>' + '价格：' + (maxPrice > minPrice ? minPrice + '-' + maxPrice : maxPrice));
// }


//sku格式
//规格1：属性1、属性2
//规格2：属性1、属性2、属性3
//规格3：属性1、属性2

// 校验相关SKU是否可选

function checkSKU(resultSKU) {
    //给id=sku中的div中的class=sku的节点添加属性disabled=false
    $('#sku div .sku').prop('disabled', false);
    var count = 0;
    var i = 0;

    //遍历id=sku中的div，div的所有子节点如果没有class=selected，count+1
    //count:没有选的规格数量，
    //i:最后一个没有选的规格的index
    $('#sku div').each(function (index, el) {
        if ($(this).children('.selected').length == 0) {
            count += 1;
            i = index;
        }
    });
    // 当只有一个规格没选时
    if (count == 1) {
        //遍历最后一个没选的规格下的属性值
        $('#sku div:eq(' + i + ') .sku').each(function (index, el) {
            var sku = [];
            //获取属性名，黑、金、白
            var text = $(this).val();
            //遍历规格
            $('#sku div').each(function (index, el) {
                if (index != i) {//已经选了属性的规格，将属性加入sku
                    sku.push($(this).children('.selected').val());

                } else {//还没选属性的规格，将所有属性加入sku
                    sku.push(text);
                }
            });
            if (resultSKU[sku.join(';')].count == 0) {
                $(this).prop('disabled', true);
            }
        });
    }
    // 当所有属性都有选时
    if (count == 0) {
        $('#sku div').each(function (index, el) {
            var i = index;
            $('#sku div:eq(' + index + ') .sku:not(.selected)').each(function (index, el) {
                var sku = [];
                var text = $(this).val();
                $('#sku div').each(function (index, el) {
                    if (index != i) {
                        sku.push($(this).children('.selected').val());
                    } else {
                        sku.push(text);
                    }
                });
                if (resultSKU[sku.join(';')].count == 0) {
                    $(this).prop('disabled', true);
                }
            });
        });
    }
    showCountAndPrice(resultSKU);
}

//页面加载完毕才执行
$(function () {
    // 属性集
    var key = [
        { name: '颜色', item: ['黑', '金', '白'] },
        { name: '内存', item: ['16G', '32G'] },
        { name: '运营商', item: ['电信', '移动', '联通'] }
    ];
    // 数据集
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
    var resultSKU = initSKU(sku);
    initDOM(key);
    checkSKU(resultSKU);
    $('#sku input[type=button]:not(:disabled)').click(function (event) {
        $(this).toggleClass('selected').siblings().removeClass('selected');
        checkSKU(resultSKU);
    });
});