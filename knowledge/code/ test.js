/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-07-08 11:25:30
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-07-23 17:45:01
 */
// arr1, arr2, 偶数，奇数
function trans (arr1,arr2) {
  var ji = []
  var ou = []
  var totalArr = arr1.concat(arr2)
  var jiArr = totalArr.filter(el => {
    return el % 2 === 1
  })
  let ouArr = totalArr.filter(el => {
    return el % 2 === 0
  })
  ji = jiArr.sort((a, b) => {
    return a - b
  })
  ou = ouArr.sort((a, b) => {
    return b - a
  })
  console.log([...ou, ...ji])
  return [...ou, ...ji]
}
let a = [1,3,4,5,6]
let b = [4,2,6,7,8,9]

trans(a, b)