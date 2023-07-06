/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-07-06 18:42:45
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-07-06 20:30:39
 */
// 在定义函数或类时，遇到类型不明确的可以使用泛型
function fn<K>(a: K): K {
  return a
}
let result = fn(10) // 不指定泛型，TS可以自动对类型进行推断
let result1 = fn<string>('hello') // 指定泛型

// 泛型可以指定多个
function fn1<T, K>(a: T, b: K): T{
  return a
}
let result3 = fn1<string, number>('hello', 22)

interface Inter {
  length: number
}
// T extends Inter 表示泛型T必须是一个Inter实现类（子类）
function fn3<T extends Inter>(a: T): number {
  return a.length
}

class TestClass<T> {
  name: T;
  constructor(name: T) {
    this.name = name
  }
}
const md = new TestClass<string>('悟空')