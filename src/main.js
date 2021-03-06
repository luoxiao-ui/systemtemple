import Vue from 'vue'


import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/utils/init.js'

Vue.config.productionTip = false
Vue.use(ElementUI)

//commit test

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
