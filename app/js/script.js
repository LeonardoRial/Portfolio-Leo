const burger = document.querySelector(".burger-container");
const links = document.querySelector(".navbar-links");
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");

//burger animation

function burgerAnimation() {
  burger.classList.toggle("burger-animation");
  links.classList.toggle("show-menu");
  body.classList.toggle("overflow");
}

burger.addEventListener("click", burgerAnimation);
