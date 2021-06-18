<!--
 * @Description: vue3笔记
 * @Autor: fengshuai
 * @Date: 2021-06-18 10:20:05
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-06-18 12:54:03
-->
# vue3.0特点
1. vue3.0六大亮点   
  > * Performance: 性能比vue2.x快1.2~2倍   
  > * Tree Shaking Support: 按需编译，体积比vue2.x更小   
  > * Composition API: 组合API（类似React Hooks）   
  > * Better TypeScript Support: 更好的Ts支持   
  > * Custom Renderer API: 暴露了自定义渲染API   
  > * Fragment Teleport(Protal), Sespense: 更先进的组件
  ***
  ---
 
2. vue3.0是如何变快的？
* [diff方法优化](https://vue-next-template-explorer.netlify.app/)  
  > vue2中的虚拟dom是进行全量的对比   
  > vue3新增了静态标记（PatchFlag）,在与上次虚拟节点进行对比的时候，只对比带有Patch Flag的节点,并且可以通过flag的信息得知当前节点要对比的具体内容
- hoistTatic静态提升
  > vue2中无论元素是否参与更新，每次都会重新创建   
  > vue3中对于不参与更新的元素，只会被创建一次，之后会在每次渲染时后被不停的复用   
  ```
    <div>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>Hello World!</p>
      <p>{{msg}}</p>
    </div>
  ```  
  静态提升前
  ```
    export function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (_openBlock(), _createBlock("div", null, [
        _createVNode("p", null, "Hello World!"),
        _createVNode("p", null, "Hello World!"),
        _createVNode("p", null, "Hello World!"),
        _createVNode("p", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
      ]))
    }
  ```
  静态提升后
  ```
    const _hoisted_1 = /*#__PURE__*/_createVNode("p", null, "Hello World!", -1 /* HOISTED */)
    const _hoisted_2 = /*#__PURE__*/_createVNode("p", null, "Hello World!", -1 /* HOISTED */)
    const _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "Hello World!", -1 /* HOISTED */)

    export function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (_openBlock(), _createBlock("div", null, [
        _hoisted_1,
        _hoisted_2,
        _hoisted_3,
        _createVNode("p", null, _toDisplayString(_ctx.msg), 1 /* TEXT */)
      ]))
    }
  ```
+ cacheHandlers 事件侦听器缓存
  > 默认情况下onClick会被视为动态绑定，所以每次都会去追踪它的变化，但是因为是同一个函数，所以没有追踪变化，直接缓存起来复用即可    
    
  ```
    <div>
      <button @click="onClick"></button>
    </div>
  ```
  开启事件监听缓存前
    ```
    export function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (_openBlock(), _createBlock("div", null, [
        _createVNode("button", { onClick: _ctx.onClick }, null, 8 /* PROPS */, ["onClick"])
      ]))
    }
  ```
  开启事件监听缓存后
    ```
    export function render(_ctx, _cache, $props, $setup, $data, $options) {
      return (_openBlock(), _createBlock("div", null, [
        _createVNode("button", {
          onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.onClick && _ctx.onClick(...args)))
        })
      ]))
    }
  ```
  \* 注意点： 开启事件监听缓存后，没有了静态标记，在vue3中diff算法中，只有有静态标记的才会进行比较，才会进行追踪


* ssr渲染
  > 当有大量静态内容的时候，这些内容会被当做纯字符串推进一个buffer里面，即使存在动态的绑定，会通过模板插值嵌入进去，这样会比通过虚拟dom来渲染的快上很多很多   
  > 当静态内容大到一定量级时候，会用_createStaticVNode方法在客户端去生成一个static node,这些静态node，会被直接innerHtml，就不需要创建对象，然后根据对象渲染   


# vue3-快速上手
1. vue3创建的三种方式
  * Vue-Cli
  - Webpack
  + Vite   
2. 什么是Vite？  
  > Vite是vue作者开发的一款意图取代webpack的工具，其实原理是利用ES6的import会发送请求去加载文件的特性，拦截这些请求，做一些预编译，省去webpack冗长的打包时间

  安装Vite   
  `npm install -g create-vite-app`

  利用Vite创建Vue3项目   
  `create-vite-app projectName`

  安装依赖运行项目   
  `cd projectName`   
  `npm install`   
  `npm run dev`

  3. vue3.0兼容vue2.x
  
