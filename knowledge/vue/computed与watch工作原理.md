<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-08-04 16:23:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-08-04 16:23:48
-->

## computed和watch是如何工作的

### 一.computed和watch定义

#### 1.computed

 是计算属性，类似于过滤器,对绑定到视图的数据进行处理,并监听变化进而执行对应的方法  官网的例子 

```html
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```js
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

 结果 

```js
Original message: "Hello"
Computed reversed message: "olleH"
```

 **计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。值得注意的是“reversedMessage”不能在组件的props和data中定义，否则会报错。**

#### 2.watch

 是一个侦听的动作，用来观察和响应 Vue 实例上的数据变动。官网上的例子： 

```html
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">
  </p>
  <p>{{ answer }}</p>
</div>
```

```js
<!-- 因为 AJAX 库和通用工具的生态已经相当丰富，Vue 核心代码没有重复 -->
<!-- 提供这些功能以保持精简。这也可以让你自由选择自己更熟悉的工具。 -->
<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.13.1/lodash.min.js"></script>
<script>
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})
</script>
```

 在这个示例中，**使用 watch 选项允许我们执行异步操作 (访问一个 API)，限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的 **

### 二.computed和watch用法异同

下面来总结下这两者用法的异同：

**相同**： computed和watch都起到监听/依赖一个数据，并进行处理的作用

**异同**：它们其实都是vue对监听器的实现，只不过**computed主要用于对同步数据的处理，watch则主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑**。能用computed的时候优先用computed，避免了多个数据影响其中某个数据时多次调用watch的尴尬情况。

### 三.**watch的高级用法**

#### 1.handler方法和immediate属性

```html
<div id="demo">{{ fullName }}</div>
```

```js
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      console.log('第一次没有执行～')
      this.fullName = val + ' ' + this.lastName
    }
  }
})
```

 可以看到，初始化的时候watch是不会执行的。看上边的例子，只要当firstName的值改变的时候才会执行监听计算。但如果想在第一次它在被绑定的时候就执行怎么办？这时候就要修改一下我们的例子： 

```js
  watch: {
    firstName: {
      handler(val) {
        console.log('第一次执行了～')
        this.fullName = val + ' ' + this.lastName
      },
      // 代表在watch里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    }
  }
```

打开控制台可以看到打印出了‘第一次执行了～’。注意到handler了吗，我们给 firstName 绑定了一个handler方法，之前我们写的 watch 方法其实默认写的就是这个handler，Vue.js会去处理这个逻辑，最终编译出来其实就是这个handler。

而immediate:true代表如果在 wacth 里声明了 firstName 之后，就会立即先去执行里面的handler方法，如果为 false就跟我们以前的效果一样，不会在绑定的时候就执行。为什么加上handler方法和immediate:true就能在绑定的时候第一次就执行呢

#### 2.deep属性

 watch里还有一个deep属性，代表是否开启深度监听，默认为false，下面来看一个例子 

```html
<div id="app">
  <div>obj.a: {{obj.a}}</div>
  <input type="text" v-model="obj.a">
</div>
```

```js
var vm = new Vue({
  el: '#app',
  data: {
    obj: {
    	a: 1
    }
  },
  watch: {
    obj: {
      handler(val) {
       console.log('obj.a changed')
      },
      immediate: true
    }
  }
})
```

当我们在input输入框中输入数据改变obj.a的值时，我们发现在控制台没有打印出'obj.a changed'。受现代 JavaScript 的限制 (以及废弃 Object.observe)，Vue 不能检测到对象属性的添加或删除。由于 Vue 会在初始化实例时对属性执行 getter/setter 转化过程，所以属性必须在 data 对象上存在才能让 Vue 转换它，才能让它是响应式的。

默认情况下 在handler方法中 只监听obj这个属性它的引用的变化，我们只有给obj赋值的时候它才会监听到，比如我们在 mounted事件钩子函数中对obj进行重新赋值：

```js
mounted() {
  this.obj = {
    a: '123'
  }
}
```

这样handler就会执行了，且打印出了'obj.a changed'。

但是我们如果需要监听obj里的属性值呢？这时候，deep属性就派上用场了。我们只需要加上deep:true，就能深度监听obj里属性值。

```js
  watch: {
    obj: {
      handler(val) {
       console.log('obj.a changed')
      },
      immediate: true，
      deep: true
    }
  }
```

 deep属性的意思是深度遍历，会在对象一层层往下遍历，在每一层都加上监听器。在源码中的体现，定义在src/core/observer/traverse.js中： 

```js
/* @flow */

import { _Set as Set, isObject } from '../util/index'
import type { SimpleSet } from '../util/index'
import VNode from '../vdom/vnode'

const seenObjects = new Set()

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
export function traverse (val: any) {
  _traverse(val, seenObjects)
  seenObjects.clear()
}

function _traverse (val: any, seen: SimpleSet) {
  let i, keys
  const isA = Array.isArray(val)
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    const depId = val.__ob__.dep.id
    if (seen.has(depId)) {
      return
    }
    seen.add(depId)
  }
  if (isA) {
    i = val.length
    while (i--) _traverse(val[i], seen)
  } else {
    keys = Object.keys(val)
    i = keys.length
    while (i--) _traverse(val[keys[i]], seen)
  }
}
```

