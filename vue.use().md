# [vue插件的使用](https://www.jianshu.com/p/8440ccf32672)

##### Vue.use()是用来使用插件的

##### 插件的作用：插件通常用来为Vue添加全局功能，插件的功能没有严格的限制，一般有以下几种

1. 添加`全局方法`或`property`,如：[vue-custom-element](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fkarol-f%2Fvue-custom-element) 

2. 添加全局资源：`指令、过滤器、过度等`，如：[vue-touch](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-touch) 

3. 通过全局混入来添加一些组件选项，如： [vue-router](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-router) 

4. 添加Vue实例方法，通过把它们添加到`Vue.prototype`上实现

5. 一个库，提供自己的API,同时提供上边的一种或几种功能，如： [vue-router](https://links.jianshu.com/go?to=https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-router)

##### 通过全局方法 Vue.use()使用插件，它需要你在调用new Vue()启用应用之前完成

```vue
// 调用 myPlugin.install(Vue)
Vue.use(myPlugin)

new Vue({
  // ...组件选项
})
```

##### 也可以传入一个可选的选项对象

```vue
Vue.use(myPlugin,{someOptions:true})
```

##### Vue.use会自动阻止多次注册相同的插件，届时即使多次调用也只会注册一次该插件

##### Vue.js 官方提供的一些插件，如：`vue-router`，在检测到 Vue是可访问的全局变量时，会自动调用Vue.use(),然而在像 CommonJS这样的模块环境中，你应该始终显式的调用Vue.use()

```vue
// 用 Browserify 或 webpack 提供的 CommonJS 模块环境时
const Vue = require('vue')
const VueRouter = require('vue-router')

//别忘了调用此方法
Vue.use(VueRouter )
```

##### 开发插件

- Vue.js的插件，应该暴露一个 `install`方法，这个方法的第一个参数是`Vue构造器`,第二个参数是一个可选的选项对象

```vue
MyPlugin.install = function (Vue, options) {
  // 1. 添加全局方法或 property
  Vue.myGlobalMethod = function () {
    // 逻辑...
  }

  // 2. 添加全局资源
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // 逻辑...
    }
    ...
  })

  // 3. 注入组件选项
  Vue.mixin({
    created: function () {
      // 逻辑...
    }
    ...
  })

  // 4. 添加实例方法
  Vue.prototype.$myMethod = function (methodOptions) {
    // 逻辑...
  }
}
```

##### Vue.use用法

- 安装Vue.js插件，如果插件是一个 `对象`,必须提供 `install`方法，如果插件是一个函数，它会被作为`install`方法，`install`方法调用时，会将Vue作为参数传入
- Vue.use()需要在 调用 new Vue()之前被调用

##### 所以，Vue.use的参数必须是一个`Object对象`或者`function函数`,如果是对象的话，必须要提供`install`方法，之后会将Vue作为参数传入

##### 也就是说：

- Vue.use的参数为函数时，这个函数的参数是 Vue对象
- Vue.use的参数为对象时，install方法的参数是Vue对象

##### Vue.use的源码

```vue
import { toArray } from '../util/index'
// Vue.use 源码
export function initUse (Vue: GlobalAPI) {
    // 首先先判断插件plugin是否是对象或者函数：
    Vue.use = function (plugin: Function | Object) {
        const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
        // 判断vue是否已经注册过这个插件,如果已经注册过，跳出方法
        if (installedPlugins.indexOf(plugin) > -1) {
            return this
        }
        
        // 取vue.use参数,toArray() 方法代码在下一个代码块
        const args = toArray(arguments, 1)
        args.unshift(this)
        // 判断插件是否有install方法，如果有就执行install()方法。没有就直接把plugin当Install执行。
        if (typeof plugin.install === 'function') {
            plugin.install.apply(plugin, args)
        } else if (typeof plugin === 'function') {
            plugin.apply(null, args)
        }
        installedPlugins.push(plugin)
        return this
    }
}
```

```vue
// toArray 方法源码
export function toArray (list: any, start?: number): Array<any> {
    start = start || 0
    let i = list.length - start
    const ret: Array<any> = new Array(i)
    while (i--) {
        ret[i] = list[i + start]
    }
    return ret
}
```

##### 总结 Vue.use()源码

1. 首先判断插件 plugin 是否是对象或者函数 代码

```js
`plugin: Function | Object`
```

2. 判断Vue是否已注册过这个插件，如果注册过就跳出方法,代码：

```js
 const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
        // 判断vue是否已经注册过这个插件,如果已经注册过，跳出方法
      if (installedPlugins.indexOf(plugin) > -1) {
          return this
      }
```

3.  处理Vue.use的入参，将第一个参数之后的参数归集,并在首部塞入this上下文，代码 

```js
const args = toArray(arguments, 1)
args.unshift(this)
```

4. 断插件是否有install方法，如果有就执行install()方法。没有就直接把plugin当Install执行。代码：

```js
 if (typeof plugin.install === 'function') {
     plugin.install.apply(plugin, args)
 } else if (typeof plugin === 'function') {
     plugin.apply(null, args)
 }
```

5.  缓存插件,代码 

```js
installedPlugins.push(plugin)
```

## 案例-选项字典查询

```js
// dict.js
import Vue from 'vue'
import DictApi from '@/api/dictApi'

class Dict {
  constructor(dict) {
    this.dict = dict
  }

  async init(names) {
    const ps = []
    names.forEach(name => {
      Vue.set(this.dict, name, [])
      ps.push(
        DictApi.getOptions({ typeId: name }).then(res => {
          // console.error(res);
          this.dict[name] = Object.freeze(res.data)
        })
      )
    })

    await Promise.all(ps)
  }
}

const install = function(Vue) {
  Vue.mixin({
    data() {
      if (this.$options.dicts instanceof Array && this.$options.dicts.length > 0) {
        // console.log(this.$options.dicts, 'dicts')
        return { dict: {} }
      } else {
        return {}
      }
    },
    created() {
      if (this.$options.dicts instanceof Array && this.$options.dicts.length > 0) {
        new Dict(this.dict).init(this.$options.dicts)
      }
    }
  })
}

export default {
  install
}
```

```js
// request.js
import http from '../utils/request'
export default class DictApi {
  static getOptions(param) {
    return http({
      url: '/api/users/getOptions',
      method: 'post',
      data: param
    })
  }
}
```

```js
// main.js
import Dict from '@utils/dict'
Vue.use(Dict)
new Vue({
    ...
})
```

