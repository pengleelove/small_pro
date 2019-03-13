import Vue from 'vue'
import lodash from 'lodash'

// import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import Element from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import Cookies from 'js-cookie'
import App from './App.vue'
import router from './router'
import store from './store'

import './icons' // icon
import './errorLog'// error log
import './permission' // permission control

import * as filters from './filters' // global filters

Vue.use(Element, {
  size: Cookies.get('size') || 'small' // set element-ui default size
})
Vue.prototype._ = lodash

// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
