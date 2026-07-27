import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "DÁN_API_KEY",
  authDomain: "DÁN_AUTH_DOMAIN",
  projectId: "DÁN_PROJECT_ID",
  storageBucket: "DÁN_STORAGE_BUCKET",
  messagingSenderId: "DÁN_MESSAGING_ID",
  appId: "DÁN_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
