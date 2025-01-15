// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6RgIB6lWGfuKVAqBwe3ggnGyjPI4jYfY",
  authDomain: "tradex-ea80d.firebaseapp.com",
  projectId: "tradex-ea80d",
  storageBucket: "tradex-ea80d.firebasestorage.app",
  messagingSenderId: "726797941135",
  appId: "1:726797941135:web:47ac5a539584230a3873fa",
  measurementId: "G-PPDDCWVSK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;