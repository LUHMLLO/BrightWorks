import Vue from 'vue'
import VueRouter from 'vue-router'
import {auth} from '../firebaseConfig.js'

Vue.use(VueRouter)
const routes = [
  {
    alias: '/',
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/home.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile.vue'),
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
    next('/login')
  } else {
    next()
  }
})



export default router