import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDiVWi1RRkzkuyKL13nPnhYf_LvSMuVa6w",
    authDomain: "netflix-clone-79faf.firebaseapp.com",
    projectId: "netflix-clone-79faf",
    storageBucket: "netflix-clone-79faf.appspot.com",
    messagingSenderId: "512111614062",
    appId: "1:512111614062:web:e786814963ca3fb056ae7f"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.fireStore;
  const auth = firebase.auth();

  export {auth}
  export default db;