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
