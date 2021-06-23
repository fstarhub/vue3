export const extendTest = {
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