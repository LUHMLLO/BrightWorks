import Vue from 'vue'
import Router from 'vue-router'
import firebase from './firebaseConfig.js'


import Cover from "./components/Basics/Cover.vue"
import NotFound from "./components/Basics/NotFound.vue"
import Login from "./components/Basics/Login.vue"
import Signup from "./components/Basics/Signup.vue"
import Home from "./components/Home.vue"

import ClientProfile from "./components/Accounts/ClientProfile.vue"
import ServiceProfile from "./components/Accounts/ServiceProfile.vue"
import EditYourAccount from "./components/Accounts/EditYourAccount.vue"

import Service from "./components/Accounts/Service.vue"

import Search from "./components/Modules/Search.vue"
import Settings from "./components/Modules/Settings.vue"
import Compose_a_post from "./components/Modules/Compose_a_post.vue"


import ManageServices_Main from "./components/Modules/ManageProvidedServices/ManageServices_Main.vue"
import ManageServices_Edit from "./components/Modules/ManageProvidedServices/ManageServices_Edit.vue"

import ManageServicesPlans_Main from "./components/Modules/ManageServicesPlans/ManageServicesPlans_Main.vue"
import ManageServicesPlans_Edit from "./components/Modules/ManageServicesPlans/ManageServicesPlans_Edit.vue"




import dashboard_S from "./components/DashboardService/dashboard_S.vue"
import dashboard_C from "./components/DashboardClient/dashboard_C.vue"


Vue.use(Router)


let router = new Router({
    mode: 'history',
    routes:[




      {
        path: '*',
        name: 'NotFound',
        component: NotFound,
        meta:{
          requiresAuth: true
        }
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
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
          requiresAuth: true
        }
      },


      {
        path: '/service/:service_id',
        name: 'Service',
        component: Service,
        meta:{
          requiresAuth: true
        }
      },


      {
        path: '/client/profile/:userid',
        name: 'ClientProfile',
        component: ClientProfile,
        meta:{
          requiresAuth: true
        }
      },   

      {
        path: '/service/profile/:userid',
        name: 'ServiceProfile',
        component: ServiceProfile,
        meta:{
          requiresAuth: true
        }
      },    

      {
        path: '/edit/profile/:userid',
        name: 'EditYourAccount',
        component: EditYourAccount,
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

      {
        path: '/search/:search_service',
        name: 'Search-service',
        component: Search,
        meta:{
          requiresAuth: true
        }
      },

      {
        path: '/settings',
        name: 'Settings',
        component: Settings,
        meta:{
          requiresAuth: true
        }
      },


      {
        path: '/manage_services',
        name: 'ManageServices_Main',
        component: ManageServices_Main,
        meta:{
          requiresAuth: true
        }
      },

      {
        path: '/manage_services/editservice/:service_id',
        name: 'ManageServices_Edit',
        component: ManageServices_Edit,
        meta:{
          requiresAuth: true
        }
      },


      {
        path: '/manage_plans',
        name: 'ManageServicesPlans_Main',
        component: ManageServicesPlans_Main,
        meta:{
          requiresAuth: true
        }
      },

      {
        path: '/manage_plans/editplan/:plan_id',
        name: 'ManageServicesPlans_Edit',
        component: ManageServicesPlans_Edit,
        meta:{
          requiresAuth: true
        }
      },
      
      


      {
        path: '/Compose',
        name: 'Compose_a_post',
        component: Compose_a_post,
        meta:{
          requiresAuth: true
        }
      },
      



      {
        path: '/service/dashboard/:userid',
        name: 'dashboard_S',
        component: dashboard_S,
        meta:{
          requiresAuth: true
        }
      },      
      
      {
        path: '/client/dashboard/:userid',
        name: 'dashboard_C',
        component: dashboard_C,
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