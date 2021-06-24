import Vue from 'vue'
//只能使用一个extends对象，多个无效，extends会先于mixins执行
const extendTest = {
  props:{
    active:Boolean,
    propOne:String
  },
  template:`<div>
    <input type='text' v-model="a">
    <span @click="handl">{{propOne}}</span>
    <span v-if="active">134</span>
  </div>`,
  data: function() {
    return {
      a: 999
    }
  },
  methods: {
    hello() {
      console.log("hello extends")
    }
  },
  beforeCreate(){
    console.log("extends的beforeCreated")
  },
  created() {
    // this.hello()
  },
}
export const extendVue = Vue.extend(extendTest)
