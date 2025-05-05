
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyCqGUYde69Ip2_YXt0Y5Y5OB-M9NCHMq1M",
  authDomain: "appstore-by-ratul.firebaseapp.com",
  projectId: "appstore-by-ratul",
  storageBucket: "appstore-by-ratul.firebasestorage.app",
  messagingSenderId: "225694796418",
  appId: "1:225694796418:web:c639a1d18d1f39f955029b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);