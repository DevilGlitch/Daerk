const validUsername = "john"; // change this to your valid username
const validPassword = "doe"; // change this to your valid password

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  if(username === validUsername && password === validPassword) {
    // show dashboard
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.style.display = "block");
    
    // hide login form
    form.style.display = "none";
  } else {
    // show error message
    alert('Invalid username or password. Please try again.');
  }
});

// code to handle tab navigation
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(tabButton => {
  tabButton.addEventListener('click', (event) => {
    const tabName = event.target.dataset.tab;
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
      if(tab.id === tabName) {
        tab.style.display = "block";
      } else {
        tab.style.display = "none";
      }
    });
  });
});
