<!--  -->
<template>
  <div class="extendDemo">
    <p>1</p>
    <p>2</p>
    <p>{{message}}</p>
    <p>3</p>
    <!-- <com></com> -->
    <p>4</p>
    <div id="mount-point"></div>
  </div>
</template>

<script>
// import Vue from 'vue'
// import {extendVue} from './extendsTest'
export default {
  name: 'App',
  components: {
    // com:comp2
  },
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

// const comp={//声明第一个对象comp
//   props:{
//     active:Boolean,
//     propOne:String
//   },
//   template:`<div>
//     <input type='text' v-model="a">
//     <span @click="handl">{{propOne}}</span>
//     <span v-if="active">134</span>
//   </div>`,
//   data(){
//     return {
//       a:0
//     }
//   },
//   methods:{
//     handl(){
//       // this.onChange()
//       this.$emit('changea')
//     }
//   }
// }
// const comp2={//声明第二个对象comp2
//   extends:comp,//通过extends继承comp
//   data(){
//       return{
//           a:100
//       }
//   }
// }

// const comp={//声明一个对象comp
//   props:{
//     active:Boolean,
//     propOne:String
//   },
//   template:`<div>
//     <input type='text' v-model="a">
//     <span @click="handl">{{propOne}}</span>
//     <span v-if="active">134</span>
//   </div>`,
//   data(){
//     return {
//       a:0
//     }
//   },
//   methods:{
//     handl(){
//       // this.onChange()
//       this.$emit('changea')
//     }
//   }
// }
// const CompVue=Vue.extend(comp)//compVue 继承comp组件
// new CompVue({//实例化组件
//   el:'#mount-point',
//   propsData:{

//   },
//   data(){
//     return{
//         a:30
//     }
//   }
// })
</script>

<style lang='scss' scoped>
</style>