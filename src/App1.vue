<!--
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2021-06-18 19:31:42
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-03-15 20:34:26
-->
<!--  -->
<template>
  <div class="demo">
    <!-- 注意点：如果是通过ref创建的数据，那么在template中使用的时候不用通过.value来获取，因为vue会自动给我们添加.value -->
    <!-- ref和reactive区别：如果在template中使用的时ref类型中的数据，vue会自动添加.value，
      如果在template中使用的时reactive类型中的数据，vue不会自动添加.value，
      vue时如何决定是否需要添加.value的？
      vue在解析数据之前，会自动判断这个属性是否时ref类型的
      如果是就自动添加__v_ref来判断的，如果有这个私有属性，并且取值为true，那么就表示一个ref类型的数据
     -->
    <p>{{count}}</p>
    <button @click="clickFn">按钮</button>
  </div>
</template>

<script>
// import {ref} from 'vue'
import {reactive} from 'vue'
import {isRef, isReactive} from 'vue'
export default {
  name: 'App',
  components: {},
  // data() {
  //   return {

  //   }
  // },
    /**
     * 1.什么时ref?
     * -ref和reactive一样，也是用来实现响应式数据的方法
     * -由于reactive必须传递一个对象，所以导致在企业开发中如果想只让某个变量实现响应式的时候会非常麻烦，所以vue就给我们提供了ref方法，实现对简单值的监听
     * 2.ref本质
     * -ref底层的本质其实就是reactive，系统会自动根据我们给ref传入的值将它转换成ref(xx) -> reactive({value: xx})
     * 3.ref注意点
     * -在vue中使用ref的值不用通过value获取
     * -在js中使用ref的值不许通过value获取
     */
  //setup函数是组合API的入口函数
  setup() {
    // let count = 0 // vue不能监听到这个变量
    // 定义一个count变量，初始值为0，变量发生改变后，vue会自动更新UI
    // let count = ref(0)
    let count = reactive({vlaue: 19})
    function clickFn () {
      // alert('diainjile')
      console.log(isRef(count))
      console.log(isReactive(count))
      console.log(count, '-=-')
    }
    // 注意：在组合API中定义的变量/方法，要想在外界使用，必须通过return{xxx,xxx}暴露出去
    return {count, clickFn}
  },
  methods: {

  },
  //监控data中的数据变化：一个数据影响多个数据
  watch: {},
  //监听属性：一个数据受多个数据影响
  computed: {},
  beforeCreate: function () {
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },
  created: function () {
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，el 属性目前不可见。
  },
  beforeMount: function () {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  mounted: function () {
    // 编译好的HTML挂载到页面完成后执行的事件钩子
    // el 被新创建的 vm.el 替换，并挂载到实例上去之后调用该钩子。
    // 此钩子函数中一般会做一些ajax请求获取数据进行数据初始化,可访问DOM元素
    console.log('Home done');
  },
  beforeUpdate: function () {
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  },
  updated: function () {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
    // 该钩子在服务器端渲染期间不被调用。
  },
  beforeUnmount: function () {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
  unmounted: function () {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  },
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>

<style lang='scss' scoped>
</style>