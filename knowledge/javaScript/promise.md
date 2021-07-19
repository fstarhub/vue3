<!--
 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-07-18 23:56:18
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-07-19 00:30:48
-->
## promise
### 为什么要有同步异步？
首先JS是一个单线程的语言。单线程的含义类似于从头走到尾，谁也别管谁，前面堵车我就停（官方：单线程在程序执行时，所走的程序路径按照连续顺序排下来，前面的必须处理好，后面的才会执行。），没办法开多个线程。

为什么JS不设计成多线程的可以开多个线程同时操作。JS是可以去操作DOM的。假设JS设计成一个多线程语言。你的主线程在给DOM的innerHtml做一个赋值操作，你的另一个线程把这个DOM结构删除了。。。。这肯定不可以

所以干脆设计成一个单线程，哪怕后期HTML5出现的web worker也是不允许操作DOM结构的，可以完成一些分布式的计算。对于dom结构我们必须顺序操纵，坚决不允许出现对同一个dom同时进行操作。

但是浏览器加载一些需要网络请求的比如图片资源、ajax。或者轮训的内容。由于是单线程，需要等待这些内容访问完才可以执行下面的代码。那么你发个ajax请求或者请求个图片资源，那么这段时间就什么也做不了，这种效果对程序是一种**阻塞**，在等待时间明明可以做些别的事情却选择了无意义的等待。(**同步阻塞**)这个时候异步就出现了，在涉及需要等待的操作，我们选择让程序继续运行，在等待时间结束的时候，通知一下我们的程序内容执行完毕，你可以操作这些资源了，这段等待时间并不影响你程序的继续执行，只是**在未来的某个时间段（不确定），有一个操作一定会执行，这就是异步。（异步非阻塞）**，这就是为什么要有同步异步。

#### 1. 了解术语
规范的第一部分，描述了几个术语的意思。
* promise 是一个包含 then 方法的对象或函数，该方法符合规范指定的行为。

* thenable 是一个包含 then 方法和对象或者函数。

* value 就是任意合法 JS 值。

* exception 就是 throw 语句抛出的值。

* reason 是一个指示 promise 为什么被 rejected 的值。

这部分没有需要落实到代码的地方，继续看下去。

#### 2. Promise结构
```js
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('FULFILLED')
    }, 1000)
  })
```
> 构造函数Promise必须接受一个函数作为参数，我们称该函数为handle，handle又包含resolve和reject两个参数，它们是两个函数。

##### 静态resolve方法
```js
  // 添加静态resolve方法
  static resolve (value) {
    // 如果参数是MyPromise实例，直接返回这个实例
    if (value instanceof MyPromise) return value
    return new MyPromise(resolve => resolve(value))
  }
```
##### 静态reject方法
```js
  // 添加静态reject方法
  static reject (value) {
    return new MyPromise((resolve ,reject) => reject(value))
  }

```

#### 3. Promise状态
promise 有 3 个状态，分别是 pending, fulfilled 和 rejected。
1. 在 pending 状态，promise 可以切换到 fulfilled 或 rejected
2. 在 fulfilled 状态，不能迁移到其它状态，必须有个不可变的 value。
3. 在 rejected 状态，不能迁移到其它状态，必须有个不可变的 reason

