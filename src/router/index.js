import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/myCart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/RegisterView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
