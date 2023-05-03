require('dotenv').config();
const loginForm = document.querySelector('#login');
const username = process.env.LOGIN_USERNAME;
const password = process.env.LOGIN_PASSWORD;

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const userValue = document.querySelector('#user').value;
    const passValue = document.querySelector('#pass').value;

    if (userValue === username && passValue === password) {
        window.location.href = "dashboard.html";
    } else {
        alert("Incorrect username or password. Please try again.");
    }
});
