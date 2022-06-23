// import firebase from "firebase/compat/app";
// import "firebase/compat/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  FieldValue,
  serverTimestamp,
} from "firebase/firestore";
// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
// });

// export const auth = app.auth();

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_API_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_API_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_API_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_API_APP_ID,
});

export const auth = getAuth();
const firestore = getFirestore(app);
export const database = {
  folders: collection(firestore, "folders"),
  files: collection(firestore, "files"),
  getCurrentTimestamp: serverTimestamp(),
};
export default app;
