// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEs2qiRY7MqJlSXYsT2Sxvvr_dYoSmGmY",
  authDomain: "wassim-missguided.firebaseapp.com",
  projectId: "wassim-missguided",
  storageBucket: "wassim-missguided.appspot.com",
  messagingSenderId: "648777671977",
  appId: "1:648777671977:web:0812a022838c3d6e818338",
  measurementId: "G-NHGKWJ4WXN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
