import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from './firebase.js';
import { showErrorMessage } from './showError.js'

const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', async e => {
    e.preventDefault();

    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password);
        console.log(credentials);
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'))
        modal.hide()

        showErrorMessage('Bienvenido '+ credentials.user.email, 'success')
    } catch (error) {
        if(error.code === "auth/wrong-password"){
            showErrorMessage('Contraseña incorrecta', 'error')
        }else if (error.code === "auth/user-not-found"){
            showErrorMessage('Usuario no encontrado', 'error')
        }else{
            showErrorMessage(error.message, 'error')
        }
    }

})