![](https://mmbiz.qpic.cn/mmbiz_png/PeB3s8AJwnaVickrkAHBKKnqOe8XNtAjNcUOAR5FHTym2CBzwW3iaRhIDE4wXjr3wkFyDPa6w2POjzyxNUiaOlJZA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

落实到代码上，大概像上面那样：

有 3 个常量 pending, fulfilled, rejected，

一个 Promise 构造函数，有 state 和 result 两个属性。

当 state 为 fulfilled 时，result 作为 value 看待。

当 state 为 rejected 时，result 作为 reason 看待。

一个 transition 状态迁移函数，它只会在 state 为 pending 时，进行状态迁移

#### then方法
promise 必须有 then 方法，接受 onFulfilled 和 onRejected 参数。如下
```js
  Promise.prototype.then = function (onFullfilled, onReject) {

  }
```
onFulfilled 和 onRejected 如果是函数，必须最多执行一次
onFulfilled 的参数是 value，onRejected 函数的参数是 reason。

then 方法可以被调用很多次，每次注册一组 onFulfilled 和 onRejected 的 callback。它们如果被调用，必须按照注册顺序调用
```js
  function Promise() {
    this.state = PENDING;
    this.result = null
    this.callback = []
  }
```
那就像上面那样，为 Promise 新增一个 callbacks 数组记录。

**then 方法必须返回 promise。**

![](https://mmbiz.qpic.cn/mmbiz_png/PeB3s8AJwnaVickrkAHBKKnqOe8XNtAjNJDBiaEwSqMicGQUOYR0534qR9xMxiakgHsf9OjFkY1f0whMbLsHTExibcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

在 then 方法里，return new Promise(f)，满足 then 必须 return promise 的要求。

当 state 处于 pending 状态，就储存进 callbacks 列表里。

当 state 不是 pending 状态，就扔给 handleCallback 去处理。

至于 handleCallback 是什么。其实不重要，我们只需要知道，它一定存在。我们总得做一些处理，不是写死在 then 函数里，就是在外部的辅助函数里。

至于为啥要套个 setTimeout 呢？

因为 then 方法里，还有一个重要约束是：

我们不是在 JS 引擎层面实现 Promises，而是使用 JS 去实现 JS Promises。在JS里无法主动控制自身 execution context stack。可以通过 setTimeout/nextTick 等 API 间接实现，此处选用了 setTimeout。

**then 方法返回的 promise，也有自己的 state 和 result。它们将由 onFulfilled 和 onRejected 的行为指定。**

这正是 handleCallback 要做的部分。

![](https://mmbiz.qpic.cn/mmbiz_png/PeB3s8AJwnaVickrkAHBKKnqOe8XNtAjNFutqsvBQeoSvtzE3LQKNUjgNj6FkBq4LLyib2ew1bqPdWkuL4s4OeHA/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1)

handleCallback 函数，根据 state 状态，判断是走 fulfilled 路径，还是 rejected 路径。

先判断 onFulfilled/onRejected 是否是函数，如果是，以它们的返回值，作为下一个 promise 的 result。

如果不是，直接以当前 promise 的 result 作为下一个 promise 的 result。

如果 onFulfilled/onRejected 执行过程中抛错，那这个错误，作为下一个 promise 的 rejected reason 来用

then 方法核心用途是，构造下一个 promise 的 result。


#### catch 方法
> 相当于调用 then 方法, 但只传入 Rejected 状态的回调函数

```js
  // 添加catch方法
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
```

#### all的用法：谁跑的慢，以谁为准执行回调。all接收一个数组参数，里面的值最终都算返回Promise对象
##### 静态all方法
```js
  // 添加静态all方法
  static all (list) {
    return new MyPromise((resolve, reject) => {
      /**
       * 返回值的集合
       */
      let values = []
      let count = 0
      for (let [i, p] of list.entries()) {
        // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
        this.resolve(p).then(res => {
          values[i] = res
          count++
          // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
          if (count === list.length) resolve(values)
        }, err => {
          // 有一个被rejected时返回的MyPromise状态就变成rejected
          reject(err)
        })
      }
    })
  }
```
Promise的all方法提供了并行执行异步操作的能力，并且在所有异步操作执行完后才执行回调。看下面的例子
```js
  let Promise1 = new Promise(function(resolve, reject){})
  let Promise2 = new Promise(function(resolve, reject){})
  let Promise3 = new Promise(function(resolve, reject){})

  let p = Promise.all([Promise1, Promise2, Promise3])

  p.then(funciton(){
    // 三个都成功则成功  
  }, function(){
    // 只要有失败，则失败 
  })
```
有了all，你就可以并行执行多个异步操作，并且在一个回调中处理所有的返回数据，是不是很酷？有一个场景是很适合用这个的，一些游戏类的素材比较多的应用，打开网页时，预先加载需要用到的各种资源如图片、flash以及各种静态文件。所有的都加载完后，我们再进行页面的初始化。


#### race的用法：谁跑的快，以谁为准执行回调
##### 静态race方法
```js
  // 添加静态race方法
  static race (list) {
    return new MyPromise((resolve, reject) => {
      for (let p of list) {
        // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
        this.resolve(p).then(res => {
          resolve(res)
        }, err => {
          reject(err)
        })
      }
    })
  }

```
race的使用场景：比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作，代码如下
```js
   //请求某个图片资源
  function requestImg(){
    var p = new Promise((resolve, reject) => {
        var img = new Image();
        img.onload = function(){
            resolve(img);
        }
        img.src = '图片的路径';
    });
    return p;
  }
  //延时函数，用于给请求计时
  function timeout(){
      var p = new Promise((resolve, reject) => {
          setTimeout(() => {
              reject('图片请求超时');
          }, 5000);
      });
      return p;
  }
  Promise.race([requestImg(), timeout()]).then((data) =>{
      console.log(data);
  }).catch((err) => {
      console.log(err);
  });
```
requestImg函数会异步请求一张图片，我把地址写为"图片的路径"，所以肯定是无法成功请求到的。timeout函数是一个延时5秒的异步操作。我们把这两个返回Promise对象的函数放进race，于是他俩就会赛跑，如果5秒之内图片请求成功了，那么遍进入then方法，执行正常的流程。如果5秒钟图片还未成功返回，那么timeout就跑赢了，则进入catch，报出“图片请求超时”的信息
#### finally方法
> finally 方法用于指定不管 Promise 对象最后状态如何，都会执行的操作

```js
  finally (cb) {
    return this.then(
      value  => MyPromise.resolve(cb()).then(() => value),
      reason => MyPromise.resolve(cb()).then(() => { throw reason })
    );
  };
```



## MyPromise
```js
    // 判断变量否为function
    const isFunction = variable => typeof variable === 'function'
    // 定义Promise的三种状态常量
    const PENDING = 'PENDING'
    const FULFILLED = 'FULFILLED'
    const REJECTED = 'REJECTED'

    class MyPromise {
      constructor (handle) {
        if (!isFunction(handle)) {
          throw new Error('MyPromise must accept a function as a parameter')
        }
        // 添加状态
        this._status = PENDING
        // 添加状态
        this._value = undefined
        // 添加成功回调函数队列
        this._fulfilledQueues = []
        // 添加失败回调函数队列
        this._rejectedQueues = []
        // 执行handle
        try {
          handle(this._resolve.bind(this), this._reject.bind(this)) 
        } catch (err) {
          this._reject(err)
        }
      }
      // 添加resovle时执行的函数
      _resolve (val) {
        const run = () => {
          if (this._status !== PENDING) return
          // 依次执行成功队列中的函数，并清空队列
          const runFulfilled = (value) => {
            let cb;
            while (cb = this._fulfilledQueues.shift()) {
              cb(value)
            }
          }
          // 依次执行失败队列中的函数，并清空队列
          const runRejected = (error) => {
            let cb;
            while (cb = this._rejectedQueues.shift()) {
              cb(error)
            }
          }
          /* 如果resolve的参数为Promise对象，则必须等待该Promise对象状态改变后,
            当前Promsie的状态才会改变，且状态取决于参数Promsie对象的状态
          */
          if (val instanceof MyPromise) {
            val.then(value => {
              this._value = value
              this._status = FULFILLED
              runFulfilled(value)
            }, err => {
              this._value = err
              this._status = REJECTED
              runRejected(err)
            })
          } else {
            this._value = val
            this._status = FULFILLED
            runFulfilled(val)
          }
        }
        // 为了支持同步的Promise，这里采用异步调用
        setTimeout(run, 0)
      }
      // 添加reject时执行的函数
      _reject (err) { 
        if (this._status !== PENDING) return
        // 依次执行失败队列中的函数，并清空队列
        const run = () => {
          this._status = REJECTED
          this._value = err
          let cb;
          while (cb = this._rejectedQueues.shift()) {
            cb(err)
          }
        }
        // 为了支持同步的Promise，这里采用异步调用
        setTimeout(run, 0)
      }
      // 添加then方法
      then (onFulfilled, onRejected) {
        const { _value, _status } = this
        // 返回一个新的Promise对象
        return new MyPromise((onFulfilledNext, onRejectedNext) => {
          // 封装一个成功时执行的函数
          let fulfilled = value => {
            try {
              if (!isFunction(onFulfilled)) {
                onFulfilledNext(value)
              } else {
                let res =  onFulfilled(value);
                if (res instanceof MyPromise) {
                  // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                  res.then(onFulfilledNext, onRejectedNext)
                } else {
                  //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                  onFulfilledNext(res)
                }
              }
            } catch (err) {
              // 如果函数执行出错，新的Promise对象的状态为失败
              onRejectedNext(err)
            }
          }
          // 封装一个失败时执行的函数
          let rejected = error => {
            try {
              if (!isFunction(onRejected)) {
                onRejectedNext(error)
              } else {
                  let res = onRejected(error);
                  if (res instanceof MyPromise) {
                    // 如果当前回调函数返回MyPromise对象，必须等待其状态改变后在执行下一个回调
                    res.then(onFulfilledNext, onRejectedNext)
                  } else {
                    //否则会将返回结果直接作为参数，传入下一个then的回调函数，并立即执行下一个then的回调函数
                    onFulfilledNext(res)
                  }
              }
            } catch (err) {
              // 如果函数执行出错，新的Promise对象的状态为失败
              onRejectedNext(err)
            }
          }
          switch (_status) {
            // 当状态为pending时，将then方法回调函数加入执行队列等待执行
            case PENDING:
              this._fulfilledQueues.push(fulfilled)
              this._rejectedQueues.push(rejected)
              break
            // 当状态已经改变时，立即执行对应的回调函数
            case FULFILLED:
              fulfilled(_value)
              break
            case REJECTED:
              rejected(_value)
              break
          }
        })
      }
      // 添加catch方法
      catch (onRejected) {
        return this.then(undefined, onRejected)
      }
      // 添加静态resolve方法
      static resolve (value) {
        // 如果参数是MyPromise实例，直接返回这个实例
        if (value instanceof MyPromise) return value
        return new MyPromise(resolve => resolve(value))
      }
      // 添加静态reject方法
      static reject (value) {
        return new MyPromise((resolve ,reject) => reject(value))
      }
      // 添加静态all方法
      static all (list) {
        return new MyPromise((resolve, reject) => {
          /**
           * 返回值的集合
           */
          let values = []
          let count = 0
          for (let [i, p] of list.entries()) {
            // 数组参数如果不是MyPromise实例，先调用MyPromise.resolve
            this.resolve(p).then(res => {
              values[i] = res
              count++
              // 所有状态都变成fulfilled时返回的MyPromise状态就变成fulfilled
              if (count === list.length) resolve(values)
            }, err => {
              // 有一个被rejected时返回的MyPromise状态就变成rejected
              reject(err)
            })
          }
        })
      }
      // 添加静态race方法
      static race (list) {
        return new MyPromise((resolve, reject) => {
          for (let p of list) {
            // 只要有一个实例率先改变状态，新的MyPromise的状态就跟着改变
            this.resolve(p).then(res => {
              resolve(res)
            }, err => {
              reject(err)
            })
          }
        })
      }
      finally (cb) {
        return this.then(
          value  => MyPromise.resolve(cb()).then(() => value),
          reason => MyPromise.resolve(cb()).then(() => { throw reason })
        );
      }
    }
```

### es6 promise用法大全
Promise是一个**构造函数**，自己身上有**all、reject、resolve**这几个眼熟的方法，原型上有then、catch等同样很眼熟的方法。

new 一个：
```js
  let p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(() => {
        console.log('执行完成');
        resolve('我是成功！！');
    }, 2000);
  });
```
Promise的构造函数接收一个参数：函数，并且这个函数需要传入两个参数：
* resolve ：异步操作执行成功后的回调函数
* reject：异步操作执行失败后的回调函数

#### then 链式操作的用法
所以，从表面上看，Promise只是能够简化层层回调的写法，而实质上，Promise的精髓是“状态”，用维护状态、传递状态的方式来使得回调函数能够及时调用，它比传递callback函数要简单、灵活的多。所以使用Promise的正确场景是这样的：
```js
  p.then((data) => {
    console.log(data);
  })
  .then((data) => {
      console.log(data);
  })
  .then((data) => {
      console.log(data);
  });
```

#### reject的用法 :
把Promise的状态置为rejected，这样我们在then中就能捕捉到，然后执行“失败”情况的回调。看下面的代码

```js
  let p = new Promise((resolve, reject) => {
    //做一些异步操作
    setTimeout(function(){
      var num = Math.ceil(Math.random()*10); //生成1-10的随机数
      if(num<=5){
          resolve(num);
      }
      else{
          reject('数字太大了');
      }
    }, 2000);
  });
  p.then((data) => {
      console.log('resolved',data);
    },(err) => {
      console.log('rejected',err);
    }
  );
```



****
## 宏任务与微任务
```js
  setTimeout(()=>{console.log(111)},0)

  let promise = new Promise((resolve,reject)=>{
    console.log(222);
    resolve(3333)
  });

  let promise2 = new Promise((resolve,reject)=>{
    console.log(555);
    resolve(6666)
  });

  setTimeout(()=>{
    console.log(4444);
  },0)

  promise.then(res=>{
    console.log(res);
  });

  promise2.then(res=>{
    console.log(res);
  });
```
你说这会打印出个什么？ 按理论先进先出，222 555 111 4444 333 666 你看对不对。
事实证明：222 555 333 666 111 4444
这是为什么？ 首先注册的事件也有不同形态，宏任务与微任务。
* 常见的宏任务：**setTimeout、setInterval（定时器类）**
* 常见的微任务：**promise process.nextTick(一个node环境的方法)。**

这两个任务的执行规则是什么？首先在call stack中的内容执行完毕清空后，会在Event queue检查一下哪些是宏任务哪些是微任务，然后执行所有的微任务，然后执行一个宏任务，之后再次执行所有的微任务。也就是说在主线程任务执行完毕后会把任务队列中的微任务全部执行，然后再执行一个宏任务，这个宏任务执行完再次检查队列内部的微任务，有就全部执行没有就再执行一个宏任务。



## 总结
一般来说我们会碰到的回调嵌套都不会很多，一般就一到两级，但是某些情况下，回调嵌套很多时，代码就会非常繁琐，会给我们的编程带来很多的麻烦，这种情况俗称——回调地狱。

promise是用来解决一下问题：
* 回调地狱，代码难以维护， 常常第一个的函数的输出是第二个函数的输入这种现象
* promise可以支持多个并发的请求，获取并发请求中的数据
* 这个promise可以解决异步的问题，本身不能说promise是异步的
