
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC1qubc-R6h1s_c_Yc-v7gIbo2QWXGgXnM",
  authDomain: "portfolio-389e2.firebaseapp.com",
  projectId: "portfolio-389e2",
  storageBucket: "portfolio-389e2.firebasestorage.app",
  messagingSenderId: "136383004150",
  appId: "1:136383004150:web:7df28b751d854f4bd91bd7",
  measurementId: "G-4XQW7YJBVF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
