// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvmfpKYcFbaQ6vNYnpGoZsui4F8gSWvg",
  authDomain: "food-bonkers-website.firebaseapp.com",
  projectId: "food-bonkers-website",
  storageBucket: "food-bonkers-website.appspot.com",
  messagingSenderId: "1018661139903",
  appId: "1:1018661139903:web:a7111b04b2c7cbb5d85d0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;