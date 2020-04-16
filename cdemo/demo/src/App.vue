<!--
 * @Author: vigorzhang
 * @Date: 2020-04-02 22:35:04
 * @LastEditors: Riddick
 * @LastEditTime: 2020-04-02 22:45:32
 * @Description: 
 -->
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
