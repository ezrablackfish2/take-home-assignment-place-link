// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBcCpZvLHspg1p1f-cyhmAs8SgW4oFvFoA",
  authDomain: "steelo-testnet.firebaseapp.com",
  databaseURL: "https://steelo-testnet-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "steelo-testnet",
  storageBucket: "steelo-testnet.appspot.com",
  messagingSenderId: "856135872273",
  appId: "1:856135872273:web:1f8d4a01838db1a4a9e6b0",
  measurementId: "G-GWWHTHMRYW"
};;

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const database = getFirestore(app);
