import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FretboardPage from '../views/FretboardPage.vue'
import ScalesPage from '../views/ScalesPage.vue'
import MastersPage from '../views/MastersPage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/fretboard',
    name: 'fretboard',
    component: FretboardPage,
  },
  {
    path: '/scales',
    name: 'scales',
    component: ScalesPage,
  },
  {
    path: '/masters',
    name: 'masters',
    component: MastersPage,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
