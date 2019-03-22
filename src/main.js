import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from './firebaseConfig.js'
import { store } from './store.js'



Vue.config.productionTip = false






let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      firebase,
      store,
      render: h => h(App),
    }).$mount('#app');
  }
})
    



