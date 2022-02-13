// Hamburger Menu
const toggleButton = document.getElementsByClassName("toggle-button")[0]; // Get first element of array
const navbarLinks = document.getElementsByClassName("navbar-links")[0]; // Get first element of array

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("click"); // Css class "click" is activated for hamburger menu
  toggleButton.classList.toggle("click"); // Css class "click" is activated for hamburger menu
});

// Back to top Button
const BackToTop = document.querySelector(".back-to-top"); // Grab class-name of button

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    // If User scrolls more than 100px from y axis -> button appears
    BackToTop.classList.add("active");
  } else {
    // Else (less than 100px) -> remove css class active
    BackToTop.classList.remove("active");
  }
});
