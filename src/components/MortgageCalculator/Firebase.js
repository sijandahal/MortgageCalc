// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDX679U2GWXAm1-Hy3T513eVGVeJi8YcAg",
  authDomain: "my-project-5a1fe.firebaseapp.com",
  projectId: "my-project-5a1fe",
  storageBucket: "my-project-5a1fe.firebasestorage.app",
  messagingSenderId: "166382795553",
  appId: "1:166382795553:web:a22184376fb22ecb615c60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;