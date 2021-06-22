const miXin = {
  data() {
    return {
      name: 'mixin---我是米心中的数据Second',
      changeData: '张三second',
      dependentData: '依赖数据second'
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
    console.log('mixin---- beforeUpdate' + this.name)
  },
  updated() {
    console.log('mixin---- updated' + this.name)
  },
  beforeDestroy() {
    console.log('mixin---- beforeDestroy' + this.name)
  },
  destroyed() {
    console.log('mixin---- destroyed' + this.name)
  },
  beforeUnmount() {
    console.log('mixin---- beforeUnmount' + this.name)
  },
  unmounted() {
    console.log('mixin---- unmounted' + this.name)
  },
  watch: {
    changeData: function() {
      alert('张三他变了second')
    }
  },
  computed: {
    newDependent: function() {
      return '我是新的' + this.changeData
    }
  },
  methods: {
    getCount:function (num) {
      return num * num
    },
    getSmallName(name) {
      return '小' + name
    }
  },
}

export default miXin