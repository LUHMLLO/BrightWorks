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
firebase.initializeApp(config);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
