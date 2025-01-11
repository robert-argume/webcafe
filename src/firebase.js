// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbT1WFfiPD8WWPA8qD2xidIqu5kClJ7M4",
  authDomain: "webcafe-f80a4.firebaseapp.com",
  projectId: "webcafe-f80a4",
  storageBucket: "webcafe-f80a4.firebasestorage.app",
  messagingSenderId: "968266567173",
  appId: "1:968266567173:web:238f22f28f59de0b51d66c",
  measurementId: "G-8ZLJPXTN3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);