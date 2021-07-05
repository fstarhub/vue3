/**
 * 1.shallowReactive, shallowRef
 * 2.reactive,ref
 * 3.shallowReadonly
 * 4.readlnly
 */

 function ref(val) {
  return reactive({value: val})
}

function reactive(obj) {
  if (typeof obj === 'object') {
    if (obj instanceof Array) {
      // 如果是一个数组，那么取出数组中的每一个元素
      // 判断每一个元素是否又是一个对象，如果又是一个对象，那么也需要包装成一个Proxy
      obj.forEach((item, index) => {
        obj[index] = reactive(item)
      })
    } else {
      // 如果是一个对象，那么取出对象属性的值
      // 判断对象属性的值是否又是一个对象，如果又是一个对象，那么也需要包装成一个Proxy
      for(let key in obj) {
        let item = obj[key]
        if (typeof item === 'object') {
          obj[key] = reactive(item)
        }
      }
    }
    return new Proxy(obj, {
      get(obj, key) {
        return obj[key]
      },
      set(obj, key, val) {
        obj[key] = val
        console.log('跟新UI界面')
        return true
      }
    })
  } else {
    console.warn(`${obj} is not object`)
  }
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
// let state = reactive(obj)
// state.a = 1
// state.gf.b = 2
// state.gf.f.c =3
// state.gf.f.s.d =4
let arr = [{id: 1,name: '鲁班', attr: {age: 19}}, {id:2, name:'虞姬'}]
let state = reactive(arr)
state[0].name = 'ashuai'
state[0].attr.age = 90
state[0].id = 3



