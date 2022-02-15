import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwfztQls7V_l8GllAidvH0Su8AlnYboQs",
  authDomain: "todo-finder.firebaseapp.com",
  projectId: "todo-finder",
  storageBucket: "todo-finder.appspot.com",
  messagingSenderId: "786678426183",
  appId: "1:786678426183:web:c70cb9495038106cd01f62",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };

export default db;
