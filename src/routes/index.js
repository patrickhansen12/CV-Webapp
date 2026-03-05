import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/CVPage.vue';
import Experiences from '@/views/ExperiencesPage.vue';
import Contact from '@/views/ContactPage.vue';
import Projects from '@/views/Projects.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/erfaringer', component: Experiences },
  { path: '/kontakt', component: Contact },
  { path: '/projekter', component: Projects }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router