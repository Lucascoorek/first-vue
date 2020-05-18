import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from "axios";
import './assets/css/style.css'
import routes from './routes'

Vue.use(VueRouter);
const router = new VueRouter({
  routes // short for `routes: routes`
})

Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

export const eventHub = new Vue();


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
