console.log("JS carregado")

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;console.log("JS carregado");

// Footer
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent =
  `Last Modification: ${lastModified}`;

// Hamburger menu
const menuButton = document.getElementById("menu");
const nav = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.textContent = nav.classList.contains("open") ? "✖" : "☰";
});
