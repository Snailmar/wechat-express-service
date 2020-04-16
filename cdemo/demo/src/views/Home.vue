<!--
 * @Author: vigorzhang
 * @Date: 2020-04-02 22:35:04
 * @LastEditors: Riddick
 * @LastEditTime: 2020-04-07 23:26:56
 * @Description: 
 -->
<template>
  <div class="home">
    <header>
      hello
    </header>
    <section>
      seciotn
    <footer1>
      <div slot-scope="say" >{{say.say}}</div>
    </footer1>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import footer1 from '@/components/footer.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,footer1
  }
}
</script>
<style lang="scss" scope>
.home{
  height: 100%;
}
  header{
    height: 1rem;
    background: #f00;
  }
  section{
    height: calc(100% - 1rem);
    background: green;
  }
</style>
