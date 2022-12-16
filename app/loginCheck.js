const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const show = document.getElementById('mostrar')

console.log(loggedOutLinks);
console.log(loggedInLinks);

export const loginCheck = user => {
    if(user){
        loggedOutLinks.forEach(link => link.style.display = 'none');
        loggedInLinks.forEach(link => link.style.display = 'block');
        show.style.display = "hidden";
    } else {
        loggedOutLinks.forEach(link => link.style.display = 'block');
        loggedInLinks.forEach(link => link.style.display = 'none');
        show.style.display = "hidden";
    }
}