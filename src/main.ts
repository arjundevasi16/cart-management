import './assets/main.css'
import { createApp } from 'vue'
import App from '@/App.vue'
import store from './store'
import router from './routes/route'
const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
