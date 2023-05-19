import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/houses',
      name: 'house',
      //lazy-loaded..
      component: () => import('../views/HouseView.vue')
    },
    {
      path: '/houseless',
      name: 'houseless',
      //lazy-loaded..
      component: () => import('../views/HouselessView.vue')
    }
  ]
})

export default router
