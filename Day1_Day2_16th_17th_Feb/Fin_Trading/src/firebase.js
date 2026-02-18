import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  projectId: "fin-trading-react-dhruv-01",
  appId: "1:308674241997:web:71b8ac0596c31c45451084",
  storageBucket: "fin-trading-react-dhruv-01.firebasestorage.app",
  apiKey: "AIzaSyC06owvAogepQk8WbjAD_EdLTSvi8uBXc4",
  authDomain: "fin-trading-react-dhruv-01.firebaseapp.com",
  messagingSenderId: "308674241997"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
