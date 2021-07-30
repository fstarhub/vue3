<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-07-28 10:27:24
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-07-30 11:00:23
-->

## MVVM原理

### MVC介绍

 **MVC**中的**M**就是单纯的从网络获取回来的数据模型，**V**指的我们的视图界面，而**C**就是我们的ViewController 

在其中，ViewController负责View和Model之间调度，View发生交互事件会通过target-action或者delegate方式回调给ViewController，与此同时ViewController还要承担把Model通过KVO、Notification方式传来的数据传输给View用于展示的责任。**随着业务越来越复杂，视图交互越复杂，导致Controller越来越臃肿，负重前行。脏活累活都它干了，到头来还一点不讨好。福报修多了的结果就是，不行了就重构你，重构不了就换掉你**

![](https://upload-images.jianshu.io/upload_images/2667543-b7db698392aeca0e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)



### MVVM 介绍

>  MVVM（Model–View–Viewmodel）是一种软件架构模式。 
>
>  它本质上就是MVC 的改进版。MVVM 就是将其中的View 的状态和行为抽象化，让我们将视图 UI 和业务逻辑分开。 

 MVVM的核心是数据驱动即ViewModel，ViewModel是View和Model的关系映射。ViewModel类似中转站(Value Converter)，负责转换Model中的数据对象，使得数据变得更加易于管理和使用。MVVM本质就是基于操作数据来操作视图进而操作DOM，借助于MVVM无需直接操作DOM，开发者只需完成包含声明绑定的视图模板，编写ViewModel中有业务，使得View完全实现自动化。 

![](../../src/assets/mvvmDetatil.png)

Vue中的MVVM思想

ViewModel做了两件事情。
1.**数据绑定** 

把js里面的数据通过插值操作mustachae语法绑定到真实dom里面 而且是响应式的 一旦数据发生改变
自动监听到数据的改变，把最新的数据再重新绑定到view上面，view里面显示得永远是model里面最新的数据

2.**DOM监听**

当view上面有一些事件或者用户操作的时候，通过指令，把事件响应相关的东西，绑定到model里面，在model里面可以写一些js代码（比如回调methods里面定义的一些函数）

![](../../src/assets/MVVMmodel.png)

* View层
  ​视图层
  在我们开发中，通常就是DOM层
  主要的作用就是给用户展示各种信息

* Model层
  数据层
  数据可能是我们固定的死数据，更多的是来之我们的服务器，从网络上请求下来的数据

* ViewModel层
  视图模型层
  视图模型层是View和Model沟通的桥梁
  一方面它实现了Data Binding,也就是数据绑定，将Model的改变实时的反应到View中
  另一方面实现了DOM Listener, 也就是DOM监听，当DOM发生一些事件（点击，滚动，touch等）时，可以监听到，并在需要的情况下改变Data

### Vue的运行机制简述

![](https://user-gold-cdn.xitu.io/2019/5/13/16aae4f3b2aa9340?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

#### 初始化流程

- 创建Vue实例对象

- `init`过程会初始化生命周期，初始化事件中心，初始化渲染、执行`beforeCreate`周期函数、初始化 `data`、`props`、`computed`、`watcher`、执行`created`周期函数等。

- 初始化后，调用`$mount`方法对Vue实例进行挂载（挂载的核心过程包括**模板编译**、**渲染**以及**更新**三个过程）。

- 如果没有在Vue实例上定义`render`方法而是定义了`template`，那么需要经历编译阶段。需要先将`template`字符串编译成 `render function`，`template`字符串编译步骤如下 ： 

  - `parse`正则解析`template`字符串形成AST（抽象语法树，是源代码的抽象语法结构的树状表现形式）
  - `optimize`标记静态节点跳过diff算法（diff算法是逐层进行比对，只有同层级的节点进行比对，因此时间的复杂度只有O(n)。如果对于时间复杂度不是很清晰的，可以查看我写的文章[ziyi2/algorithms-javascript/渐进记号](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fziyi2%2Falgorithms-javascript%2Fblob%2Fmaster%2Fdoc%2Ffunction-growth%2Fasymptotic-symbol.md)）
  - `generate`将AST转化成`render function`字符串

- 编译成`render function` 后，调用`$mount`的`mountComponent`方法，先执行`beforeMount`钩子函数，然后核心是实例化一个渲染`Watcher`，在它的回调函数（初始化的时候执行，以及组件实例中监测到数据发生变化时执行）中调用`updateComponent`方法（此方法调用`render`方法生成虚拟Node，最终调用`update`方法更新DOM）。

- 调用`render`方法将`render function`渲染成虚拟的Node（真正的 DOM 元素是非常庞大的，因为浏览器的标准就把 DOM 设计的非常复杂。如果频繁的去做 DOM 更新，会产生一定的性能问题，而 Virtual DOM 就是用一个原生的 JavaScript 对象去描述一个 DOM 节点，所以它比创建一个 DOM 的代价要小很多，而且修改属性也很轻松，还可以做到跨平台兼容），`render`方法的第一个参数是`createElement`(或者说是`h`函数)，这个在官方文档也有说明。

- 生成虚拟DOM树后，需要将虚拟DOM树转化成真实的DOM节点，此时需要调用`update`方法，`update`方法又会调用`pacth`方法把虚拟DOM转换成真正的DOM节点。需要注意在图中忽略了新建真实DOM的情况（如果没有旧的虚拟Node，那么可以直接通过`createElm`创建真实DOM节点），这里重点分析在已有虚拟Node的情况下，会通过`sameVnode`判断当前需要更新的Node节点是否和旧的Node节点相同（例如我们设置的`key`属性发生了变化，那么节点显然不同），如果节点不同那么将旧节点采用新节点替换即可，如果相同且存在子节点，需要调用`patchVNode`方法执行diff算法更新DOM，从而提升DOM操作的性能

> 需要注意在初始化阶段，没有详细描述数据的响应式过程，这个在响应式流程里做说明。 

##### 响应式流程

- 在`init`的时候会利用`Object.defineProperty`方法（不兼容IE8）监听Vue实例的响应式数据的变化从而实现数据劫持能力（利用了JavaScript对象的访问器属性`get`和`set`，在未来的Vue3中会使用ES6的`Proxy`来优化响应式原理）。在初始化流程中的编译阶段，当`render function`被渲染的时候，会读取Vue实例中和视图相关的响应式数据，此时会触发`getter`函数进行**依赖收集**（将观察者`Watcher`对象存放到当前闭包的订阅者`Dep`的`subs`中），此时的数据劫持功能和观察者模式就实现了一个MVVM模式中的**Binder**，之后就是正常的渲染和更新流程。
- 当数据发生变化或者视图导致的数据发生了变化时，会触发数据劫持的`setter`函数，`setter`会通知初始化**依赖收集**中的`Dep`中的和视图相应的`Watcher`，告知需要重新渲染视图，`Wather`就会再次通过`update`方法来更新视图。

> 可以发现只要视图中添加监听事件，自动变更对应的数据变化时，就可以实现数据和视图的双向绑定了。

### 几种实现双向绑定的做法

目前几种主流的mvc(vm)框架都实现了单向数据绑定，而我所理解的双向数据绑定无非就是在单向绑定的基础上给可输入元素（input、textarea等）添加了change(input)事件，来动态修改model和 view，并没有多高深。所以无需太过介怀是实现的单向或双向绑定。

实现数据绑定的做法有大致如下几种：

> 发布者-订阅者模式（backbone.js）

> 脏值检查（angular.js）

> 数据劫持（vue.js

 **发布者-订阅者模式:** 一般通过sub, pub的方式实现数据和视图的绑定监听，更新数据方式通常做法是 `vm.set('property', value)`，这里有篇文章讲的比较详细，有兴趣可点[这里](http://www.html-js.com/article/Study-of-twoway-data-binding-JavaScript-talk-about-JavaScript-every-day) 

这种方式现在毕竟太low了，我们更希望通过 `vm.property = value `这种方式更新数据，同时自动更新视图，于是有了下面两种方式

**脏值检查:** angular.js 是通过脏值检测的方式比对数据是否有变更，来决定是否更新视图，最简单的方式就是通过 `setInterval()` 定时轮询检测数据变动，当然Google不会这么low，angular只有在指定的事件触发时进入脏值检测，大致如下：

- DOM事件，譬如用户输入文本，点击按钮等。( ng-click )
- XHR响应事件 ( $http )
- 浏览器Location变更事件 ( $location )
- Timer事件( $timeout , $interval )
- 执行 $digest() 或 $apply()

**数据劫持:** vue.js 则是采用数据劫持结合发布者-订阅者模式的方式，通过`Object.defineProperty()`来劫持各个属性的`setter`，`getter`，在数据变动时发布消息给订阅者，触发相应的监听回调。

