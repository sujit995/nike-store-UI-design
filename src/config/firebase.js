import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD-WvsK_gqREB_p_l3bdD5H560XKyzx718",
    authDomain: "nike-store-399006.firebaseapp.com",
    projectId: "nike-store-399006",
    storageBucket: "nike-store-399006.appspot.com",
    messagingSenderId: "694912081969",
    appId: "1:694912081969:web:de27fb134db0f77baaf510",
    measurementId: "G-Z8NZNVJB0P"
  };


const app = firebase.initializeApp(firebaseConfig);

const auth = app.auth();
const fs = app.firestore();
const storage = app.storage();

export { auth, fs, storage, app }