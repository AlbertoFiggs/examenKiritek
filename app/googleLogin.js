import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from './firebase.js'
import { showErrorMessage } from './showError.js'



const googleButton = document.querySelector('#googleLogin');

googleButton.addEventListener('click', async (e) => {
    
    const provider = new GoogleAuthProvider();

    try {
        const credentials = await signInWithPopup(auth , provider);    
        
        const modal = bootstrap.Modal.getInstance(document.querySelector('#signinModal'));
        modal.hide();

        showErrorMessage('Bienvenido ', + credentials.user.displayName, 'success');
    } catch (error) {
        
    }
})

