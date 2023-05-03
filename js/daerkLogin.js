const loginForm = document.querySelector('#login');
const username = "DaerkOne";
const password = "ihopemycookiesaresafe~";

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
