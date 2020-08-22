import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyAK7azKXoQVPmouEPAyRMgAOlLlV8ywiMM",
  authDomain: "brightworkstest.firebaseapp.com",
  databaseURL: "https://brightworkstest.firebaseio.com",
  projectId: "brightworkstest",
  storageBucket: "brightworkstest.appspot.com",
  messagingSenderId: "978823477218",
  appId: "1:978823477218:web:b2d895acb261ff3c0debbb"
}
firebase.initializeApp(firebaseConfig);


// utils
const db = firebase.firestore()
const auth = firebase.auth()
const ref = firebase.storage().ref()


// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection("posts")


export {
    db,
    auth,
    ref,
    firebase,
    usersCollection,
    postsCollection,
}