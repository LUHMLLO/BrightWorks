import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'





const config = {
  apiKey: "AIzaSyA9ObQTACHCYQq6agn-B2hqjyj4d_bmhXk",
  authDomain: "brightworksvue.firebaseapp.com",
  databaseURL: "https://brightworksvue.firebaseio.com",
  projectId: "brightworksvue",
  storageBucket: "brightworksvue.appspot.com",
  messagingSenderId: "198076410895"
}
firebase.initializeApp(config);






const db = firebase.firestore()
export {
    db,
    firebase,
}

export default firebase