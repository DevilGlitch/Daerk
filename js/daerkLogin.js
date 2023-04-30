// DOM elements
const loginForm = document.querySelector("#login-form");
const loginButton = document.querySelector("#login-form button");
const loginErrorMsg = document.querySelector("#login-error-msg");
const dashboard = document.querySelector("#dashboard");
const idSearchTab = document.querySelector("#id-search-tab");
const newDarkFileTab = document.querySelector("#new-dark-file-tab");
const editDarkInfoTab = document.querySelector("#edit-dark-info-tab");
const uploadDarkFilesTab = document.querySelector("#upload-dark-files-tab");
const tabs = document.querySelectorAll(".tab");

// Event listener for login button click
loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginForm.username.value;
  const password = loginForm.password.value;

  if (username === "username" && password === "password") {
    // Show dashboard and hide login form
    loginForm.style.display = "none";
    dashboard.style.display = "block";
    // Set ID Search tab as active by default
    idSearchTab.classList.add("active");
  } else {
    // Show login error message
    loginErrorMsg.style.opacity = 1;
  }
});

// Event listener for tab click
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Remove active class from all tabs
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    // Add active class to clicked tab
    e.target.classList.add("active");
  });
});
