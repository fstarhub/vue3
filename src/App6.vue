<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-03-15 20:46:35
-->
<template>
  <div class="demo">
    <!-- <p>{{state}}</p> -->
    <p>{{state1}}</p>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>
// import {reactive, toRaw} from 'vue'
import {toRaw, ref} from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * toRow: 获取ref或者reactive的原始数据参数的
   */
  setup() {
    let obj = {name: 'zhangshan', age: 18}
    /**
     * ref/reactive数据类型特点；
     * 每次修改都会被追踪，都会更新UI界面，但是这样是非常消耗新能的，
     * 所以如果我们有一些操作不需要追踪，不需要更新UI界面，那么这个时候我们既可以通过toRaw方法拿到他的原始数据，
     * 对原始数据进行修改，这样就不会被追踪，这样就不会更新界面了，这样新能更好了
     */
    // let state = reactive(obj)
    // let obj0 = toRaw(state)

    /**
     * ref本质：
     * ref(obj) -> reactive({value: obj})
     * 
     */
    let state1 = ref(obj)
    /**
     * 注意点：如果想通过toRaw拿到ref类型的原始数据（创建是传入的那个数据），
     * 那么就不需明确的告诉toRaw方法，要获取的是.value的值
     * 因为经过vue处理后，.value中保存的才是当初创建时传入的那个原始数据
     */
    // let obj1 = toRaw(state1)
    let obj1 = toRaw(state1.value)

    // console.log(obj === state) // false
    // console.log(obj === obj0) // true
    // console.log(obj)

    console.log(state1)
    console.log(obj1)
    /**
     * state和obj关系：引用关系，state本职质是一个Proxy对象，在这个Proxy对象中引用了obj
     */
    function myFn() {
      // obj.name = 'lisi'
      // console.log(obj)
      // console.log(state)
      // state.name = 'wangwu'
      // console.log(state)
      // console.log(obj)

    }
    // return {state, myFn}
    return {state1, myFn}
  }
}
</script>

<style lang='scss' scoped>
</style>