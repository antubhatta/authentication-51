// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDpcAyea11QGgGXlb_qZUk20DREalZA3w",
  authDomain: "authentication-51-2a44b.firebaseapp.com",
  projectId: "authentication-51-2a44b",
  storageBucket: "authentication-51-2a44b.appspot.com",
  messagingSenderId: "782054769762",
  appId: "1:782054769762:web:25e3c10c365bd17a93fd3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;