import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyBXcaPwLAvhY7eFfSPyKnYxKRouyQkzG74",
  authDomain: "crwn-db-a1773.firebaseapp.com",
  projectId: "crwn-db-a1773",
  storageBucket: "crwn-db-a1773.appspot.com",
  messagingSenderId: "1085960834094",
  appId: "1:1085960834094:web:7ced8ac2b5de72a13a63bf",
  measurementId: "G-YWTWNNTXLV",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
