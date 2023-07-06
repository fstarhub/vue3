/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-06-05 23:59:55
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-06-25 08:51:47
 */
// 手写ajax
// var ajax = new XMLHttpRequest()
// ajax.open('get', 'baidu.com', true)
// ajax.onreadystatechange = function() {
//   if (ajax.readyState === 4) {
//     if (ajax.status === 200) {
//       console.log('success', ajax.response)
//     } else {
//       console.log('error')
//     }
//   }
// }
// ajax.send('data')
// 手写浅拷贝
const shadowClone = (taget) => {

}
// 手写深拷贝
function deepClone(data) {
  let result
  if(typeof data === 'Object') { // 当前是一个对象
    if(Array.isArray(data)) { // 数组
      result = []
      for(let i in data) {
        result.push(deepClone(data[i]))
      }
    } else if(typeof data === null) {
      result = null
    } else if(data.constructor === RegExp) {
      result = data
    } else {
      result = {}
      for(let j in data) {
        result[j] = deepClone(data[j])
      }
    }
  } else { // 当前不是对象
    result = data
  }
  return result
}
// 数组扁平化
function newA(arr) {
  arr.toString().split(',')
}
function newA(arr) {
  arr.flat(infinity)
}
function re(arr) {
  return arr.reduce((res, item, index) => (res.concat(Array.isArray(item) ? re(item) : item)), [])
}
// 手写json.stringfly()
// promise
// promise.all
// 手写new
function myNew(constructor, ...args) {
  const obj = {}
  obj._proto_ = constructor.prototype
  const result = constructor.call(obj, ...args)
  return typeof result === 'Object' && result != null ? result : obj
}
// instanceof
function myInstanceOf(obj, fn) {
  let proto = obj._proto_
  while(proto) {
    if (proto === fn.prototype) return true
    proto = proto._proto_
  }
  return false
}
// 节流
function throttle(fn, delay) {
  var valid = true
  return function() {
    if (valid) {
      setTimeout(() => {
        fn.call(this)
        valid = true
      }, delay);
      valid = false
    }
  }
}
function throttle1(fn, delay) {
  var lastTime = 0
  return function() {
    var now = new Date()
    if (now - lastTime > delay) {
      fn.call(this)
      lastTime = now
    }
  }
}

function throttle2(fn, delay) {
  var timeId = null
  return function() {
    if (timeId) return
    timeId = setTimeout(() => {
      fn.call(this)
      clearTimeout(timeId)
      timeId = null
    }, delay);
  }
}
// 防抖
function debouce(fn, delay) {
  var timeId = null
  return function() {
    clearTimeout(timeId)
    timeId = setTimeout(() => {
      fn.call(this)
    }, delay);
  }
}
// 数组去重
function defn(arr) {
  let res = []
  arr.forEach(item => {
    if (res.indexOf(item) === -1) {
      res.push(item)
    }
  })
  return res
}
// 数组转树形结构
function see(arr) {
  let res = []
  let map = {}
  arr.forEach(item => {
    map[item.id] = item
    item.children=[]
  })
  arr.forEach(el => {
    if (!map[el.parentId]) {
      res.push(el)
    }else{
      map[el.parentId].children.push(el)
    }
  })
  return res
}

function see1(list, rootPid) {
  let res = []
  list.forEach(el => {
    if (el.id === rootPid) {
      const children = see1(list, el.pid)
      if (children.length) {
        el.children = children
      }
    }
    res.push(el)
  })
  return res
}
let cc=see([
  {id: 1, name: '111', parentId: 0},
  {id: 2, name: '222', parentId: 1},
  {id: 3, name: '333', parentId: 1},
  {id: 4, name: '444', parentId: 2},
  {id: 5, name: '555', parentId: 3},
  {id: 6, name: '666', parentId: 5},
])
function ree(arr) {
  let newArr = []
  arr.forEach(el => {
    newArr.push(el)
    if (el.children && el.children.length > 0) {
     newArr = newArr.concat(ree(el.children))
    }
  })
  return newArr
}
// ree(cc)
// sleep
(async () => {
  console.log('start')
  await sleep(3000)
  console.log('end')
  function sleep(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('--')
        resolve(1)
      }, time);
    })
  }
})()
