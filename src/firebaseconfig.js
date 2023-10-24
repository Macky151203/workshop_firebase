// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWgQ5sm12e3iV0JvtlN3uevNdfIrlaAew",
  authDomain: "workshop-b24bc.firebaseapp.com",
  projectId: "workshop-b24bc",
  storageBucket: "workshop-b24bc.appspot.com",
  messagingSenderId: "1021523990216",
  appId: "1:1021523990216:web:f4ad130c67be1b116337fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);