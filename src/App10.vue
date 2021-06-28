<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2021-06-28 14:32:15
-->
<template>
  <div class="demo">
    <!-- <p>{{name}}</p> -->
    <p>{{state}}</p>
    <ul>
      <li v-for="item in state1" :key="item.id">{{item.name}}</li>
    </ul>
    <button @click="myFn">按钮</button>
  </div>
</template>

<script>

import {customRef} from 'vue'
function myRef(value) {
  return customRef((track, trigger) => {

    fetch(value)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data, '-------')
        value = data
        trigger()
      })
      .catch((err) => {
        console.log(err)
      })

    return {
      get() {
        track() // 告诉vue这个数据是需要追踪变化的
        console.log('get', value)
        // 注意点：不能再get方法中发送网络请求
        // 渲染界面 -> 调用get -> 发送网络请求
        // 保存数据 -> 更新界面 -> 调用get
        return value
      },
      set(newValue) {
        console.log('set', newValue)
        value = newValue
        trigger() // 告诉vue出发界面更新
      }
    }
  })
}
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * customRef: 返回一个ref对象，可以显示的控制依赖追踪和触发响应
   */
  setup() {
    // let state = ref(19) // reactivve({value: 19})
    let state = myRef(19)
    function myFn() {
      console.log(state)
      state.value += 1
      console.log(state)
    }


    // fetch('../public/data.json')
    //   .then((res) => {
    //     return res.json()
    //   })
    //   .then((data) => {
    //     console.log(data, '-------')
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })

      let state1 = myRef('../public/data.json')
    return {state, myFn, state1}
  }
}
</script>

<style lang='scss' scoped>
</style>