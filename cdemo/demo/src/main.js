/*
 * @Author: vigorzhang
 * @Date: 2020-04-02 22:35:04
 * @LastEditors: Riddick
 * @LastEditTime: 2020-04-02 22:43:07
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem'
import './assets/css/reset.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
