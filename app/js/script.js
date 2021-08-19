const burger = document.querySelector(".burger-container");
const links = document.querySelector(".navbar-links");

//burger animation

function burgerAnimation() {
  burger.classList.toggle("animation");
  links.classList.toggle("show");
}

burger.addEventListener("click", burgerAnimation);
