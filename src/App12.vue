<!--
 * @Description: 只读属性
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-03-15 20:55:16
-->
<template>
  <div class="demo">
    <p ref="box">{{state.name}}</p>
    <p ref="box">{{state.attr.age}}</p>
    <p ref="box">{{state.attr.height}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
/**
 * readonly
 */
// import {readonly} from 'vue'
import {isReadonly, shallowReadonly} from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * beforeCreate
   * setup
   * created
   */
  setup() {
    // readonly:用于创建一个只读的数据，并且是递归只读
    // let state = readonly({
    //   name: 'zhangsan',
    //   attr: {
    //     age: 19,
    //     height: 190
    //   }
    // })
    // shallowReadonly: 用于创建一个只读的数据，但是不是递归只读的
    let state = shallowReadonly({
      name: 'zhangsan',
      attr: {
        age: 19,
        height: 190
      }
    })
    /**
     * const和readonly区别：
     * const: 赋值保护，不能给变量重新赋值
     readonly: 属性保护，不能重新赋值
     * 
     */ 
    // const value = 23
    const value = {name: 'haha', age: 23}
    function myFn() {
       state.name = 'lisi'
       state.attr.age = 666
       state.attr.height = 199
       console.log(state, '-------state')
      //  console.log(readonly(state), '-------')
       console.log(isReadonly(state), '-------')

      //  value = 45
      value.name = 'heheh'
      value.age = 99
      console.log(value,'------value')
    }
    return {state, myFn, value}
  }
}
</script>

<style lang='scss' scoped>
</style>