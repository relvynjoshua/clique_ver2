// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'; 

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPg9iS1XMonq7QRZmYPOFJKiQbvRG5Szg",
  authDomain: "clique12-2276e.firebaseapp.com",
  projectId: "clique12-2276e",
  storageBucket: "clique12-2276e.appspot.com",
  messagingSenderId: "991191537854",
  appId: "1:991191537854:web:978e3ee9cf9f3a83c966ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



//Initialize Firestore
export const database =
getFirestore (app);
export const auth = getAuth(app);