<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-06-22 23:17:43
-->
<template>
  <div class="demo">
    <!-- <p>{{name}}</p> -->
    <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
// import {ref,toRef} from 'vue'
import {ref} from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * customRef: 返回一个ref对象，可以显示的控制依赖追踪和触发响应
   */
  setup() {
    let state = ref(19) // reactivve({value: 19})

    function myFn() {

      console.log(state)
      state.value = 20

    }
    // return {name, age, myFn}
    return {state, myFn}
  }
}
</script>

<style lang='scss' scoped>
</style>