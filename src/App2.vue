<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-06-22 08:50:38
-->
<template>
  <div class="demo">
    <P>{{msg}}</P>
    <button @click="option">option API</button>
    <ul>
      <li v-for="(stu, index) in state.stus" :key="stu.id" @click="remStu(index)">{{stu.name}} --- {{stu.age}}</li>
    </ul>
  </div>
</template>

<script>
import {reactive} from 'vue'
export default {
  name: 'App',
  components: {},
  data() {
    return {
      msg: 'helloworld'
    }
  },
  /*
  1.Composition API 和 Option API可混合使用
  2.Composition API本质（组合API/注入API）
  3.setup 时机
    beforCreate: 组件刚刚被创建出来，组件的data和methods还没初始化好
    setup:
    Created: 组件刚刚被创建出来,组件的data和methods已经初始化好
  4.setup 注意点
    由于
  */
  methods: {
    option() {
      alert(this.msg)
    },
  },
  setup() {
    // ref注意点：ref函数只能监听简单类型的变化，不能监听复杂类型的变化（数组/对象）
    /*
    let state = reactive({
      stus: [
        {id: 1, name: 'zhangsan', age: 10},
        {id: 2, name: 'lisi', age: 20},
        {id: 3, name: 'wangwu', age: 30},
      ]
    })
    function remStu(index) {
      state.stus = state.stus.filter((item, order) => index !== order)
    }*/
    let {state, remStu} = useRemoveStudent()
    return {state, remStu}
  }
}
function useRemoveStudent() {
  let state = reactive({
    stus: [
      {id: 1, name: 'zhangsan', age: 10},
      {id: 2, name: 'lisi', age: 20},
      {id: 3, name: 'wangwu', age: 30},
    ]
  })
  function remStu(index) {
    state.stus = state.stus.filter((item, order) => index !== order)
  }
  return {state, remStu}
}
</script>

<style lang='scss' scoped>
</style>