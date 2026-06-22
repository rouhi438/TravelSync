import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC4QWJ4HupWv6fv84BKgdYGe3f5i3Uhkg",
  authDomain: "travel-app-auth-be978.firebaseapp.com",
  projectId: "travel-app-auth-be978",
  storageBucket: "travel-app-auth-be978.firebasestorage.app",
  messagingSenderId: "562785593635",
  appId: "1:562785593635:web:c2b5343ac1771821071670",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
