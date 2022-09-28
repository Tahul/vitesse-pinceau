import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { plugin as Pinceau } from 'pinceau/runtime'
import routes from 'virtual:generated-pages'
import App from './App.vue'
import theme from '#pinceau/theme/flat'

import 'pinceau.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'

const app = createApp(App)

app.use(Pinceau, { theme })

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

app.use(router)

app.mount('#app')
