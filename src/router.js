import Vue from 'vue'
import Router from 'vue-router'
import Cover from "./components/intro/Cover.vue"
import NotFound from "./components/intro/NotFound.vue"
import Login from "./components/intro/Login.vue"
import Register from "./components/intro/Register.vue"


Vue.use(Router)


export default new Router({
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
        path: '/register',
        name: 'Register',
        component: Register
      },






    ]
})