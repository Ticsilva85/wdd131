// Select the theme toggle button
const themeButton = document.querySelector("#changeThemeSite");

// Stop if the button does not exist (prevents runtime errors)
if (!themeButton) {
  console.error("Theme button not found. Check the button ID in HTML.");
}

// Check if a theme was previously saved
const savedTheme = localStorage.getItem("theme");

// Apply saved theme on page load
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  if (themeButton) themeButton.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
} else {
  if (themeButton) themeButton.innerHTML = `<i class="bi bi-moon-fill"></i>`;
}

// Function to toggle between light and dark mode
function changeThemeSite() {
  const isDarkMode = document.body.classList.toggle("dark");

  if (isDarkMode) {
    themeButton.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    localStorage.setItem("theme", "dark");
  } else {
    themeButton.innerHTML = `<i class="bi bi-moon-fill"></i>`;
    localStorage.setItem("theme", "light");
  }
}

// ===== HERO CAROUSEL (AUTO PLAY) =====
const carousel = document.querySelector(".hero-carousel");
const slides = document.querySelectorAll(".hero-carousel .slide");

let currentSlide = 0;
let carouselIntervalId = null;

// If there is no carousel on the page, do nothing
if (carousel && slides.length > 0) {

  // Make sure only the first slide starts active
  slides.forEach((slide, index) => {
    slide.classList.toggle("is-active", index === 0);
  });

  // Function to show a slide by index
  function showSlide(index) {
    slides[currentSlide].classList.remove("is-active");
    currentSlide = index;
    slides[currentSlide].classList.add("is-active");
  }

  // Function to go to the next slide
  function nextSlide() {
    const nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }

  // Start auto play
  function startCarousel() {
    carouselIntervalId = setInterval(nextSlide, 3000); // 3 seconds
  }

  // Stop auto play
  function stopCarousel() {
    clearInterval(carouselIntervalId);
  }

  startCarousel();

  // Optional: pause on hover (desktop)
  carousel.addEventListener("mouseenter", stopCarousel);
  carousel.addEventListener("mouseleave", startCarousel);
}
