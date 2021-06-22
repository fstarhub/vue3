
import component1 from './components/componet1.vue'
// import Vue from 'vue'
const miXin = {
  name: 'mixin', // 思考：最终会取哪一个那么？米心or组件
  components: {
    component1
  },

  filters: {

  },
  
  // Vue.directive('LimitInputNumber', {
  //   bind(el) {
  //     el.onkeypress = (event) => {
  //       return (/[\d]/.test(String.fromCharCode(event.keyCode || event.which))) || event.which === 8
  //     }
  //     el.oninput = () => {
  //       el.children[0].value = el.children[0].value.replace(/\D/ig, '')
  //     }
  //   }
  // }),
  directives: {
    focus: {
      // vue2.x钩子函数（bind，inserted，update，componentUpdated，unbind）
      // bind(el) {
      //   el.focus()
      // }
      // inserted: function (el) {
      //   el.focus()
      // },
      // 指令定义：vue3支持钩子函数（created，beforeMount，mounted，beforeUnmount，unmounted）
      mounted(el) {
        el.focus()
      }
    }
  },

  data() {
    return {
      name: '---我是米心中的数据 ---mixin',
      changeData: '张三',
      dependentData: '依赖数据',
      result: null,
      smallName: ''
    }
  },

  beforeCreate() {
    console.log('mixin---- bebeforeCreate' + this.name)
  },
  created() {
    console.log('mixin--- created' + this.name)
  },
  beforeMounted() {
    console.log('mixin---- beforeMounted' + this.name)
  },
  mounted() {
    console.log('mixin---- mounted' + this.name)
  },
  beforeUpdate() {
    console.log('mixin---- mounted' + this.name)
  },
  updated() {
    console.log('mixin---- mounted' + this.name)
  },
  beforeDestroy() {
    console.log('mixin---- mounted' + this.name)
  },
  destroyed() {
    console.log('mixin---- mounted' + this.name)
  },
  beforeUnmount() {
    console.log('mixin---- beforeUnmount' + this.name)
  },
  unmounted() {
    console.log('mixin---- unmounted' + this.name)
  },
  watch: {
    changeData: function() {
      alert('张三他变了')
    }
  },
  computed: {
    newDependent: function() {
      return '我的新名字是' + this.changeData
    }
  },

  methods: {
    getCount:function (num) {
      this.result = num * num
    },
    getSmallName(name) {
      this.smallName = '小' + name
    }
  },
}

export default miXin