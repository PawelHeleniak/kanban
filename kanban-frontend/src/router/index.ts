import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'logowanie',
      component: AuthView,
    },
    {
      path: '/panel',
      name: 'panel',
      component: UserView,
    },
  ],
})

export default router
