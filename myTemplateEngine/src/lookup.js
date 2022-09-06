// 函数功能：可以在dataObj对象中，寻找连续点符号的keyName属性，，比如dataObj是
/*
{
  a: {
    b: {
      c: 123
    }
  }
}
lookup{dataObj, a.b.c}结果就是100
*/
export default function lookup(dataObj, keyName) {
  console.log(dataObj, keyName)
}