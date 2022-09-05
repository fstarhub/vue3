// import Scanner from './Scanner'
import parseTemplateToTokens from './parseTemplateToTokens'

// 提供全局SSG_templaterEngine对象
window.SSG_templaterEngine = {
  render(template, data) {

    // 实例化扫描器，构造时提供一个参数，这个参数就是模板字符串，
    // 扫描器针对模板字符串工作的
    // var scanner = new Scanner(template)
    // var word
    // while(scanner.eos()) {
    //   word = scanner.scanUtil('{{')
    //   console.log(word);
    //   scanner.scan('{{')
      
    //   word = scanner.scanUtil('}}')
    //   console.log(word);
    //   scanner.scan('}}')
    // }

    // 调用parseTemplateToTokens函数，让模板字符串变为数组
    var tokens = parseTemplateToTokens(template)
    console.log(tokens)
    
  }

}
