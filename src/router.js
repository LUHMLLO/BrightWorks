import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase'


import Cover from "./components/Basics/Cover.vue"
import NotFound from "./components/Basics/NotFound.vue"
import Login from "./components/Basics/Login.vue"
import Signup from "./components/Basics/Signup.vue"
import Home from "./components/Home.vue"
import Register from "./components/Basics/Register.vue"
import Perfil from "./components/Accounts/Perfil.vue"
import Search from "./components/Modules/Search.vue"


Vue.use(Router)


let router = new Router({
    mode: 'history',
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
        path: '/perfil',
        name: 'Pefil',
        component: Perfil,
        meta:{
          requiresAuth: true
        }
      },

      {
        path: '/search',
        name: 'Search',
        component: Search,
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