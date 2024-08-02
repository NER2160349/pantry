// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3j3rbHYgOFz6L_0dEjXksTr4k-EVK3N0",
  authDomain: "pantry-e9344.firebaseapp.com",
  projectId: "pantry-e9344",
  storageBucket: "pantry-e9344.appspot.com",
  messagingSenderId: "279173334169",
  appId: "1:279173334169:web:63b23319a29681435ca408",
  measurementId: "G-RNHQCJ8B27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export{firestore}