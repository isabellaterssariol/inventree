import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAqCwxKB5lcB-PxjCmENBdoKKdGeKNfLro",
  authDomain: "inventree-7d184.firebaseapp.com",
  projectId: "inventree-7d184",
  storageBucket: "inventree-7d184.firebasestorage.app",
  messagingSenderId: "380719332792",
  appId: "1:380719332792:web:6d00e0f526572d5d12234d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);