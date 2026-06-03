import { createApp } from 'vue'
import App from './App.vue'
import { createStaticRouter } from './routes'

createApp(App)
  .use(createStaticRouter())
  .mount('#app')
