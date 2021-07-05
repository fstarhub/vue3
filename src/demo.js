/**
 * 1.Vue3响应式数据本质
 * 在vue2.x中是通过difineProperty来实现响应式数据的在vue3.x中是通过Proxy来实现响应式数据的
 */

let obj = {name: 'aaa', age: 10};
let state = new Proxy(obj, {
  get(obj, key) {
    console.log(obj, key) // { name: 'aaa', age: 10 } name
    return obj[key]
  },
  set(obj, key, value) {
    console.log(obj,key,value)
    obj[key] = value
    console.log('更新UI界面')
  }
})
console.log(state.name) // aaa
state.name = 'shuai'
console.log(state)

/**
 * 2.Proxy注意点
 * set 方法必须通过返回值告诉Proxy此次操作是否成功
 */
 let arr = [1, 3, 5];
 let state1 = new Proxy(arr, {
   get(obj, key) {
     console.log(obj, key) // [ 1, 3, 5 ] 1
     return obj[key]
   },
   set(obj, key, value) {
     console.log(obj, key, value) // [ 1, 3, 5 ] 3 7
     obj[key] = value
     console.log('更新UI界面')
     return true // 返回一个结果，来告诉set当前操作是否成功
   }
 })
//  console.log(state1[1])
state1.push(7)
