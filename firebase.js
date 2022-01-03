// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAthY_sI_aaETa-3kxIacv6R4IVyLveyZ8",
  authDomain: "fir-auth-login-form-sim.firebaseapp.com",
  projectId: "fir-auth-login-form-sim",
  storageBucket: "fir-auth-login-form-sim.appspot.com",
  messagingSenderId: "327547593911",
  appId: "1:327547593911:web:a08167c359b3ea81851932"
};

// Initialize Firebase
let app;

if(firebase.apps.length === 0){
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };