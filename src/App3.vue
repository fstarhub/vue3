<template>
  <el-container>
    <el-main>
      <div></div>
      <p>使用米心中的数据 ==== {{name}}</p>
      <p>app3组件数据 ==== {{appMessage}}</p>
      <hr/>

      <!-- <input v-focus v-model="num2"> -->
      <input type="number" v-focus v-model="num1">
      <span>{{result}}</span>
      <button @click="getCount(num1)">获取数字的平方值</button>
      <br/>
      <br/>
      <input type="text" v-model="name1">
      <span>{{smallName}}</span>
      <button @click="getSmallName(name1)">获取小名</button>
      <hr/>

      <input type="text" v-model="changeData">
      <span>{{newDependent}}</span>
      <button @click="changeName">改变名字</button>
      <hr/>

      <component1></component1>
    </el-main>
  </el-container>
</template>
<script>
import { ref } from 'vue'
import myMixin from './myMinxin'
export default {
  mixins: [myMixin],
  directives: {
    focus: {
      // 指令的定义
      inserted: function (el) {
        el.focus()
      }
    }
  },
  name: 'App',
  data() {
    return {
      num2: ''
    }
  },
  setup() {
    let num1 = ref(2)
    let name1 = ref('易烊千玺')
    let appMessage = ref('我是app3组件数据')
    // function changeName() {
    //   console.log(this.changeData, '====')
    //   return this.changeData = 'lisi' + Math.random()
    // }
    return {num1, name1, appMessage}
  },
  methods: {
    changeName() {
      this.changeData = 'lisi' + Math.random()
    }
  }
}
// function changeName() {
//   this.changeData = 'lisi'
// }
</script>

<style lang="less" scoped>

</style>
