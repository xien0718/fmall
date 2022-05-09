export default class AdjoinMatrix { //类名：adjoinmatrix相邻矩阵
    //vertex：全部规格对应的属性值，例如[黑，白，64G，128G] 
    //quantity：全部属性值的长度，4 
    //adjoinArray：全部属性值长度平方的矩阵数组

    constructor(vertex) {
        this.vertex = vertex;
        this.quantity = this.vertex.length;
        this.adjoinArray = [];
        this.init();
    }
    //init：创建（quantity）*（quantity）的矩阵
    init() {
        this.adjoinArray = Array(this.quantity * this.quantity).fill(0);
        //fill(0)是给数组填充数组元素0，如果fill({})，则填充的数组元素都指向该内存中该对象
        //[0,0,0,0,
        // 0,0,0,0,
        // 0,0,0,0,
        // 0,0,0,0,]
    }

    /** 
     * @param id 点击的属性值，例如白，String类型  
     * @param sides 传入的属性值，例如[黑，白，64G，128G]，Array类型   
     * @param vertex 全部的属性值，例如[黑，白，64G，128G]，Array类型   
     * @param pIndex （全部的属性值）是否包含（点击的属性值），包含return索引，不包含return-1，   
     * @param index 全部的属性值，例如[黑，白，64G，128G]，Array类型   
     * @param adjoinArray 全部属性值长度平方的矩阵数组，已全部填0       
     **/
    setAdjoinVertexs(id, sides) {
        //1.获取（点击的属性值）在（全部的属性值）中的索引
        const pIndex = this.vertex.indexOf(id);

        //2.获取（第一个传入的属性值）在（全部的属性值）中的索引，


        //点击的白，根据点击的
        //例如id=白，sides=[黑，白，64G，128G]，pIndex=1，
        //进入sides.forEach，item=黑，index=0，adjoinArray[1*4+0]=1
        //进入sides.forEach，item=白，index=1，adjoinArray[1*4+1]=1
        //进入sides.forEach，item=64，index=2，adjoinArray[1*4+2]=1
        //进入sides.forEach，item=128，index=3，adjoinArray[1*4+3]=1
        //最后将adjoinArray修改为
        //[0,0,0,0,
        // 1,1,1,1,
        // 0,0,0,0,
        // 0,0,0,0,]
        //即第二行修改为1
        sides.forEach((item) => {
            const index = this.vertex.indexOf(item);
            this.adjoinArray[pIndex * this.quantity + index] = 1;
        });
    }
    /** @param id 白，string类型   
     * 许可值 为1即可以，许可值为0不可以
     * vertex 数组元素为所有规格值 例：['黑','白','64G','128G']
     * col 选中的id对应的那一竖列的许可值 例：[0,0,0,1]
     *  @return col
     **/
    getVertexCol(id) {
        //[黑，白，64G，128G]是否包含白，包含index=1
        const index = this.vertex.indexOf(id);
        const col = [];
        this.vertex.forEach((item, pIndex) => {
            //index=1
            //第一轮col.push(this.adjoinArray[1])
            //第二轮col.push(this.adjoinArray[5])
            //第三轮col.push(this.adjoinArray[9])
            //第三轮col.push(this.adjoinArray[13])
            //最后col=[0,0,0,0]    

            //index=2
            //第一轮col.push(this.adjoinArray[2])
            //第二轮col.push(this.adjoinArray[6])
            //第三轮col.push(this.adjoinArray[10])
            //第三轮col.push(this.adjoinArray[14])
            //最后col=[0,0,0,0] 

            //index=3
            //第一轮col.push(this.adjoinArray[3])
            //第二轮col.push(this.adjoinArray[7])
            //第三轮col.push(this.adjoinArray[11])
            //第三轮col.push(this.adjoinArray[15])
            //最后col=[0,0,0,0]
            col.push(this.adjoinArray[index + this.quantity * pIndex]);
        });
        return col;
    }

    /** @param params [黑，白]，Array类型  
     * 将选中的黑竖列白数列的每一行对应的许可值交集作为数组元素放入paramsVertexSum中 
     * 把选中的多个属性值放入数组中，在矩阵中找到属性值对应竖列的所有许可值，放入paramsVertex中，
     * paramsVertex 传入的params的数组元素对应的竖列的许可值 例：[黑属性值对应的竖列的许可值,白属性值对应的竖列的许可值]
     * paramsVertexSum=[黑白第一列]
     *  @returns paramsVertexSum
     **/
    getColSum(params) {
        //第一轮[黑，白].map(黑=>把黑对应的那一竖列的许可值选出来)放入paramsVertex中[0000]
        //第二轮[黑，白].map(白=>把白对应的那一竖列的许可值选出来)放入paramsVertex中[0000]
        //paramsVertex=[[0,0,0,0],[0,0,0,0]]
        const paramsVertex = params.map((id) => this.getVertexCol(id));
        const paramsVertexSum = [];
        //[黑，白，64G，128G].forEach
        this.vertex.forEach((item, index) => {
            //第一轮：rowtoal=0
            //第二轮：rowtoal=0
            //第一轮paramsVertexSum=[0,0]
            //第二轮paramsVertexSum=[0,0]
            const rowtotal = paramsVertex.map((value) => value[index]).reduce((total, current) => {
                //total = total + current || 0如果total+current的值为true，则把total+current的值赋给total
                total += current || 0;
                return total;
            }, 0);
            paramsVertexSum.push(rowtotal);
        });
        return paramsVertexSum;
    }


    /**  @param params Array类型：相邻类型   
     * 传入一个顶点数组，求出并集   
     */
    getCollection(params) {
        const paramsColSum = this.getColSum(params);
        let collections = [];
        paramsColSum.forEach((item, index) => {
            if (item && this.vertex[index]) collections.push(this.vertex[index]);
        });
        return collections;
    }


    /**  @param params Array类型：相邻类型   
     ** 传入一个顶点数组，求出交集   
     */
    getUnions(params) {
        const paramsColSum = this.getColSum(params);
        let unions = []; //类型：相邻类型
        paramsColSum.forEach((item, index) => {
            if (item >= params.length && this.vertex[index]) unions.push(this.vertex[index]);
        });
        return unions;
    }

}
//变量说明：
//sku列表所有有货的商品列表：[sku1,sku2,sku3]
//sku1:['红','64g','4g']
//sku2：['黑', '128g', '6g']
//sku3
//sku4


//sku算法
//1.获取所有的sku，例如：
//sku1=[红, 64g, 4g], 
//sku2=[黑, 128g, 6g]

//2.递归求出所有sku内部的组合，用map去重后放入U中，例如：
//sku1对应U1
let U1 = [['红'], ['64g'], ['4g'], ['红', '64g'], ['红', '4g'], ['64g', '4g'], ['红', '64g', '4g']]
//c31+c32+c33 共7种
//U=U1+U2+U3


//3.同一规格的属性值也算一种组合放入U中，例如：[红，黑]、[64g,128g]
//
//4.每次点击规格属性值，将(已选择的规格属性值)加入数组C，判断U是否包含C例如：点击红的时候，判断U中是否有[红，64g]、[]