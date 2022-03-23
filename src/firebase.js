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

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();

export { auth, googleAuthProvider, facebookAuthProvider };

// export const createUserDocument = async (user, additionalData) => {
//   if (!user) return;
//   const userRef = firestore.doc(`users/${user.uid}`);
//   const snapshot = await userRef.get();

//   if (!snapshot.exists) {
//     const { email } = user;
//     const { displayName } = additionalData;

//     try {
//       useRef.set({
//         displayName,
//         email,
//         createdAt: new Date(),
//       });
//     } catch (error) {
//       console.log("error in creating user", error);
//     }
//   }
// };
