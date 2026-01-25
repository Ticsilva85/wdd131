const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;console.log("JS carregado");

const menuButton = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    navList.classList.toggle("open");

    const isOpen = navList.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);

    menuButton.textContent = isOpen ? "✖" : "☰";
});