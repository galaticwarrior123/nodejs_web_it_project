const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');


registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});


const btn = document.querySelector('.btn1');
const btn_login=document.querySelector(".header_login");
const btn_signup=document.querySelector(".header_signup");

btn.addEventListener('click', () => {
    btn_login.style.display="none";
    btn_signup.style.display="none";
    window.location.href = 'http://localhost:3000';
    
});
