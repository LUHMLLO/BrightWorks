import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from '../firebaseConfig.js'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    alias: 'home',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/profile.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/register.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})









export default router
