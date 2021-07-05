/**
 * 1.shallowReactive, shallowRef
 * 2.reactive,ref
 * 3.shallowReadonly
 * 4.readlnly
 */
// 如何实现isReactive,isRef,isReadonly


function shallowReadonly(obj) {
  return new Proxy(obj, {
    get(obj, key) {
      return obj[key]
    },
    set(obj, key, val) {
      // obj[key] = val
      // console.log('跟新UI界面')
      // return true
      console.warn(`${key}是一个只读的属性，不能赋值`)
    }
  })
}

let obj = {
  a: 'a',
  gf: {
    b: 'b',
    f: {
      c: 'c',
      s: {
        d: 'd'
      }
    }
  }
}
let state = shallowReadonly(obj)
state.a = 1
state.gf.b = 2


