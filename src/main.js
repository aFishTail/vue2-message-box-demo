import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Message from './plugins/message'
Vue.use(Message)

new Vue({
  render: h => h(App),
}).$mount('#app')
