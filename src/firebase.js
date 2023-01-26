// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8lvtpNrqiQiNVpTQcxPBEcKs8SEhEzVg",
  authDomain: "usm4u-317b9.firebaseapp.com",
  projectId: "usm4u-317b9",
  storageBucket: "usm4u-317b9.appspot.com",
  messagingSenderId: "206553363615",
  appId: "1:206553363615:web:2b562ec33c7f83092e9eaa",
  measurementId: "G-RSXZ1J1EK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
export default app