如果this.deep == true,即存在deep，则触发每个深层对象的依赖，追踪其变化。traverse方法递归每一个对象或者数组，触发它们的getter，使得对象或数组的每一个成员都被依赖收集，形成一个“深（deep）”依赖关系。这个函数实现还有一个小的优化，遍历过程中会把子响应式对象通过它们的 dep.id 记录到 seenObjects，避免以后重复访问。

但是使用deep属性会给每一层都加上监听器，性能开销可能就会非常大了。这样我们可以用字符串的形式来优化：

```js
  watch: {
    'obj.a': {
      handler(val) {
       console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  }
```

 直到遇到'obj.a'属性，才会给该属性设置监听函数，提高性能。 

### 四.computed的本质 —— computed watch

 我们知道new Vue()的时候会调用_init方法，该方法会初始化生命周期，初始化事件，初始化render，初始化data，computed，methods，wacther等等  今天主要来看以下初始化watch(initWatch)的实现，我加上了注释方便理解，定义在src/core/instance/state.js中： 

```js
// 用于传入Watcher实例的一个对象，即computed watcher
const computedWatcherOptions = { computed: true }

function initComputed (vm: Component, computed: Object) {
  // $flow-disable-line
  // 声明一个watchers且同时挂载到vm实例上
  const watchers = vm._computedWatchers = Object.create(null)
  // 在SSR模式下computed属性只能触发getter方法
  const isSSR = isServerRendering()

  // 遍历传入的computed方法
  for (const key in computed) {
    // 取出computed对象中的每个方法并赋值给userDef
    const userDef = computed[key]
    const getter = typeof userDef === 'function' ? userDef : userDef.get
    if (process.env.NODE_ENV !== 'production' && getter == null) {
      warn(
        `Getter is missing for computed property "${key}".`,
        vm
      )
    }

    // 如果不是SSR服务端渲染，则创建一个watcher实例
    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      )
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      // 如果computed中的key没有设置到vm中，通过defineComputed函数挂载上去 
      defineComputed(vm, key, userDef)
    } else if (process.env.NODE_ENV !== 'production') {
      // 如果data和props有和computed中的key重名的，会产生warning
      if (key in vm.$data) {
        warn(`The computed property "${key}" is already defined in data.`, vm)
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(`The computed property "${key}" is already defined as a prop.`, vm)
      }
    }
  }
}
```

通过源码我们可以发现它先声明了一个名为watchers的空对象，同时在vm上也挂载了这个空对象。之后遍历计算属性，并把每个属性的方法赋给userDef，如果userDef是function的话就赋给getter，接着判断是否是服务端渲染，如果不是的话就创建一个Watcher实例。不过需要注意的是，这里新建的实例中我们传入了第四个参数，也就是computedWatcherOptions。const computedWatcherOptions = { computed: true }，这个对象是实现computed watcher的关键。这时，Watcher中的逻辑就有变化了：

```js
    // 源码定义在src/core/observer/watcher.js中
    // options
    if (options) {
      this.deep = !!options.deep
      this.user = !!options.user
      this.computed = !!options.computed
      this.sync = !!options.sync
      this.before = options.before
    } else {
      this.deep = this.user = this.computed = this.sync = false
    }
    // 其他的代码......
    this.dirty = this.computed // for computed watchers
```

这里传入的options就是上边定义的computedWatcherOptions，当走initData方法的时候，options并不存在，但当走到initComputed的时候，computedWatcherOptions中的computed为true，注意上边的一行代码this.dirty = this.computed，将this.computed赋值给this.dirty。接着看下边的代码：

```js
  evaluate () {
    if (this.dirty) {
      this.value = this.get()
      this.dirty = false
    }
    return this.value
  }
```

只有this.dirty为true的时候才能通过 this.get() 求值，然后把 this.dirty 设置为 false。在求值过程中，会执行 value = this.getter.call(vm, vm)，这实际上就是执行了计算属性定义的 getter 函数，否则直接返回value。

当对计算属性依赖的数据做修改的时候，会触发 setter 过程，通知所有订阅它变化的 watcher 更新，执行 watcher.update() 方法：

