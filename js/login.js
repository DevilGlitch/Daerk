const form = document.querySelector('form');
const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  if (username === 'user' && password === 'password') {
    alert('Login successful!');
  } else {
    alert('Incorrect username or password.');
  }
});
