

/* === start header ===*/
let menu = document.querySelector(".header #menu-bar");
let navbar = document.querySelector(".header .navbar");


menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
});

window.addEventListener("scroll", () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
});





/* === end header ===*/

/*
===============================================
===============================================
*/

/* === start home ===*/

var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});


/* === end home ===*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/

/*
===============================================
===============================================
*/














