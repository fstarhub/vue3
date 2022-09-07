import lookup from './lookup.js';
import renderTemplate from './renderTemplate.js';
// 处理数组，结合renderTemplate实现递归
/**
 * 
 * @param {*} token 就是简单得['#', 'students', []]
 * @param {*} data data得长度是多少，就要递归调用多少次，数据渲染模板
 * 比如data:
 * {
      students: [
        {'name': '小明', 'hobbies': ['游泳', '打球']},
        {'name': '小强', 'hobbies': ['羽毛球', '篮球']},
        {'name': '小红', 'hobbies': ['下棋', '睡觉', '打游戏']}
      ]
    }
 */
  export default function parseArray(token, data) {
  // console.log(token, data, '0000')
  // 得到整体数据data中这个数组要使用的部分
  var v = lookup(data, token[1]);
  // console.log(v, 'v')
  // 结果字符串
  var resultStr = '';

  // 最难思考的一个循环，遍历的是数据
  for (let i = 0; i < v.length; i++) {
    // 要补一个“.”属性
    resultStr += renderTemplate(token[2], {
      ...v[i],
      '.': v[i]
    })
  }
  // console.log('parseArr', resultStr)
  return resultStr
  // return 'wewewe'
}