<!--
 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-07-07 22:39:15
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-07-08 23:39:59
-->

## 事件机制/Event Loop
### 关于javascript
JavaScript 是一种**单线程**的编程语言，**只有一个调用栈，决定了它在同一时间只能做一件事情。**

在 JavaScript 的运行过程中，真正负责执行 JavaScript 代码的**始终只有一个线程**，通常被称为主线程，各种任务都会用**排队**的方式来同步执行。这种方式最常见的一个问题就是：如果你尝试执行一段非常耗时的同步代码，浏览器就没办法同时去渲染 GUI，导致界面失去响应，也就是被阻塞了

然而 JavaScript 却又是一个**非阻塞（Non-blocking）、异步（Asynchronous）、并发式（Concurrent）的编程语言**，这就得说说 JavaScript 的事件循环（Event Loop）机制了。

### 进程与线程
#### 1.概念
官方的说法是：进程是 CPU 资源分配的最小单位；线程是 CPU 调度的最小单位。这两句话并不好理解，我们先来看张图

![](https://pic3.zhimg.com/80/v2-c01cf4573013f4e60e8f21b771f1cd12_720w.jpg)

* 进程好比图中的工厂，有单独的专属自己的工厂资源。
* 线程好比图中的工人，多个工人在一个工厂中协作工作，工厂与工人是 1:n 的关系。也就是说**一个进程由一个或多个线程组成，线程是一个进程中代码的不同执行路线；**
* 工厂的空间是工人们共享的，这象征**一个进程的内存空间是共享的，每个线程都可用这些共享内存。**
* 多个工厂之间独立存在。

#### 2.多进程与多线程
* **多进程**：在同一个时间里，同一个计算机系统中如果允许两个或两个以上的进程处于运行状态。多进程带来的好处是明显的，比如你可以听歌的同时，打开编辑器敲代码，编辑器和听歌软件的进程之间丝毫不会相互干扰。

* **多线程**：程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，也就是说允许单个程序创建多个并行执行的线程来完成各自的任务。

以 Chrome 浏览器中为例，当你打开一个 Tab 页时，其实就是创建了一个进程，一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等。当你发起一个请求时，其实就是创建了一个线程，当请求结束后，该线程可能就会被销毁。

### 浏览器内核
简单来说浏览器内核是通过取得页面内容、整理信息（应用 CSS）、计算和组合最终输出可视化的图像结果，通常也被称为渲染引擎。

浏览器内核是多线程，在内核控制下各线程相互配合以保持同步，一个浏览器通常由以下常驻线程组成

* GUI 渲染线程
* JavaScript 引擎线程
* 定时触发器线程
* 事件触发线程
* 异步 http 请求线程

#### 1.GUI渲染线程
* 主要负责页面的渲染，解析 HTML、CSS，构建 DOM 树，布局和绘制等
* 当界面需要重绘或者由于某种操作引发回流时，将执行该线程
* 主要负责页面的渲染，解析 HTML、CSS，构建 DOM 树，布局和绘制等

#### 2.JS引擎线程
* 该线程当然是主要负责处理 JavaScript 脚本，执行代码。
* 也是主要负责执行准备好待执行的事件，即定时器计数结束，或者异步请求成功并正确返回时，将依次进入任务队列，等待 JS 引擎线程的执行。
* 当然，该线程与 GUI 渲染线程互斥，当 JS 引擎线程执行 JavaScript 脚本时间过长，将导致页面渲染的阻塞。

#### 3.定时器触发线程
* 负责执行异步定时器一类的函数的线程，如： setTimeout，setInterval。
* 主线程依次执行代码时，遇到定时器，会将定时器交给该线程处理，当计数完毕后，事件触发线程会将计数完毕后的事件加入到任务队列的尾部，等待 JS 引擎线程执行。

#### 4.事件触发线程
* 主要负责将准备好的事件交给 JS 引擎线程执行。

> 比如 setTimeout 定时器计数结束， ajax 等异步请求成功并触发回调函数，或者用户触发点击事件时，该线程会将整装待发的事件依次加入到任务队列的队尾，等待 JS 引擎线程的执行。

#### 5.异步 http 请求线程
* 负责执行异步请求一类的函数的线程，如： Promise，axios，ajax 等。
* 主线程依次执行代码时，遇到异步请求，会将函数交给该线程处理，当监听到状态码变更，如果有回调函数，事件触发线程会将回调函数加入到任务队列的尾部，等待JS引擎线程执行。

### 浏览器中的Event Loop
#### 1.Micro-Task 和 Macro-Task
事件循环中的异步队列有两种：**macro（宏任务）队列和 micro（微任务）队列。宏任务队列可以有多个，微任务队列只有一个**。

* 常见的 **macro-task（宏任务）** 比如：**setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等**。
* 常见的 **micro-task（微任务）** 比如: **process.nextTick、new Promise().then(回调)、MutationObserver(html5 新特性) 等**。

#### 2.执行栈过程解析
一个完整的执行站过程，可以概括为以下阶段：

![](https://pic1.zhimg.com/80/v2-539cfb365f2646bd724da392d779476c_720w.jpg)

* 一开始执行栈空,我们可以把**执行栈认为是一个存储函数调用的栈结构，遵循先进后出的原则**。micro 队列空，macro 队列里有且只有一个 script 脚本（整体代码）。
* 全局上下文（script 标签）被推入执行栈，同步代码执行。在执行的过程中，会判断是同步任务还是异步任务，通过对一些接口的调用，可以产生新的 macro-task 与 micro-task，它们会分别被推入各自的任务队列里。同步代码执行完了，script 脚本会被移出 macro 队列，这个过程本质上是队列的 macro-task 的执行和出队的过程
* 上一步我们出队的是一个 macro-task，这一步我们处理的是 micro-task。但需要注意的是：当 macro-task 出队时，任务是**一个一个**执行的；而 micro-task 出队时，任务是**一队一队**执行的。因此，我们处理 micro 队列这一步，会逐个执行队列中的任务并把它出队，直到队列被清空。
* 执行渲染操作，更新界面
* 检查是否存在 Web worker 任务，如果有，则对其进行处理
* 上述过程循环往复，直到两个队列都清空

**当同步任务执行完后,会查看是否有微任务队列。如果有，先执行微任务队列中的所有任务，如果没有，会读取宏任务队列中排在最前的任务，执行宏任务的过程中，遇到微任务，依次加入微任务队列。栈空后，再次读取微任务队列里的任务，依次类推**

#### 3.微任务 宏任务执行分析

![](https://pic3.zhimg.com/80/v2-1dd1305e20e2df08e186d6c2bfc8ab3e_720w.jpg)

这张图的意思就是：

1）、存在微任务的话，那么就执行所有的微任务

2）、微任务都执行完之后，执行下一个宏任务

3）、1， 2以此循环着

案例1：

```js
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
```

第一轮循环：

```text
1）、首先打印 1
2）、接下来是setTimeout是异步任务且是宏任务，加入宏任务暂且记为 setTimeout1
3）、接下来是 process 微任务 加入微任务队列 记为 process1
4）、接下来是 new Promise 里面直接 resolve(7) 所以打印 7 后面的then是微任务 记为 then1
5）、setTimeout 宏任务 记为 setTimeout2


第一轮循环打印出的是 1 7
当前宏任务队列：setTimeout1, setTimeout2
当前微任务队列：process1, then1,
```

第二轮循环：

```text
1）、执行所有微任务
2）、执行process1，打印出 6
3）、执行then1 打印出8
4）、微任务都执行结束了，开始执行第一个宏任务
5）、执行 setTimeout1 也就是 第 3 - 14 行
6）、首先打印出 2
7）、遇到 process 微任务 记为 process2
8）、new Promise中resolve 打印出 4
9）、then 微任务 记为 then2

第二轮循环结束，当前打印出来的是 1 7 6 8 2 4
当前宏任务队列：setTimeout2
当前微任务队列：process2, then2
```

第三轮循环：

```text
1）、执行所有的微任务
2）、执行 process2 打印出 3
3）、执行 then2 打印出 5
4）、执行第一个宏任务，也就是执行 setTimeout2 对应代码中的 25 - 36 行
5）、首先打印出 9
6）、process 微任务 记为 process3
7）、new Promise执行resolve 打印出 11
8）、then 微任务 记为 then3


第三轮循环结束，当前打印顺序为：1 7 6 8 2 4 3 5 9 11
当前宏任务队列为空
当前微任务队列：process3，then3
```

第四轮循环：

```text
1）、执行所有的微任务
2）、执行process3 打印出 10
3）、执行then3 打印出 12

代码执行结束：
最终打印顺序为：1 7 6 8 2 4 3 5 9 11 10 12
```

案例2：

```js
  Promise.resolve().then(()=>{
    console.log('Promise1')
    setTimeout(()=>{
      console.log('setTimeout2')
    },0)
  })
  setTimeout(()=>{
    console.log('setTimeout1')
    Promise.resolve().then(()=>{
      console.log('Promise2')
    })
  },0)
```
最后输出结果是 Promise1，setTimeout1，Promise2，setTimeout2

> 1. 先去查看是否有微任务队列，上题中存在(有且只有一个)，然后执行微任务队列中的所有任务输出 Promise1，同时会生成一个宏任务 setTimeout2
>
> 2. 然后去查看宏任务队列，宏任务 setTimeout1 在 setTimeout2 之前，先执行宏任务 setTimeout1，输出 setTimeout1
> 3. 在执行宏任务 setTimeout1 时会生成微任务 Promise2 ，放入微任务队列中，接着先去清空微任务队列中的所有任务，输出 Promise2
> 4. 清空完微任务队列中的所有任务后，就又会去宏任务队列取一个，这回执行的是 setTimeout2

### [Node中的 Event Loop](https://zhuanlan.zhihu.com/p/54882306)
#### 1.node简介
Node 中的 Event Loop 和浏览器中的是完全不相同的东西。Node.js 采用 V8 作为 js 的解析引擎，而 I/O 处理方面使用了自己设计的 libuv，libuv 是一个基于事件驱动的跨平台抽象层，封装了不同操作系统一些底层特性，对外提供统一的 API，事件循环机制也是它里面的实现

node运行机制：
* V8 引擎解析 JavaScript 脚本。
* 解析后的代码，调用 Node API。
* libuv 库负责 Node API 的执行。它将不同的任务分配给不同的线程，形成一个 Event Loop（事件循环），以异步的方式将任务的执行结果返回给 V8 引擎。
* V8 引擎再将结果返回给用户。

#### 2.六个阶段
其中 libuv 引擎中的事件循环分为 6 个阶段，它们会按照顺序反复运行。每当进入某一个阶段的时候，都会从对应的回调队列中取出函数去执行。当队列为空或者执行的回调函数数量到达系统设定的阈值，就会进入下一阶段。

![](https://pic4.zhimg.com/80/v2-de1858abd236bdc70904525c3c5b05d7_720w.jpg)

从上图中，大致看出 node 中的事件循环的顺序：

外部输入数据–>轮询阶段(poll)–>检查阶段(check)–>关闭事件回调阶段(close callback)–>定时器检测阶段(timer)–>I/O 事件回调阶段(I/O callbacks)–>闲置阶段(idle, prepare)–>轮询阶段（按照该顺序反复运行）···

* timers 阶段：这个阶段执行 timer（setTimeout、setInterval）的回调
* I/O callbacks 阶段：处理一些上一轮循环中的少数未执行的 I/O 回调
* idle, prepare 阶段：仅 node 内部使用
* poll 阶段：获取新的 I/O 事件, 适当的条件下 node 将阻塞在这里
* check 阶段：执行 setImmediate() 的回调
* close callbacks 阶段：执行 socket 的 close 事件回调


## 总结
### 1.js的异步
javascript是一门单线程语言，不管是什么新框架新语法糖实现的所谓异步，其实都是用同步的方法去模拟的，牢牢把握住单线程这点非常重要。

### 2.事件循环Event Loop
事件循环是js实现异步的一种方法，也是js的执行机制
### 3.javascript的执行和运行
执行和运行有很大的区别，javascript在不同的环境下，比如node，浏览器，Ringo等等，执行方式是不同的。而运行大多指javascript解析引擎，是统一的。

### 4.setImmediate
微任务和宏任务还有很多种类，比如setImmediate等等

### 最后
* javascript是一门单线程语言
* Event Loop是javascript的执行机制

