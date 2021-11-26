import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/keiyou',
    name: 'Keiyou',
    component: () => import('../views/Keiyou.vue')
  },
  {
    path: '/kiyuusyu',
    name: 'Kiyuusyu',
    component: () => import('../views/Kiyuusyu.vue')
  },
  {
    path: '/outon',
    name: 'Outon',
    component: () => import('../views/Outon.vue')
  },
  {
    path: '/ryoueki',
    name: 'Ryoueki',
    component: () => import('../views/Ryoueki.vue')
  },
  {
    path: '/seiyosyu',
    name: 'Seiyosyu',
    component: () => import('../views/Seiyosyu.vue')
  },
  {
    path: '/gunnyuu',
    name: 'Gunnyuu',
    component: () => import('../views/Gunnyuu.vue')
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
