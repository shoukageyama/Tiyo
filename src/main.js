import Vue from 'vue'
import App from './App.vue'
import VModal from 'vue-js-modal'
import router from './router'
import './registerServiceWorker'


Vue.config.productionTip = false

Vue.use(VModal)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
