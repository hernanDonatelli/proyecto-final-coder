import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store'

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
  },
  {
    path: '/acceso-denegado',
    name: 'acceso-denegado',
    component: () => import('../views/AccesoRestringidoView.vue')
  },
  {
    path: '/producto/:id',
    name: 'producto',
    component: () => import('../views/ShopView.vue')
  },
  {
    path: '/admin-usuarios',
    name: 'admin-usuarios',
    component: () => import('../views/TableUsersView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/admin-productos',
    name: 'admin-productos',
    component: () => import('../views/TableProductsView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/admin-create-productos',
    name: 'admin-create-productos',
    component: () => import('../views/CreateProductsView.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/admin-pedidos',
    name: 'admin-pedidos',
    component: () => import('../views/PedidosView.vue'),
    meta: {requiresAuth: true}
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {

  if(to.matched.some(route => route.meta.requiresAuth)){
    if (!store.state.userActive){
      next('/login');
    }else{
      if(!store.state.userActive.admin){
        next('/acceso-denegado');
      }else{
        next();
      }
    }
  }else{
    next()
  }
})

export default router
