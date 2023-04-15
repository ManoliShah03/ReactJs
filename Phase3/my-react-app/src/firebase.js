// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvGYUJTLlqAMJK3ZwB1v7oIQDPAYyo5b8",
  authDomain: "fir-f3785.firebaseapp.com",
  projectId: "fir-f3785",
  storageBucket: "fir-f3785.appspot.com",
  messagingSenderId: "730114892320",
  appId: "1:730114892320:web:8da3c66b71245e9fd8d245",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };