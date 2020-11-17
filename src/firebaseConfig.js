import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'





const config = {
  apiKey: "AIzaSyAK7azKXoQVPmouEPAyRMgAOlLlV8ywiMM",
  authDomain: "brightworkstest.firebaseapp.com",
  databaseURL: "https://brightworkstest.firebaseio.com",
  projectId: "brightworkstest",
  storageBucket: "brightworkstest.appspot.com",
  messagingSenderId: "978823477218",
  appId: "1:978823477218:web:b2d895acb261ff3c0debbb"
}
firebase.initializeApp(config);






const db = firebase.firestore()
const ref = firebase.storage().ref();

export {
    db,
    ref,
    firebase,
}

export default firebase