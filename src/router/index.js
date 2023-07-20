import { createRouter, createWebHistory } from 'vue-router'
import HomeTest from '@/components/HomeTest.vue'
import AboutTest from '@/components/AboutTest.vue'
import QaTest from '@/components/QaTest.vue'
import ContactUser from '@/components/ContactUser.vue'
import SearchTest from '@/components/SearchTest.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTest
  },
  {
    path: '/about',
    name: 'abouttest',
    component: AboutTest
  },
  {
    path: '/qa',
    name: 'qatest',
    component: QaTest
  },

  {
    path: '/contact',
    name: 'ContactUser',
    component: ContactUser
  },
  {
    path: '/search',
    name: 'searchtest',
    component: SearchTest
  },
  






]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router