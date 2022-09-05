import Scanner from "./Scanner";

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
        tokens.push(['text', words])
      }
    }
    scanner.scan('}}')
  }
  return tokens
}