import { createApp } from 'vue'
import App from './App1.vue'

createApp(App).mount('#app')

/*
new Vue({
  el: '#app'
  store: store,
  router: router,
  render: c=>c(app)
})
new Vue({
  store: store,
  router: router,
  render: c=>c(app)
}).$mount('#app')
*/