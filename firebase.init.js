// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId,

//   apiKey: "AIzaSyDNl1c7mX-ZJsoZVyrGqF45da67vTAmwNc",
//   authDomain: "assignment11-5d0f3.firebaseapp.com",
//   projectId: "assignment11-5d0f3",
//   storageBucket: "assignment11-5d0f3.firebasestorage.app",
//   messagingSenderId: "790233915750",
//   appId: "1:790233915750:web:4fa69bc0500ac19b99e8a7"

  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;