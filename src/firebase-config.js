// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7oUvZRc0so1J4PbPVaH26GtSYrS37Sek",
  authDomain: "simple-blog-project-2276b.firebaseapp.com",
  projectId: "simple-blog-project-2276b",
  storageBucket: "simple-blog-project-2276b.appspot.com",
  messagingSenderId: "207635226965",
  appId: "1:207635226965:web:83170f80bd0c9354934fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();