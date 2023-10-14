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
    window.location.href = "/create";
});
