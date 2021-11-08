import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import routes from './routes'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
})
import App from './App.vue'
const app = createApp(App)

app.use(router)
app.mount('#app')
