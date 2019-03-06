import firebase from 'firebase'
import 'firebase/firestore'
import firebaseConfig from './main'
const firebaseApp = firebase.initializeApp(firebaseConfig)
export default firebaseApp.firestore()