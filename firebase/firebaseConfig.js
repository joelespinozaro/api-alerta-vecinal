// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyVHxxMHJMH86J1f1Ru4bOD00FNB7_HlY",
  authDomain: "alarma-vecinal-15b08.firebaseapp.com",
  databaseURL: "https://alarma-vecinal-15b08-default-rtdb.firebaseio.com",
  projectId: "alarma-vecinal-15b08",
  storageBucket: "alarma-vecinal-15b08.appspot.com",
  messagingSenderId: "416018613969",
  appId: "1:416018613969:web:e689681f95cf0adac527f0",
  measurementId: "G-162T9GVJ0X"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);