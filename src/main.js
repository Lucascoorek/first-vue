import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import './assets/css/style.css'

export const eventHub = new Vue();

Vue.config.productionTip = false
Vue.prototype.$http = axios


new Vue({
  render: h => h(App),
}).$mount('#app')
