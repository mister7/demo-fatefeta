import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

import SIdentify from './components/AuthCode'

Vue.config.productionTip = false
Vue.use(SIdentify)

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
