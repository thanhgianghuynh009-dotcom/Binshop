import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAnhuCn6qsiHYsQQwDAg5IP9H9OXYTT6Ts",
  authDomain: "binshop-8006f.firebaseapp.com",
  projectId: "binshop-8006f",
  storageBucket: "binshop-8006f.firebasestorage.app",
  messagingSenderId: "1093646474699",
  appId: "1:1093646474699:web:db5d5593ff1f3554562a4e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
