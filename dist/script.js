const burger=document.querySelector(".burger-container"),links=document.querySelector(".navbar-links"),body=document.querySelector("body"),navbar=document.querySelector(".navbar"),linksList=document.querySelectorAll(".navbar-links-list");function burgerAnimation(){burger.classList.toggle("burger-animation"),links.classList.toggle("show-menu"),body.classList.toggle("overflow")}burger.addEventListener("click",burgerAnimation);for(const e of linksList)e.addEventListener("click",burgerAnimation);
//# sourceMappingURL=script.js.map