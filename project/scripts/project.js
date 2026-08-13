
document.querySelector("#currentyear").textContent = new Date().getFullYear();

// === HAMBURGER MENU ===
const mainnav = document.querySelector('.header-nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show'); 
    hambutton.classList.toggle('show');
});

// === CAROUSEL ===

const carouselImages = document.querySelectorAll(".carousel-track picture");

let currentSlide = 0;

function nextSlide() {
    carouselImages[currentSlide].style.opacity = "0";

    currentSlide++;

    if (currentSlide >= carouselImages.length) {
        currentSlide = 0;
    }

    carouselImages[currentSlide].style.opacity = "1";
}

setInterval(nextSlide, 4000);

// === TEXT CAROUSEL ===

const textSlides = document.querySelectorAll(".text-slide");

let currentTextSlide = 0;

function nextTextSlide() {

    textSlides[currentTextSlide].style.opacity = "0";

    currentTextSlide++;

    if (currentTextSlide >= textSlides.length) {
        currentTextSlide = 0;
    }

    textSlides[currentTextSlide].style.opacity = "1";
}

setInterval(nextTextSlide, 6000);