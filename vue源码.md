<!--
 * @Description: vue源码学习笔记
 * @Autor: fengshuai
 * @Date: 2022-06-27 15:27:00
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-06-27 15:49:18
-->
# vue源码

## 历史上数据变为视图的方法

1. 纯DOM法：非常笨拙，没有实用价值
2. 数组join法：曾几何时非常流行，是曾经前端的必会知识
3. ES6的反引导法：ES6中新增的`${a}`语法糖，很好用
4. 模板引擎：解决数据变为视图的最优雅的方法

## mustache模板引擎的使用

### mustache使用

1. 必须引入mustache库
2. 使用{{ }}
3. Mustache.render(template, data)

### mustache机理

模板字符串(翻译)=>(tokens+数据)(解析)=>dom字符串

> 1. 将模板字符串编译为tokens形式
> 2. 将tokens结合数据，编译为dom字符串



