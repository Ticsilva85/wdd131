// const today = new Date();
// const currentyear = document.querySelector("#currentyear");

// currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

// const lastModified = document.getElementById("lastModified");
// lastModified.innerHTML = document.lastModified;

document.querySelector("#currentyear").textContent = new Date().getFullYear();

// === HAMBURGER MENU ===
const mainnav = document.querySelector('.header-nav');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show'); 
    hambutton.classList.toggle('show');
});
