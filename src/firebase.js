import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD7bjVuYFiR64hUiT2LFZy_UtEIejQV7B4",
  authDomain: "netflix-build-3ed15.firebaseapp.com",
  projectId: "netflix-build-3ed15",
  storageBucket: "netflix-build-3ed15.appspot.com",
  messagingSenderId: "284100906266",
  appId: "1:284100906266:web:ad5ae34870d4e36315f0a3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
