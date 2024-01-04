import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import index from '@/routes/index.js';

import App from './App.vue'

const app = createApp(App)
app.use(index);
app.use(createPinia())

app.mount('#app')
