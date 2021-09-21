const burger = document.querySelector(".burger-container");
const links = document.querySelector(".navbar-links");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const linksList = document.querySelectorAll(".navbar-links-list");

//events listeners
burger.addEventListener("click", burgerAnimation);

for (const link of linksList) {
  link.addEventListener("click", burgerAnimation);
}

//functions

function burgerAnimation() {
  burger.classList.toggle("burger-animation");
  links.classList.toggle("show-menu");
  body.classList.toggle("overflow");
}

//Submitting form
