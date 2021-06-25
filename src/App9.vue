<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-06-22 23:17:43
-->
<template>
  <div class="demo">
    <p>{{name}}</p>
    <p>{{age}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
// import {ref,toRef} from 'vue'
import {toRefs} from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * toRefs：修改传入对象中的多个属性变为响应式属性
   */
  setup() {
    let obj = {name: 'zhangshan', age: 18}
    // let name = toRef(obj, 'name')
    // let age = toRef(obj, 'age')
    let state = toRefs(obj)

    function myFn() {
      // name.value = 'fengshuai'
      // age.value = 666
      // console.log(obj)
      // console.log(name)
      // console.log(age)

      console.log(state)
      state.name.value = 'lisi'
      state.age.value = 666
      console.log(state.name.value)
      console.log(state.age.value)

    }
    // return {name, age, myFn}
    return {state, myFn}
  }
}
</script>

<style lang='scss' scoped>
</style>