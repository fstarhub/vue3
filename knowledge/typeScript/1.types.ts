/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-07-06 01:18:02
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-07-06 09:22:27
 */
// number
let a: number = 124
a = 79

// string
let b: string = 'hello'
b = 'word'

// boolean
let c: boolean = true

// 字面量
let d: 'hello' | 'world'
let n: 1 | 2 | 3
let type: string | number
type = 124
type = 'hello world'

// any
let e: any
e = 'hello'
e = 123

// unknown 未知类型 实际是一个安全的any unknown类型的变量不能直接赋值给其他变量
let u: unknown = 4
u = 'hello'
u = true

let s: string
// s = u  报错
if (typeof u === 'string') {
  s = u
}
// 类型断言,可以用来告诉解析器变量的实际类型
s = u as string
s = <string>u

// void
let f: void = undefined

// object
let g: object
g = {}
g = function() {}
// {}用来指定对象可以包含哪些属性
// 语法：{属性名：属性值，属性名：属性值}
// 在属性名后面加上？表示属性是可选的
let h: {name: string, age: number, like?: string}
h = {name: 'zhangsan', age: 34}
// [propName: string]: any表示任意类型的属性
let i: {name: string, [propName: string]: any}
i = {name: 'hello', age: 12,}
// j是一个函数
// 语法：（形参：类型，形参：类型）=>返回值
let j: (a: number, b: number) => number

// array
// 语法：类型[] 或 array<类型>
let k: string[] // 字符串数组
k = ['1', 'hello']
let l: number[] // 数值数组
l = [2, 4]

// tuple 元祖，是固定长度的数组,语法：[类型，类型]
let m: [string, string]
m = ['hello', 'world']

// enum 枚举
enum Gender {
  male = 0,
  Female = 1
}
// let o: {name: string, gender: 0 | 1}
// o = {name: 'zhansan', gender: 0}
let o: {name: string, gender: Gender}
o = {name: 'zhansan', gender: Gender.male}
console.log(o.gender === Gender.male)

// &表同时
let p: {name: string} & {age: number}
p = {name: 'zhangsan', age: 12}

// 类型的别名
type myType = string
let q: myType
type myType1 = 1 | 2 | 3 | 4 | 5
let t1: myType1
t1 = 5