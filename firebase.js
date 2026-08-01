import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPB5hJ2wkSm0uRdHnuP0dZ-u_Eq7UYIoQ",
  authDomain: "easyinvoice-pro.firebaseapp.com",
  projectId: "easyinvoice-pro",
  storageBucket: "easyinvoice-pro.firebasestorage.app",
  messagingSenderId: "69921540079",
  appId: "1:69921540079:web:f707b0d948008243b7181a",
  measurementId: "G-R2MMX5VZ4S"
};

const app = initializeApp(firebaseConfig);

export { app };
