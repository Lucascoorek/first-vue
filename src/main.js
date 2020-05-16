import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css'

export const eventHub = new Vue();

Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
