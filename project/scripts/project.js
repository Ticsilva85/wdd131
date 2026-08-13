
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