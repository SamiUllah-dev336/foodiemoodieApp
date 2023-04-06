// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { Firestore, getFirestore } from "firebase/firestore";

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // for foodiemoodie
  apiKey: "AIzaSyB-_IBNJ1f3Mlgt3n6y0IcI4_PqpifQK_w",
  authDomain: "sami-2a51e.firebaseapp.com",
  projectId: "sami-2a51e",
  storageBucket: "sami-2a51e.appspot.com",
  messagingSenderId: "963969157633",
  appId: "1:963969157633:web:da128ee831190a29950e00",
  measurementId: "G-LHD56ENDJM",
  databaseURL:"https://sami-2a51e-default-rtdb.asia-southeast1.firebasedatabase.app"

  
  // // for firestore
  // apiKey: "AIzaSyB-_IBNJ1f3Mlgt3n6y0IcI4_PqpifQK_w",
  // authDomain: "sami-2a51e.firebaseapp.com",
  // databaseURL: "https://sami-2a51e-default-rtdb.asia-southeast1.firebasedatabase.app",
  // projectId: "sami-2a51e",
  // storageBucket: "sami-2a51e.appspot.com",
  // messagingSenderId: "963969157633",
  // appId: "1:963969157633:web:5cf1f350dd019993950e00",
  // measurementId: "G-M72N9S8H8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);
const db=getFirestore(app);

export {app,auth,db};
