import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyD8y8vHJ0rHJqp5_NkzCbelyckFiaurVOw",
    authDomain: "linkedin-clone-yt-42f20.firebaseapp.com",
    projectId: "linkedin-clone-yt-42f20",
    storageBucket: "linkedin-clone-yt-42f20.appspot.com",
    messagingSenderId: "549838139759",
    appId: "1:549838139759:web:92914d673e99e2d2c3f89a",
    measurementId: "G-QQGNMWL39W"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};