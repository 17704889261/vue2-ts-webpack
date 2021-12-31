import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

import { router } from './router'
import store from './store'

import './plugins/permission'

import installElementUI from './plugins/element'
import { initThemes } from './plugins/themes'

Vue.config.productionTip = false

installElementUI(Vue)
initThemes()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
