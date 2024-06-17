// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMTuzK-KvJpc-_e92aGRGdUTEZRX3ps4c",
    authDomain: "acadmed-1.firebaseapp.com",
    projectId: "acadmed-1",
    storageBucket: "acadmed-1.appspot.com",
    messagingSenderId: "437813342156",
    appId: "1:437813342156:web:63eae17d93f7aba5843769",
    measurementId: "G-FXZM83V7XK",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)
export const db = getFirestore();