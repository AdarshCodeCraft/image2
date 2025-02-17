document.addEventListener("DOMContentLoaded", () => {
    const themeSwitch = document.getElementById("theme-switch");
  
    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      themeSwitch.checked = savedTheme === "light-mode";
    }
    // Toggle theme on switch change
  
    themeSwitch.addEventListener("change", () => {
      if (themeSwitch.checked) {
        document.body.classList.add("light-mode");
  
        document.body.classList.remove("dark-mode");
  
        localStorage.setItem("theme", "light-mode");
      } else {
        document.body.classList.add("dark-mode");
  
        document.body.classList.remove("light-mode");
  
        localStorage.setItem("theme", "dark-mode");
      }
    });
  });


  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });
  