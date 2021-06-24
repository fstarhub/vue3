<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-06-22 23:17:43
-->
<template>
  <div class="demo">
    <!-- <p>{{state}}</p> -->
    <p>{{state}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
import {reactive, markRaw} from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * markRaw: 锁定数据无法被追踪
   */
  setup() {
    let obj = {name: 'zhangshan', age: 18}
    obj = markRaw(obj) //数据无法被追踪
    let state = reactive(obj)

    function myFn() {
      state.name = 'fengshuai'

    }
    return {state, myFn}
  }
}
</script>

<style lang='scss' scoped>
</style>