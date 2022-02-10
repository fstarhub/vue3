<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: 冯帅
 * @LastEditTime: 2021-06-22 23:17:43
-->
<template>
  <div class="demo">
    <P>{{msg}}</P>
    <button @click="option">option API</button>
    <ul>
      <li v-for="(stu, index) in state.stus" :key="stu.id" @click="remStu(index)">{{stu.name}} --- {{stu.age}}</li>
    </ul>
    <!-- <p>响应式对象的值是{{state1}}</p> -->
    <p>响应式对象的值是{{state2}}</p>
    <button @click="changeFn">修改响应式数据值</button>

    <!-- <p>{{state3.a}}</p>
    <p>{{state3.gf.b}}</p>
    <p>{{state3.gf.f.c}}</p>
    <p>{{state3.gf.f.s.d}}</p>
    <button @click="listen">监听属性</button> -->


    <p>{{state4.a}}</p>
    <p>{{state4.gf.b}}</p>
    <p>{{state4.gf.f.c}}</p>
    <p>{{state4.gf.f.s.d}}</p>
    <button @click="listenRef">监听属性</button>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {ref} from 'vue'
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
    由于在执行setup函数的时候，还没有执行created生命周期方法，所以在setup函数中，是无法使用data和methods
    由于我们不能再setup函数中使用data和methods，所以vue为了避免我们错误的使用，他直接将setup函数中的this修改成了undefined
    setup函数只能是同步的，不能是异步的
  */

  /**
   * 1.递归监听
   *  默认情况下，无论是通过ref还是reactive都是递归监听
   * 2.递归监听存在的问题
   *  如果数据量将达，非常消耗性能
   * 
   */
  methods: {
    option() {
      alert(this.msg)
    },
  },
  setup() {
    // ref注意点：ref函数只能监听简单类型的变化，不能监听复杂类型的变化（数组/对象）
    /**
     * 1.什么是reactive?
     *  reatctive是vue3中提供的实现响应数据的方法
     * 在vue2中响应式数据是通过的findProperty来实现的，二vue3中响应式数据是通过ES6的Proxy来实现的
     * 2.reactive注意点
     * reactive参数必须是对象（json/arr）
     *  如果给reactive传递了其他对象，默认情况下修改对象，界面不会自动更新，如果想更新，可以通过重新复制的方式
     * 
     */
    // 创建响应式数据，本质：就是传入的数据包装成一个Proxy对象
    // let state1 = reactive(123)
    // let state2 = reactive([1,4,8])
    let state2 = reactive(new Date())
    function changeFn() {
      // state1 = 666 // 由于在创建响应式数据的时候传递的不是一个对象，所以无法实现响应式
      // state2[0] = 66
      // state2.setDate(state2.getDate + 1) //直接修改以前的，界面不会更新
      // 重新复制
      const newTime = new Date().getDate() + 1
      state2 = newTime
      console.log(state2)
    }
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
    /**
     * console.log(this) // undefined
     * console.log(this.msg)
     * this.option()
     */
    // let state3 = reactive({
    //     a: 'a',
    //     gf: {
    //       b:'b',
    //       f: {
    //         c: 'c',
    //         s: {
    //           d: 'd'
    //         }
    //       }
    //     }
    //   })
    //   function listen() {
        // console.log(state3)
        // console.log(state3.gf)
        // console.log(state3.gf.f)
        // console.log(state3.gf.f.s)
    //     state3.a = '1'
    //     state3.gf.b = '2'
    //     state3.gf.f.c = '3'
    //     state3.gf.f.s.d = '4'
    //   }
    let state4 = ref({
      a: 'a',
      gf: {
        b:'b',
        f: {
          c: 'c',
          s: {
            d: 'd'
          }
        }
      }
    })
    function listenRef() {
      state4.value.a = '1'
      state4.value.gf.b = '2'
      state4.value.gf.f.c = '3'
      state4.value.gf.f.s.d = '4'
    }
    let {state, remStu} = useRemoveStudent()
    // return {state, remStu, changeFn,state2, state3,listen}
    return {state, remStu, changeFn,state2, state4,listenRef}

    
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