import Scanner from "./Scanner";
import nestTokens from "./nestTokens";

// 将模板字符串变为tokens数组
export default function parseTemplateToTokens(template) {
  var tokens = []
  // 创建扫描器
  var scanner = new Scanner(template)
  var words
  // 让扫描器工作
  while(scanner.eos()) {
    // 收集开始标记之前出现的文字
    words = scanner.scanUtil('{{')
    if (words != '') {
      // 尝试去空格，判断普通文本的空格，还是标签中的空格
      // 标签中的空格不去掉，如<div class="box">
      let isInJJH = false
      // 空白字符串
      var _words = ''
      for(let i = 0; i < words.length; i++) {
        // 判断空格是否在标签里
        if (words[i] == '<') {
          isInJJH = true
        } else if (words[i] == '>') {
          isInJJH = false
        }
        // 如果这项不是空格，拼接上
        if (/\s/.test(words[i])) {
          _words += words[i]
        } else {
          if (isInJJH) {
            // 如果这项是空格，只有它在标签内的时候，拼接上
            _words += ''
          }
        }
      }
      // 存起来
      tokens.push(['text', words])
    }
    // 过双大括号
    scanner.scan('{{')

    words = scanner.scanUtil('}}')
    if (words != '') {
      // 模仿mustache语法{{#XXX}}中间的东西，判断一下首字符
      if (words[0] == '#') {
        // 存起来,从下标为1的项开始存，因为下标为0的项时#
        tokens.push(['#', words.substring(1)])
      } else if (words[0] == '/') {
        tokens.push(['/', words.substring(1)])
      } else {
        tokens.push(['name', words])
      }
    }
    scanner.scan('}}')
  }
  // 返回折叠的tokens
  return nestTokens(tokens)
}