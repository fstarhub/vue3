<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-08-11 10:35:38
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-08-11 10:41:04
-->

## for of / for in

列1：

```js
const obj = {
    a: 1,
    b: 2,
    c: 3
}
for (let i in obj) {
    console.log(i)
    // a
    // b
    // c
}
for (let i of obj) {
    console.log(i)
    // Uncaught TypeError: obj is not iterable 报错了
}
```

 以上代码通过 for in 和 for of 对一个obj对象进行遍历,for in 正常的获取了对象的 key值,分别打印 a、b、c,而 for of却报错了

列2：

 以上是遍历对象,下面再看一个遍历数组的例子 

```js
const arr = ['a', 'b', 'c']
// for in 循环
for (let i in arr) {
    console.log(i)
    // 0
    // 1
    // 2
}

// for of
for (let i of arr) {
    console.log(i)
    // a
    // b
    // c
}
```

 以上代码是对一个数组进行遍历, for in 返回的值为 0、1、2,这不是数组的下标吗? 而 for of 返回的是 a、b、c,这一次没有报错,为什么呢 

列3：

```js
const arr = ['a', 'b']
    // 手动给 arr数组添加一个属性
arr.name = 'qiqingfu'

// for in 循环可以遍历出 name 这个键名
for (let i in arr) {
    console.log(i)
    // a
    // b
    // name
}
```

### **for in 的特点**

结合上面的两个例子,分析得出:

- for ... in 循环返回的值都是数据结构的键值名。
- 遍历对象返回的对象的key值,遍历数组返回的数组的下标(key)。
- for ... in 循环不仅可以遍历数字键名,还会遍历原型上的值和手动添加的其他键。如——例3
- 特别情况下, for ... in 循环会以看起来任意的顺序遍历键名

 （为什么说看起来，其实也是有规律的，这个就要扯到 **常规属性和 排序属性**，想深入学习的可以看**[读李老课程引发的思考之JS设计思想篇](https://link.zhihu.com/?target=https%3A//mp.weixin.qq.com/s%3F__biz%3DMzU5NDM5MDg1Mw%3D%3D%26mid%3D2247487517%26idx%3D2%26sn%3Df5fd6cef41b856ea4f4aca2de915760c%26chksm%3Dfe00aa37c97723217acee08b2e20dea2b53ed44b6dc8910aec57b4e9c1c71294847ee681fa1a%26token%3D828996357%26lang%3Dzh_CN%23rd)** )

**1.什么是对象中的 常规属性和 排序属性**

```js
function Foo() {
  this[100] = 'test-100'
  this[1] = 'test-1'
  this["B"] = 'bar-B'
  this[50] = 'test-50'
  this[9] = 'test-9'
  this[8] = 'test-8'
  this[3] = 'test-3'
  this[5] = 'test-5'
  this["A"] = 'bar-A'
  this["C"] = 'bar-C'
}
var bar = new Foo()
for(key in bar){
  console.log(`index:${key} value:${bar[key]}`)
}
```

在上⾯这段代码中，我们利⽤构造函数Foo创建了⼀个bar对象，在构造函数中，我们给bar对象设置了很多 属性，包括了数字属性和字符串属性，然后我们枚举出来了bar对象中所有的属性，并将其⼀⼀打印出来， 下⾯就是执⾏这段代码所打印出来的结果

```js
index:1 value:test-1
index:3 value:test-3
index:5 value:test-5
index:8 value:test-8
index:9 value:test-9
index:50 value:test-50
index:100 value:test-100
index:B value:bar-B
index:A value:bar-A
index:C value:bar-C
```

观察这段打印出来的数据，我们发现打印出来的属性顺序并不是我们设置的顺序，我们设置属性的时候是乱序设置的，⽐如开始先设置100，然后有设置了1，但是输出的内容却⾮常规律，总的来说体现在以下两点：

设置的数字属性被最先打印出来了，并且按照数字⼤⼩的顺序打印的；

设置的字符串属性依然是按照之前的设置顺序打印的，⽐如我们是按照B、A、C的顺序设置的，打印出来，依然是这个顺序。

之所以出现这样的结果，是因为在ECMAScript规范中定义了 「**数字属性应该按照索引值大小升序排列，字符串属性根据创建时的顺序升序排列。**」在这⾥我们把对象中的数字属性称为 「**排序属性**」，在V8中被称为 elements，字符串属性就被称为 「**常规属性**」， 在V8中被称为 properties。在V8内部，为了有效地提升存储和访问这两种属性的性能，分别使⽤了两个线性数据结构来分别保存排序属性和常规属性，具体结构如下图所⽰：

![](https://pic1.zhimg.com/80/v2-e0f8f4a6b7115c7ea0d23a373645cbd4_720w.jpg)

在elements对象中，会按照顺序存放排序属性，properties属性则指向了properties对 象，在properties对象中，会按照创建时的顺序保存了常规属性。

**总结一句: for in 循环特别适合遍历对象。**

### for of 的特点

**for of 循环用来获取一对键值对中的值,而 for in 获取的是键名**

一个数据结构只要部署了 **Symbol.iterator** 属性, 就被视为具有 **iterator接口, 就可以使用 for of循环**。

例1这个对象,没有 Symbol.iterator这个属性,所以使用 for of会报 obj is not iterable

for of 不同与 forEach, 它可以与 break、continue和return 配合使用,也就是说 for of 循环可以随时退出循环。

提供了遍历所有数据结构的统一接口

**哪些数据结构部署了 Symbol.iteratoer属性了呢?**

只要有 iterator 接口的数据结构,都可以使用 for of循环。

- 数组 Array
- Map
- Set
- String
- arguments对象
- Nodelist对象, 就是获取的dom列表集合

-以上这些都可以直接使用 for of 循环。 凡是部署了 iterator 接口的数据结构也都可以使用数组的扩展运算符(...)、和解构赋值等操作

**我也想让对象可以使用 for of循环怎么办?使用 Object.keys() 获取对象的 key值集合后,再使用 for of**

以例1为例

```text
 const obj = {
        a: 1,
        b: 2,
        c: 3
    }

    for (let i of Object.keys(obj)) {
        console.log(i)
        // 1
        // 2
        // 3
    }
```

也可以给一个对象部署 Symbol.iterator属性。