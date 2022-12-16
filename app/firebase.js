// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDD-JhoyJv0qwFeYGp-LGaeCiirp2DdzW8",
  authDomain: "examen-kiritek.firebaseapp.com",
  projectId: "examen-kiritek",
  storageBucket: "examen-kiritek.appspot.com",
  messagingSenderId: "537829002723",
  appId: "1:537829002723:web:c69b4654aa140c9be7a4d6"
};            
// Initialize Firebase     
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);