<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getName">得到小名</button>
    <p>姓: <input type="text" v-model="firstName"></p>
    <p>名: <input type="text" v-model="lastName"></p>
    <p><span>姓名: {{fullName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span>小名: {{xiaoming}}</span></p>
    <form action="">
      <input type="text" v-model="stu.id">
      <input type="text" v-model="stu.name">
      <input type="text" v-model="stu.age">
      <input type="submit" @click="allOne">
    </form>
    <ul>
      <li v-for="(item, index) in stus" :key="item.id" @click="removeOne(index)">
        {{item.id}} --- {{item.name}} --- {{item.age}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    // fullName: function() {
    //   return this.firstName + this.lastName
    // }
    fullName: {
      get: function() {
        return this.firstName + this.lastName
      },
      set: function(val) {
        var xin = val.substring(0, 1)
        this.xiaoming = '小' + xin
      }
    }
    // 新增业务逻辑1
  },
  watch: {
    // 新增业务逻辑1
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      xiaoming: '',
      stus: [
        {id: 1, name: 'zhangsan', age: 10},
        {id: 2, name: 'lisi', age: 20},
        {id: 3, name: 'wagnwu', age: 30}
      ],
      stu: {
        id: '',
        name: '',
        age: ''
      }
    }
    // 新增数据1
  },
  methods: {
    getName() {
      this.fullName = '打帅哥'
    },
    removeOne(index) {
      this.stus = this.stus.filter((el, or) => or !== index)
    },
    allOne(e) {
      e.preventDefault()
      const stu = Object.assign({},this.stu)
      this.stus.push(stu)
      this.stu.id = ''
      this.stu.name = ''
      this.stu.age = ''
    }
    // 新增业务逻辑1
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
