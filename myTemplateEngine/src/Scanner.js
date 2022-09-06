// Scanner类
export default class Scanner {
  constructor(templateStr) {
    // console.log('我是Scanner', templateStr);

    this.templateStr = templateStr
    // 指针
    this.pos = 0;
    this.tail = templateStr
  }

  // 走过指定内容（{{}}），没有返回值，功能弱
  scan(tag) {
    if (this.tail.indexOf(tag) == 0) {
      // 改变指针
      this.pos += tag.length
      // 改变尾巴
      this.tail = this.templateStr.substr(this.pos)
    }
  }

  // 让指针进行扫描，知道遇见指定内容结束，并且能够返回结束之前路过的内容
  scanUtil(stopTag) {
    // 记录pos的值
    const pos_backUp = this.pos
    // 尾巴开头不是stopTag时，说明没扫描到stopTag
    while(this.tail.indexOf(stopTag) != 0 && this.eos()) { // indexOf() 第一次出现指定值的索引
      this.pos++
      this.tail = this.templateStr.substr(this.pos) // subsrt(star, [length])
    }

    return this.templateStr.substring(pos_backUp, this.pos) // substring(indexStart, indexEnd)
  }

  // 指针是否已经到头
  eos() {
    return this.pos <= this.templateStr.length
  }
}