import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import UserDashboard from '@/components/user/UserDashboard.vue'

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
      component: UserDashboard,
    },
  ],
})

export default router
