import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import firebase from './firebaseConfig.js'

Vue.config.productionTip = false

let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,   
      store,   
      firebase,
      render: h => h(App),
    }).$mount('#app');
  }
})
