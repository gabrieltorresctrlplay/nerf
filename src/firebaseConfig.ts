// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfG8zO6cnN9RmJXLlxS9eKLiOW3F4Gtrs",
  authDomain: "nerfas.firebaseapp.com",
  projectId: "nerfas",
  storageBucket: "nerfas.firebasestorage.app",
  messagingSenderId: "693564183278",
  appId: "1:693564183278:web:d9603f927a85ef0afb19ff",
  measurementId: "G-E39FQNH5MT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the necessary services
export const auth = getAuth(app);
export const db = getFirestore(app);
