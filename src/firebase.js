// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCl5uiWkpcOTb0HpmxkfYirAq0IhdfNPGs",
  authDomain: "fir-bd06d.firebaseapp.com",
  projectId: "fir-bd06d",
  storageBucket: "fir-bd06d.appspot.com",
  messagingSenderId: "1000148863681",
  appId: "1:1000148863681:web:734b998d82f55e64fde240",
  measurementId: "G-N3TBH1GBDX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
