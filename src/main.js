import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from 'firebase'


Vue.config.productionTip = false



const config = {
  apiKey: "AIzaSyA9ObQTACHCYQq6agn-B2hqjyj4d_bmhXk",
  authDomain: "brightworksvue.firebaseapp.com",
  databaseURL: "https://brightworksvue.firebaseio.com",
  projectId: "brightworksvue",
  storageBucket: "brightworksvue.appspot.com",
  messagingSenderId: "198076410895"
}
const firebaseApp = firebase.initializeApp(config);




let app;
firebaseApp.auth().onAuthStateChanged(() => {
  if(!app){
    app = new Vue({
      router,
      firebase,
      render: h => h(App),
    }).$mount('#app');
  }
})
    

