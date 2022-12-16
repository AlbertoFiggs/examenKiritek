import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import {showErrorMessage} from './showError.js'

const inicioSesion = document.querySelector('#signup-form');

inicioSesion.addEventListener('submit', async (e) =>{
    e.preventDefault();

    const email = inicioSesion['signup-email'].value;
    const password = inicioSesion['signup-password'].value;

    console.log(email, password);

    try {
        const usuarioCredenciales = await 
        createUserWithEmailAndPassword(auth, email, password);
        console.log(usuarioCredenciales);
        // Cerrar modal 
        const signupModal = document.querySelector('#signupModal');
        const modal = bootstrap.Modal.getInstance(signupModal);
        modal.hide();

        showErrorMessage("Bienvenido " + usuarioCredenciales.user.email, 'success')

    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            showErrorMessage('Correo ya registrado', 'error');
        }else if(error.code === 'auth/invalid-email'){
            showErrorMessage('Correo no valido',  'error');
        } else if(error.code === 'auth/weak-password'){
            showErrorMessage('Contraseña debe ser de 6 caracteres minimo', 
            'error');
        }else if (error.code){
            showErrorMessage('Ooops erro no mapeado', 'error');
        }
    }

    

})