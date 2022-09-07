import lookup from "./lookup"
// 函数的功能是：让tokens数组变为dom字符串
export default function renderTmeplate(tokens, data) {
  // console.log(tokens, data, 'eee')
  // 结果字符串
  var resultStr = ''
  // 遍历tokens
  for (let i = 0; i < tokens.length; i ++) {
    let token = tokens[i]

    // 看类型,第零项时文本的类型
    if (token[0] == 'text') {
      resultStr += token[1]
    } else if (token[0] == 'name') {
      // resultStr += data[token[1]]
      // 如果是name类型，那么久直接使用它的值，当然要是用lookup,因为要防止这里是a.b.c有逗号得形式
      resultStr += lookup(data, token[1])
    } else if (token[0] == '#') {

    }
  }
  console.log(resultStr, 'str')
  return resultStr
}