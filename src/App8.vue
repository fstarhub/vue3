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
// import {ref,toRef} from 'vue'
import {toRef} from 'vue'
export default {
  name: 'App',
  components: {},
  methods: {
  },
  /**
   * toRef和ref区别:
   * ref->复制，修改响应式数据不会影响以前的数据
   * toRef->引用，修改响应式数据会影响以前的数据
   * 
   * ref->数据发生改变，界面就会自动更新
   * toRef-> 数据发生改变，界面不会自动更新
   * 
   * toRef应用场景：
   * 如果想让响应式数据和以前的数据关联起来，并且更新响应式数据后还不想更新UI，那么就可以使用toRef
   */
  setup() {
    let obj = {name: 'zhangshan', age: 18}
    /**
     * ref(obj.name) -> ref('zhangsan') -> reactive({value: 'zhangsan'})
     */
    // ref->复制，和obj没有关系
    // let state = ref(obj.name)
    let state = toRef(obj, 'name')

    function myFn() {
      /**
       * 结论：利用ref将某一个对象中的属性变成响应式数据，我们修改响应式数据不会影响到原始数据
       */
      /**
       * 结论：如果利用toRef将某一个对象中的属性变成响应式的数据，我们修改响应数据会影响到原始数据的
       * 但如果响应式的数据是通过toRref创建的，那么修改了数据并不会触发UI界面的更新
       */
      state.value = 'fengshuai'
      console.log(obj)
      console.log(state)
    }
    return {state, myFn}
  }
}
</script>

<style lang='scss' scoped>
</style>