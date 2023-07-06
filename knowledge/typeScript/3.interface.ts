/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-07-06 17:36:43
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-07-06 18:13:21
 */

type testType = {
  name: string,
  age: number
}
let ob: testType
// 接口用来定义一个类结构（包含哪些属性和方法）
// 同时接口也可以当成类型声明去使用
interface myInter {
  name: string
  age: number
}
interface myInter {
  gender: boolean
}

// 接口中的所有的属性都不能有实际的值
// 接口定义类的结构时，不考虑实际值
// 接口中的所有方法都死抽象方法

interface myNewInter {
  name: string
  sayIt()
  sayOk(): void
}

// 实现接口就是使类满足接口的要求
class myClass implements myNewInter {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayIt() {
    console.log('123')
  }
  sayOk(): void {
    
  }
}





