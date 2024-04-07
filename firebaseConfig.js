// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9ejvnziX7a-XdA-6SUwBdhHRhUSXbHzE",
  authDomain: "safelybhejo.firebaseapp.com",
  projectId: "safelybhejo",
  storageBucket: "safelybhejo.appspot.com",
  messagingSenderId: "923706263483",
  appId: "1:923706263483:web:fe293569f01983ccd8269e",
  measurementId: "G-T11EKHQZZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
//const analytics = getAnalytics(app);