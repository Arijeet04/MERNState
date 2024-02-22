// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-dc694.firebaseapp.com",
  projectId: "mern-estate-dc694",
  storageBucket: "mern-estate-dc694.appspot.com",
  messagingSenderId: "205392942930",
  appId: "1:205392942930:web:1ff0428025b9f12be6cc8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);