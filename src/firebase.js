// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkyzQ14fkyHFM9f85jNfRzslWGStGLk_U",
  authDomain: "podcast-app-e167c.firebaseapp.com",
  projectId: "podcast-app-e167c",
  storageBucket: "podcast-app-e167c.appspot.com",
  messagingSenderId: "907555685309",
  appId: "1:907555685309:web:2b651d363fa26c602c48d4",
  measurementId: "G-F1GK6T3TY6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export {db, auth, storage};