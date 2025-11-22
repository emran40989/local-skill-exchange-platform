// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_uNFszRDE-PQoXI2ukdC_EMAC36fDDCk",
  authDomain: "assignment-9-2ea3f.firebaseapp.com",
  projectId: "assignment-9-2ea3f",
  storageBucket: "assignment-9-2ea3f.firebasestorage.app",
  messagingSenderId: "939713216152",
  appId: "1:939713216152:web:044a3bbcc02092a0f39aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);