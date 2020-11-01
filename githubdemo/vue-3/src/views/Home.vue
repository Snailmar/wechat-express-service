<!--
 * @Author: vigorzhang
 * @Date: 2020-11-01 15:35:41
 * @LastEditors: Riddick
 * @LastEditTime: 2020-11-01 15:39:04
 * @Description: 
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  setup(){
    console.log('set')
  }
}
</script>
