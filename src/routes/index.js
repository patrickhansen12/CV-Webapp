import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/CVPage.vue';
import About from '@/views/AboutPage.vue';
import Experiences from '@/views/ExperiencesPage.vue';
import Contact from '@/views/ContactPage.vue';

const routes = [
  { path: '/', component: Home }, // Adjust the path for the home route
  { path: '/om-mig', component: About },
  { path: '/erfaringer', component: Experiences },
  { path: '/kontakt', component: Contact },
];

const router = createRouter({
  history: createWebHistory('/CV-Webapp/#/'), // Pass the base path to createWebHistory
  routes,
});

export default router;