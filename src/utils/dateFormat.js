  const dateMethods = {
      // 补零
      repairZero: s => (s + '').length === 1 ? '0' + s : s,

      // 格式化时间
      format(s, date) {
          date = date || new Date();
          const {
              repairZero
          } = this;
          const reg = {
              yyyy: date.getFullYear(),
              yy: (date.getFullYear() + '').slice(2),
              MM: repairZero(date.getMonth() + 1),
              dd: repairZero(date.getDate()),
              HH: repairZero(date.getHours()),
              mm: repairZero(date.getMinutes()),
              ss: repairZero(date.getSeconds()),
          }
          //取出reg的key放入数组:[yyyy,yy,MM,dd,HH,mm,ss],
          //遍历这个数组,看每个数组元素r(reg中的属性名)对应的reg中的属性值是否符合
          //(reg中的属性名"yyyy")与(传入的格式s"yyyy")如果相匹配，用(reg中的属性值"date.getFullYear()")替换掉匹配的内容
          Object.keys(reg).forEach(r => s = s.replace(new RegExp(`${r}`, 'g'), reg[r]))
          return s
      }

  }
  module.exports = {
      dateMethods
  }
  // new Date()为当前gmt时间：Fri Aug 20 2021 10:32:15 GMT+0800 (中国标准时间)
  // new Date().getTime()为当前时间戳
  // const date = new Date()


  //测试
  //给日期对象设置年份为1999测试
  // date.setFullYear(1999)
  // console.log(dateFunc.format('yyyy-MM-dd HH:mm:ss', date))
  // 传入格式实参替换形参s测试
  // console.log(dateFunc.format('yyyy-MM-dd HH:mm:ss'))
  // 传入任意实参替换s测试
  // console.log(dateFunc.format('在yyyy这一年的MM月， dd号的HH点，外面下雨了'))




  //