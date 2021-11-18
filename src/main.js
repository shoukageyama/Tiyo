import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VModal from 'vue-js-modal'
import router from './router'


Vue.config.productionTip = false

Vue.use(VModal)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
}).$mount('#app')
