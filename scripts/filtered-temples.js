// === FOOTER ===
document.getElementById("currentyear").textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

// === BURGER MENU ===
const menuButton = document.getElementById("menu-toggle");
const navList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");

  const isOpen = navList.classList.contains("open");
  menuButton.setAttribute("aria-expanded", isOpen);
  menuButton.textContent = isOpen ? "✖" : "☰";
});

// === TEMPLES ARRAY ===
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },

  // Seus extras (ótimo: já tem 3 a mais)
  {
    templeName: "Halifax Nova Scotia",
    location: "Dartmouth, Nova Scotia",
    dedicated: "1999, November, 14",
    area: 8093,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/halifax-nova-scotia-temple/halifax-nova-scotia-temple-57120.jpg",
  },
  {
    templeName: "Provo City Center",
    location: "Provo, Utah",
    dedicated: "2016, March, 20",
    area: 226624,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-56386-main.jpg",
  },
  {
    templeName: "Mesa Arizona",
    location: "Mesa, Arizona",
    dedicated: "1927, October, 23-26",
    area: 80937,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-46561-main.jpg",
  },
];

// === DYNAMIC CARDS + FILTERS ===
const templeGrid = document.querySelector(".temple-grid");
const navLinks = document.querySelectorAll("nav a");

function getDedicatedYear(dedicatedStr) {
  // pega o ano antes da primeira vírgula
  const year = Number(String(dedicatedStr).split(",")[0].trim());
  return Number.isFinite(year) ? year : 0;
}

function clearTemples() {
  templeGrid.innerHTML = "";
}

function createTempleCard(temple) {
  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = "lazy";

  const caption = document.createElement("figcaption");

  const h2 = document.createElement("h2");
  h2.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

  caption.append(h2, location, dedicated, area);
  figure.append(img, caption);

  return figure;
}

function displayTemples(templeList) {
  clearTemples();
  templeList.forEach((temple) => {
    templeGrid.appendChild(createTempleCard(temple));
  });
}

function setActiveLink(clickedLink) {
  navLinks.forEach((a) => a.classList.remove("active"));
  clickedLink.classList.add("active");
}

function closeMobileMenu() {
  if (navList.classList.contains("open")) {
    navList.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  }
}

// Render inicial (HOME)
displayTemples(temples);

// Eventos do menu
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const label = link.textContent.trim().toLowerCase();
    setActiveLink(link);

    let filtered = temples;

    if (label === "old") {
      filtered = temples.filter((t) => getDedicatedYear(t.dedicated) < 1900);
    } else if (label === "new") {
      filtered = temples.filter((t) => getDedicatedYear(t.dedicated) > 2000);
    } else if (label === "large") {
      filtered = temples.filter((t) => t.area > 90000);
    } else if (label === "small") {
      filtered = temples.filter((t) => t.area < 10000);
    } else if (label === "home") {
      filtered = temples;
    }

    displayTemples(filtered);
    closeMobileMenu();
  });
});
