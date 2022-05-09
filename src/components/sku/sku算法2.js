function isAble(key, value) {
    //此时 key = 颜色    value = 红色
    var copySelectSpec = JSON.parse(JSON.stringify(this.selectSpec));
    copySelectSpec[key] = value;  // 此时 copySelectSpec = {"颜色":"红色","套餐":"","内存":""}
    let flag = this.skuList.some(item => {
        // 按照上面的skuList数据 此时第一次循环 item = { id: 1608188117178, specs: ["红色", "套餐一", "128G"] }
        var i = 0;
        //当前选择的skuItem，是否与存在的skuItem相匹配，

        //假如选：红、套餐四、空，验证第一条skuItem的i=2，return false
        //继续用：红、套餐四、空，验证第二条skuItem，i=2，return false
        //继续用：红、套餐四、空，验证第三条skuItem，i=2，return false
        //直到验证完最后一条skuItem，i也没有等于3的，因此flag=false，

        //假如选择了：空、套餐三、64G，第一条
        for (let k in copySelectSpec) {  //  for in  懂吧?
            // copySelectSpec[k]  依次是 '红色' \ '' \ ''
            if (copySelectSpec[k] != "" && item.specs.includes(copySelectSpec[k])) {  // item中有红色 i++    
                i++
            } else if (copySelectSpec[k] == "") {   // ''后面规格是空字符串 不管 也执行 i++
                i++;
            }
        }
        // 此时 红色满足条件 return true  此时红色规格校验完毕 并会退出当选skuList循环
        return i == specList.length
    })
    return flag
}