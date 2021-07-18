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

#### 2. Promise状态
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