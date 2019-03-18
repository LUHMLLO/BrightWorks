import firebase from 'firebase';
import firestore from 'firebase';
require ('firebase/firestore')
require ('firebase/auth')





const config = {
  apiKey: "AIzaSyA9ObQTACHCYQq6agn-B2hqjyj4d_bmhXk",
  authDomain: "brightworksvue.firebaseapp.com",
  databaseURL: "https://brightworksvue.firebaseio.com",
  projectId: "brightworksvue",
  storageBucket: "brightworksvue.appspot.com",
  messagingSenderId: "198076410895"
}
const firebaseApp = firebase.initializeApp(config);





const db = firebase.firestore()
const auth = firebase.auth()





export {
    db,
    auth,
    firebase,
    firebaseApp,
    firestore,
}

export default firebaseApp.firestore()