/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')
import Vue from 'vue'
import VueRoute from 'vue-router'
import App from './components/App'
import routes from './routes/index'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
// 导入 css
import 'vue-easytable/libs/themes-base/index.css'

// 导入 table 组件 和分页组件
import {VTable,VPagination} from 'vue-easytable'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import TableOperation from './components/common/TableOperation'



// 将组件注册到全局
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)
Vue.component(TableOperation.name, TableOperation);
Vue.use(Element)
Vue.use(Buefy)
Vue.prototype.$message = Element.Message;
Vue.prototype.$msgbox = Element.MessageBox;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// window.axios.ajaxSetup({
//   headers: {
//     'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//   }
// })
// 配置 axios
Vue.prototype.$http = window.axios;
Vue.prototype.$_ = window._;
// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.use(VueRoute);
const router = new VueRoute({
  routes : routes
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  router,
  'el': '#app',
  render: createElement => createElement(App)
});
// app.$mount('#app')
