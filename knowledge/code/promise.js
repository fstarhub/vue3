/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-06-09 23:30:35
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-06-29 16:51:45
 */
const isFunction = (data) => typeof data === 'function'

// 状态
const pending = 'pending'
const fulfilled = 'fulfilled'
const rejected = 'rejected'

class MPromise{
  constructor(executor) {
    if (!isFunction(executor)) {
      // throw new Error('promise 必须接受一个函数')
       console.log(new Error('promise必须接受一个函数'))
    }

    this.status = pending
    this.value = null
    this.callbacks = []
    executor(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {
    if (this.status === pending) {
      this.status = fulfilled
      this.value = value
      let that = this
      queueMicrotask(() => {
        that.callbacks.map(el => {
          el.onFulfilled(this.value)
        })
      })
    }
    
  }
  reject(reason) {
    if (this.status === pending) {
      this.status = rejected
      this.value = reason
      let that = this
      queueMicrotask(() => {
        that.callbacks.map(el => {
          el.onRejected(this.value)
        })
      })
    }
  }

  then(onFulfilled, onRejected) {
    if (!isFunction(onFulfilled)) {
      onFulfilled = () => {}
    }
    if (!isFunction(onRejected)) {
      onRejected = () => {}
    }
    return new MPromise((resolve, reject) => {
      if (this.status === fulfilled) {
        this.callbacks.push({
          onFulfilled: (value) => {
            let result = onFulfilled(value)
            if (result === promise) {
              console.log(new Errow('返回的promise不能是自生'))
            }
            if (result instanceof MPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          }
        })
      } else if (this.status === rejected) {
        this.callbacks.push({
          onRejected: (value) => {
            let result = onRejected(value)
            if (result === promise) {
              console.log(new Errow('返回的promise不能是自生'))
            }
            if (result instanceof MPromise) {
              result.then(resolve, reject)
            } else {
              reject(result)
            }
          }
        })
      } else {
        this.callbacks.push({
          onFulfilled: (value) => {
            let result = onFulfilled(value)
            if (result === promise) {
              console.log(new Errow('返回的promise不能是自生'))
            }
            if (result instanceof MPromise) {
              result.then(resolve, reject)
            } else {
              resolve(result)
            }
          },
          onRejected: (value) => {
            let result = onRejected(value)
            if (result === promise) {
              console.log(new Errow('返回的promise不能是自生'))
            }
            if (result instanceof MPromise) {
              result.then(resolve, reject)
            } else {
              reject(result)
            }
          }
        })
      }
    })
  }

  static resolve(value) {
    return new MPromise((res, rej) => {
      if (value instanceof MPromise) {
        value.then(res, undefined)
      } else {
        res(value)
      }
    })
  }
  static reject(value) {
    return new MPromise((res, rej) => {
      if (value instanceof MPromise) {
        value.then(undefined, rej)
      } else {
        rej(value)
      }
    })
  }

  static all(parmises) {
    let arr = []
    let count = 0
    parmises.forEach((el,i) => {
      el.then((res) => {
        arr[i] = res
        count++
        if (count === parmises.length) {
          resolve(arr)
        }
      },rej => {
        reject(rej)
      })
    })
  }
  any(parmises) {
    return new MPromise((resolve, reject) => {
      let result = []
      let count = 0
      for(let p of parmises) {
        MPromise.resolve(p).then(res => {
          resolve(res)
        }, err => {
          result[count] = err
          if (++count === parmises.length) {
            reject(result)
          }
        })
      }
    })
  }
  race (parmises) {
    return new MPromise((resolve, reject) => {
      for(let p of parmises) {
        MPromise.resolve(p).then(resolve, reject)
        // MPromise.resolve(p).then(res => {
        //   resolve(res)
        // }, rej => {
        //   reject(rej)
        // })
      }
    })
  }
  catch (onRejected) {
    this.then(null, onRejected)
  }
  finally(callback) {
    return this.then((value) => {
      return MPromise.resolve(callback()).then(() => {value})
    }, (reason) => {
      return MPromise.resolve(callback()).then(() => {reason})
    })
  }
}

// var a = new MPromise((resolve, reject) => {
//   reject('失败')
//   // resolve('成功')
//   console.log('你好')
// }).then((res) => {
//   console.log('222')
//   return '123'
// },(reject) => {
//   console.log(333)
//   return 'ccc'
// }).then((res) => {
//   console.log(res)
// },(rej) => {
//   console.log(rej)
// })

// var promise = new MPromise((resolve, reject) => {
//   resolve(11)
// })
// let p = promise.then(res => {
//   console.log(res,'res')
//   return p
// })
