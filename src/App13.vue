<template>
  <el-container>
    <el-main>
      <button @click="getData">获取后台数据</button>
    </el-main>
  </el-container>
</template>
<script>
import axios from 'axios'
export default {
  name: 'app13',
  data() {
    return {

    }
  },
  methods: {
    async getData() {
      const result = await axios.get('/admin/user/add')
      console.log(result, 'result')
    }
  }
}
</script>

<style lang="less" scoped>

</style>
