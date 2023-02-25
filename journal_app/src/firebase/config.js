import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyCMh5eYk024drhCgweae1-zW5tjLlxoJTU",
    authDomain: "bootcampfrontunal.firebaseapp.com",
    projectId: "bootcampfrontunal",
    storageBucket: "bootcampfrontunal.appspot.com",
    messagingSenderId: "726146745588",
    appId: "1:726146745588:web:bba1c7cacc3d2ad1770aa1"
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);