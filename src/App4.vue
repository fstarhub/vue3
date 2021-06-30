<!--  -->
<template>
  <div class="extendDemo">
    <p>1</p>
    <p>2</p>
    <!-- <p>{{message}}</p> -->
    <p>3</p>
    <!-- <com></com> -->
    <p>4</p>
    <!-- <div id="mount-point"></div> -->
  </div>
</template>

<script>
// import Vue from 'vue'
// import {extendVue} from './extendsTest'
// import { createApp, h, ref } from 'vue'
export default {
  name: 'App',
  components: {
    // com:comp2
  },
  extends:comp,
  data() {
    return {
    }
  },
  // extends: extendVue,
  mounted() {
    // let getDom = document.getElementById('mount-point')
    // getDom.appendChild(proFile.$el)
  }
}
  // var Profile = Vue.extend({
  //   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
  //   data: function () {
  //     return {
  //       firstName: 'Walter',
  //       lastName: 'White',
  //       alias: 'Heisenberg'
  //     }
  //   }
  // })
  // let proFile = new Profile().$mount('#mount-point')

const comp={//声明第一个对象comp
  // props:{
  //   active:Boolean,
  //   propOne:String
  // },
  // template:`<div>
  //   <input type='text' v-model="a">
  //   <span @click="handl">{{propOne}}</span>
  //   <span v-if="active">134</span>
  // </div>`,
  data(){
    return {
      a:0
    }
  },
  methods:{
    handl(){
      // this.$emit('changea')
    }
  },
  mounted() {
    console.log('extend----------')
  }
}
// const comp2={//声明第二个对象comp2
//   extends:comp,//通过extends继承comp
//   data(){
//       return{
//           a:100
//       }
//   }
// }



// const app = createApp({
//   setup() {
//     const name = ref('小米')
    
//     // 提供一个父元素
//     const parent = document.createElement('div')
//     //mount方法不再像vue2一样支持未挂载的实例，必须得挂载，即必须得给参数
//     const instance = app.mount(parent)
//     return { name, instance}
//   },
//   render() {
//     return h('div', { style: { fontSize: '24px' } }, '你好' + this.name)
//   }
// })

</script>

<style lang='scss' scoped>
</style>