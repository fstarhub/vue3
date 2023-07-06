/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2023-07-06 18:17:02
 * @LastEditors: fengshuai
 * @LastEditTime: 2023-07-06 18:36:59
 */
// ts可以在属性前添加属性的修饰符
/* 
  public修饰的属性可以在任意位置访问（修改）默认值
  private 私有属性 修饰的属性只能在类内部进行访问（修改）
    -通过在类中添加方法使得私有属性可以被外部访问
  protected 受保护的 可以在当前类、当前类的子类中访问（修改）
 */
class Humour {
  public _name: string
  private _age: number
  constructor(name: string, age: number) {
    this._name = name
    this._age = age
  }

  getName() {
    return this._name
  }
  setName(value: string) {
    this._name = value
  }
  getAge() {
    return this._age
  }
  setAge(value: number) {
    this._age = value
  }

  // ts中设置getter方法的方式
  get name() {
    return this._name
  }
  set name(value: string) {
    this._name = value
  }
  get age() {
    return this._age
  }
  set age(value: number) {
    this._age = value
  }
}

let boy = new Humour('lisi', 23)