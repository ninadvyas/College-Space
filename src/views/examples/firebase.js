import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCPG8bzhkUbQkbsd1VliMRdBIeutMLkqIM",
  authDomain: "login-config-78384.firebaseapp.com",
  projectId: "login-config-78384",
  storageBucket: "login-config-78384.appspot.com",
  messagingSenderId: "327242616377",
  appId: "1:327242616377:web:9203d7c80615d7e94207e8",
  measurementId: "G-7KXMFML6ZW"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
