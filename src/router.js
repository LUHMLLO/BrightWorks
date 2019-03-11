import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'


import Cover from "./components/intro/Cover.vue"
import NotFound from "./components/intro/NotFound.vue"
import Login from "./components/intro/Login.vue"
import Signup from "./components/intro/Signup.vue"
import Home from "./components/Home.vue"
import Register from "./components/intro/Register.vue"
import Perfil from "./components/account/Perfil.vue"


Vue.use(Router)


let router = new Router({
    routes:[




      {
        path: '*',
        name: 'NotFound',
        component: NotFound
      },


      {
        path: '/',
        name: 'cover',
        component: Cover
      },


      {
        path: '/login',
        name: 'Login',
        component: Login
      },


      {
        path: '/signup',
        name: 'Signup',
        component: Signup
      },


      {
        path: '/register',
        name: 'Register',
        component: Register
      },


      {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
          requiresAuth: true
        }
      },


      {
        path: '/Perfil',
        name: 'Pefil',
        component: Perfil,
        meta:{
          requiresAuth: true
        }
      },
      





    ]
})



router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if (requiresAuth && !currentUser) next('login')
  else if (!requiresAuth && currentUser) next('home')
  else next()
})

export default router