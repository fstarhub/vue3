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
      resultStr += data[token[1]]
    } else if (token[0] == '#') {
      
    }
  }
  console.log(resultStr, 'str')
  return resultStr
}