```js
  /**
   * Subscriber interface.
   * Will be called when a dependency changes.
   */
  update () {
    /* istanbul ignore else */
    if (this.computed) {
      // A computed property watcher has two modes: lazy and activated.
      // It initializes as lazy by default, and only becomes activated when
      // it is depended on by at least one subscriber, which is typically
      // another computed property or a component's render function.
      if (this.dep.subs.length === 0) {
        // In lazy mode, we don't want to perform computations until necessary,
        // so we simply mark the watcher as dirty. The actual computation is
        // performed just-in-time in this.evaluate() when the computed property
        // is accessed.
        this.dirty = true
      } else {
        // In activated mode, we want to proactively perform the computation
        // but only notify our subscribers when the value has indeed changed.
        this.getAndInvoke(() => {
          this.dep.notify()
        })
      }
    } else if (this.sync) {
      this.run()
    } else {
      queueWatcher(this)
    }
  }
```

么对于计算属性这样的 computed watcher，它实际上是有 2 种模式，lazy 和 active。如果 this.dep.subs.length === 0 成立，则说明没有人去订阅这个 computed watcher 的变化，就把把 this.dirty = true，只有当下次再访问这个计算属性的时候才会重新求值。否则会执行getAndInvoke方法：

```js
  getAndInvoke (cb: Function) {
    const value = this.get()
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      const oldValue = this.value
      this.value = value
      this.dirty = false
      if (this.user) {
        try {
          cb.call(this.vm, value, oldValue)
        } catch (e) {
          handleError(e, this.vm, `callback for watcher "${this.expression}"`)
        }
      } else {
        cb.call(this.vm, value, oldValue)
      }
    }
  }
```

getAndInvoke 函数会重新计算，然后对比新旧值，在三种情况下(1.新旧值不想等的情况2.value是对象或数组的时候3.设置deep属性的时候)会执行回调函数，那么这里这个回调函数是 this.dep.notify()，在我们这个场景下就是触发了渲染 watcher 重新渲染。这就能解释官网中所说的**计算属性是基于它们的依赖进行缓存的**。

### 五.watch底层是如何工作的?

 上边提到了在new Vue()的时候调用了_init方法完成了初始化。在这当中有调用了initWatch方法，定义在src/core/instance/state.js中 

```js
function initWatch (vm: Component, watch: Object) {
  for (const key in watch) {
    const handler = watch[key]
    if (Array.isArray(handler)) {
      for (let i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i])
      }
    } else {
      createWatcher(vm, key, handler)
    }
  }
}
```

 遍历watch对象，并将每个watch[key]赋值给handler，如果是数组则遍历电影createWatcher方法，否则直接调用createWatcher方法。接下来看一下createWatcher方法的定义： 

```js
function createWatcher (
  vm: Component,
  expOrFn: string | Function,
  handler: any,
  options?: Object
) {
  if (isPlainObject(handler)) {
    options = handler
    handler = handler.handler
  }
  if (typeof handler === 'string') {
    handler = vm[handler]
  }
  return vm.$watch(expOrFn, handler, options)
}
```

 通过代码可以发现，createWatcher方法vm.?watch(keyOrFn, handler, options) 函数，调用了Vue.prototype.$watch方法，定义在src/core/instance/state.js中： 

```js
  Vue.prototype.$watch = function (
    expOrFn: string | Function,
    cb: any,
    options?: Object
  ): Function {
    const vm: Component = this
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {}
    options.user = true
    const watcher = new Watcher(vm, expOrFn, cb, options)
    if (options.immediate) {
      cb.call(vm, watcher.value)
    }
    return function unwatchFn () {
      watcher.teardown()
    }
  }
}
```

通过代码我们可以发现， watch 最终会调用Vue.prototype.watch方法，这个方法首先判断cb如果是一个对象，则调用createWatcher方法，这是因为watch 方法，这个方法首先判断 cb 如果是一个对象，则调用 createWatcher 方法，这是因为 watch方法，这个方法首先判断cb如果是一个对象，则调用createWatcher方法，这是因为watch 方法是用户可以直接调用的，它可以传递一个对象，也可以传递函数。接着执行 const watcher = new Watcher(vm, expOrFn, cb, options) 实例化了一个 watcher，这里需要注意一点这是一个 user watcher，因为 options.user = true。通过实例化 watcher 的方式，一旦我们 watch 的数据发送变化，它最终会执行 watcher 的 run 方法，执行回调函数 cb，并且如果我们设置了 immediate 为 true，则直接会执行回调函数 cb。即设置immediate属性为true的时候，第一次watch绑定的时候就可以执行。最后返回了一个 unwatchFn 方法，它会调用 teardown 方法去移除这个 watcher。

所以watcher是如何工作的？本质上也是基于 Watcher 实现的，它是一个 user watcher。前面提到了计算属性computed本质上是一个computed watcher。

## 总结

通过以上的分析，深入理解了计算属性computed和侦听属性watch是如何工作的。计算属性本质上是一个computed watch，侦听属性本质上是一个user watch。且它们其实都是vue对监听器的实现，只不过**computed主要用于对同步数据的处理，watch则主要用于观测某个值的变化去完成一段开销较大的复杂业务逻辑。**。能用computed的时候优先用computed，避免了多个数据影响其中某个数据时多次调用watch的尴尬情况。

