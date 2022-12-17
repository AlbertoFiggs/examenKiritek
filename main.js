// utilizo Live Server en VSCode puedes instalar el plug in y correr 
// localhost:5500 para correr el proyecto puede no funcionar bien si solo 
// arrastras index al navegador Web
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
import {} from './app/firebase.js';
import './app/signupForm.js';
import './app/signinForm.js';
import './app/googleLogin.js';
import './app/pokemonService.js';
import './app/logout.js';
import {loginCheck} from './app/loginCheck.js';


onAuthStateChanged(auth, async (user) => {
    loginCheck(user)

    if(user){
        loginCheck(user)
    } else {
        loginCheck(user)
    }
})