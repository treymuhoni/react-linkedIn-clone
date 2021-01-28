 /*npm install -g firebase-tools*/
 import firebase from 'firebase'
 require("firebase/firestore");


 const firebaseConfig = {
     apiKey: "AIzaSyDFwbhiz8IxSsc89RqoqFk28ff9c_HMnQU",
     authDomain: "react-linkedin-clone-f94d2.firebaseapp.com",
     projectId: "react-linkedin-clone-f94d2",
     storageBucket: "react-linkedin-clone-f94d2.appspot.com",
     messagingSenderId: "550253739987",
     appId: "1:550253739987:web:ccb9e5d2b72a0a626d3926",
     measurementId: "G-X9KLX1TPB5"
 }
 
 const firebaseApp = firebase.initializeApp(firebaseConfig)
 const db = firebaseApp.firestore()
 const auth = firebase.auth()
 const provider = new firebase.auth.GoogleAuthProvider()
 
 export { auth, provider}
 
 export default db
 
 