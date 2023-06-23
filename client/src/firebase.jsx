import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqe7F1e6De_iAFm8f1886mfxK4XwOWBxM",
  authDomain: "food-delivery-e457b.firebaseapp.com",
  projectId: "food-delivery-e457b",
  storageBucket: "food-delivery-e457b.appspot.com",
  messagingSenderId: "1075139627048",
  appId: "1:1075139627048:web:dfad9f51b594c1bc1a8d1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
