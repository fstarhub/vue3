<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getName">得到小名</button>
    <p>姓: <input type="text" v-model="firstName"></p>
    <p>名: {{lastName}}</p>
    <p>姓名: {{fullName}}</p>
    <p>小名: {{xiaoming}}</p>
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
        console.log(val)
        var xin = val.substring(0, 1)
        console.log(xin)
        this.xiaoming = '小' + xin
      }
    }
  },
  data() {
    return {
      firstName: '',
      lastName: '侠',
      xiaoming: ''
    }
  },
  methods: {
    getName() {
      this.fullName = '李四'
    }
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
