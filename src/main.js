import Vue from 'vue'
import router from './router'
import App from './App.vue'
import firebase from 'firebase'
import firestore from 'firebase/firestore'


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

//export firestoreDB
export default firebaseApp.firestore()



    new Vue({
      router,
      render: h => h(App),
    }).$mount('#app')
    

