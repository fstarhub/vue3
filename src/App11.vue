<!--
 * @Description: ref获取DOM元素
 * @Autor: fengshuai
 * @Date: 2021-06-19 12:17:48
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-03-15 20:54:32
-->
<template>
  <div class="demo">
    <div ref="box">我是div</div>
  </div>
</template>

<script>
/**
 * 获取元素
 * 在vue2.x中我们可以通过给元素添加ref="xxx"，然后在代码中通过refs.xxx的方式来获取元素
 * 在vue3.x中我们也可以通过ref来获取元素
 */
import {ref, onMounted} from 'vue'
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
    // console.log(this.$refs.box, 'box-------') // runtime-core.esm-bundler.js?5c40:217 Uncaught TypeError: Cannot read property '$refs' of undefined
    console.log(this, 'box-------') // undefined
    let box = ref(null) // reactive: {value: null}
    onMounted(() => {
      console.log(box.value, 'onMounted--------')
    })
    console.log(box.value, 'setUp-----------')
    return {box}
  }
}
</script>

<style lang='scss' scoped>
</style>