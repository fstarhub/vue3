<!--  -->
<template>
  <div class="extendDemo">
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <div id="mount-point"></div>
  </div>
</template>

<script>
// import Vue from 'vue'
import {extendTest} from './extendsTest'
export default {
  name: 'App',
  components: {},
  data() {
    return {
    }
  },
  extends: extendTest,
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
</script>

<style lang='scss' scoped>
</style>