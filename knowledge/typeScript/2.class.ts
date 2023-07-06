/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-07-06 13:02:14
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-07-06 17:40:52
 */
class Person {

  // 定义实例属性--需要通过对象的实例来调用
  // name: string = 'lisi'
  // age: number = 12
  name: string
  age: number

  constructor(name: string, age: number) {
    console.log('创建实例时，construction被调用')
    this.name = name
  }

  // static 类属性（静态属性）--类调用
  static eat: string = 'hello'

  // readonly 只读属性
  readonly jump: string = 'world'
  static readonly work: string = '12'

  // 实例方法
  sayHello() {

  }
  // 类方法
  static sayWord() {

  }
}

let per = new Person('lisi', 212)

abstract class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }

  // 抽象方法
  abstract sayHi()
  // 类方法
  run() {}
}
class Dog extends Animal {
  age: number
  constructor(name: string, age: number) {
    super(name) // 调用父类的constructor，不写super会报错
    this.age = age
  }
  sayHi() {
    console.log('he')
  }
}

let dog = new Dog('lisi', 14)