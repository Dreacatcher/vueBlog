/*
 * @Author: lucm
 * @Date: 2017-06-05 17:21:49
 * @Last Modified by: lucm
 * @Last Modified time: 2017-12-12 16:14:34
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.use(Element)

/* eslint-disable no-new */
window.vue = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
