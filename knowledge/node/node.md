<!--
 * @Description: 
 * @Version: 3.0
 * @Autor: 冯帅
 * @Date: 2021-08-19 00:00:10
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-08-19 00:00:23
-->
# node

## node介绍

能够在服务端运行的JavaScript可开放源代码、跨平台JavaScript运行环境

node采用GoogleV8引擎运行js代码，使用事件驱动、非阻塞和异步/io模型等技术来提高性能，可优化引用的传输量和规模

node大部分基本模块都用JavaScript编写，在node出现前，js通常作为客户端程序设计语言使用，以js写出的程序常在用户的浏览器上运行

* node的服务是单线程的，但是在后台拥有一个i/0线程池

## node用途

* web服务API，比如REST
* 实时多人游戏
* 后端web服务，例如跨域、服务器端的请求
* 基于web的应用
* 多客户端通信，如即时通信

## ECMAScropt标准缺陷

* 没有模块系统
* 标准库较少
* 没有标准接口
* 缺乏管理系统

node模块化

* 在node中，一个js就是一个模块
* 每一个js文件中的js代码都是独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问
* 可以通过exports来向外暴露变量和方法，只需要将需要暴露给外部的变量或方法设置为exports的属性即可

暴露模块：

```js
// test.js
exports.x = 'hello world'
exports.fn = function() {}
```

引入模块：

```js
var md = requie('./test.js')
console.log(md.x)
```



