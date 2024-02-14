// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjpLxDmmQCjIfmaY5Ojj7dnpzRtrkhA2Y",
  authDomain: "netflix-gpt-c2888.firebaseapp.com",
  projectId: "netflix-gpt-c2888",
  storageBucket: "netflix-gpt-c2888.appspot.com",
  messagingSenderId: "316196816472",
  appId: "1:316196816472:web:ffba98e63b381a0ef8ec2d",
  measurementId: "G-4BNCV8RYWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();