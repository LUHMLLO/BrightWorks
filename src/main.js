import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from './firebaseConfig.js'



Vue.config.productionTip = false






let app;
firebase.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      firebase,
      render: h => h(App),
    }).$mount('#app');
  }
})
    



