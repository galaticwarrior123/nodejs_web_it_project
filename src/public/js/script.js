const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


// registerLink.addEventListener('click', () => {
//     logregBox.classList.add('active');
// });

// loginLink.addEventListener('click', () => {
//     logregBox.classList.remove('active');
// });


const btn = document.querySelector('.btn1');




btn.addEventListener('click', () => {
    window.location.href = "/create";
});


url=window.location.href;

if(url=="http://localhost:3000/login"){
    logregBox.classList.remove('active');
}
else{
    logregBox.classList.add('active');
}