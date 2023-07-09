// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firbase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpxiATDxmqH96M1PW0smSoYTZyMQHFlP8",
  authDomain: "fir-auth-bfca0.firebaseapp.com",
  projectId: "fir-auth-bfca0",
  storageBucket: "fir-auth-bfca0.appspot.com",
  messagingSenderId: "844484461624",
  appId: "1:844484461624:web:7a228283e02ee4b99112cd",
};


const auth = getAuth();
const provider = new GoogleAuthProvider();
// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { auth, provider, signInWithRedirect };