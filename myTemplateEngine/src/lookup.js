// 函数功能：可以在dataObj对象中，寻找连续点符号的keyName属性，，比如dataObj是
/*
{
  a: {
    b: {
      c: 123
    }
  }
}
lookup{dataObj, a.b.c}结果就是123
*/
export default function lookup(dataObj, keyName) {
  // console.log(dataObj, keyName)
  // 首先看keyName中有没有点符号
  if (keyName.indexOf('.') != -1) {
    var keys = keyName.split('.')
    // 设置临时变量，用于周转，一层层找下去
    var temp = dataObj
    for (let i = 0; i < keys.length; i ++) {
      // 每找一层，就把它设置为新的临时变量
      temp = temp[keys[i]]
    }
    // console.log(temp, 'eee')
    return temp
  }

  // 如果没有点符号
  return dataObj[keyName]
  
}