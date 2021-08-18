<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-08-18 15:22:23
-->
<template>
  <div class="demo">
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
/**
   * 1.递归监听
   *  默认情况下，无论是通过ref还是reactive都是递归监听
   * 2.递归监听存在的问题
   *  如果数据量将达，非常消耗性能
   * 3.如何处罚非递归监听更新界面？
   *  如果是shallowRef类型数据，可以通过triggerRef来触发
   * 4.应用场景
   *  一般情况下，我们使用ref 和reactive即可，只有在需要监听的数据量比较大的时候，我们才需要使用shallowRef和shallowReactive
   */
// import {shallowReactive} from 'vue'
import {shallowRef, triggerRef} from 'vue' // triggerRef根据传入的数据主动更行数据
export default {
  name: 'App',
  components: {},
  data() {
    return {
      msg: 'helloworld'
    }
  },

  /**
   * 1.非递归监听
   * 如果是通过shallowReactive创建的数据，vue会监听第一层的变化包装成proxy，修改第一层变化的数据，里层也会监听，如果不修改第一层，里层就不会被监听到
   *  如果是通过shallowRef创建数据，那么vue监听的是.value的变化，并不是第一层的变化
   */
    /**
     * 本质归纳：
     * ref -> reactive
     * ref(10) -> reactive({value: 10})
     * shallowRef -> shallowReactive
     * shallwRef -> shallowReactive({value: 10})
     * 所以如果是通过shallowRef创建的数据，他监听的是.value的变化，因为底层value才是第一层
     */
  methods: {
  },
  setup() {
    // let state3 = shallowReactive({
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
    //     console.log(state3)
    //     console.log(state3.gf)
    //     console.log(state3.gf.f)
    //     console.log(state3.gf.f.s)
    //     state3.a = '1'
    //     state3.gf.b = '2'
    //     state3.gf.f.c = '3'
    //     state3.gf.f.s.d = '4'
    //   }
    let state4 = shallowRef({
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
      console.log(state4)
      console.log(state4.value.gf)
      console.log(state4.value.gf.f)
      console.log(state4.value.gf.f.s)

      // state4.value = { // shalowRef监听.value的变化，页面可以改变并渲染
      //   a: '1',
      //   gf: {
      //     b:'2',
      //     f: {
      //       c: '3',
      //       s: {
      //         d: '4'
      //       }
      //     }
      //   }
      // }


      // state4.value.a = '1' // 页面你不可渲染
      // state4.value.gf.b = '2'
      // state4.value.gf.f.c = '3'
      // state4.value.gf.f.s.d = '4'

        state4.value.gf.f.s.d = '4'
        // 注意点：vue3只提供了triggerRef方法，没有提供triggerReactive方法
        //  所以如果是reactive类型数据，那么无法主动触发界面更新的
        triggerRef(state4)

    }
    // return {state, remStu, changeFn,state2, state3,listen}
    return {state4,listenRef}
    // return {state3, listen}

    
  }
}
</script>

<style lang='scss' scoped>
</style>