// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FAIRBASE_API_KEY ,
  authDomain: "mern-blog-aab2b.firebaseapp.com",
  projectId: "mern-blog-aab2b",
  storageBucket: "mern-blog-aab2b.appspot.com",
  messagingSenderId: "825544671955",
  appId: "1:825544671955:web:be4c2b79afb48e32534a26"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);