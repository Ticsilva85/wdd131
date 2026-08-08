// === Products ===

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const productSelect = document.querySelector("#product");

if (productSelect) {
    products.forEach(product => {
        const option = document.createElement("option");

        option.value = product.id;
        option.textContent = product.name;

        productSelect.appendChild(option);
    })
}

// === Footer ===
const today = new Date();
const currentyear = document.querySelector("#currentyear");

if (currentyear) {
    currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;
}


const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.innerHTML = document.lastModified;
}

// === Review Count ===
const reviewCount = document.querySelector("#review-count");

if (reviewCount) {
    let count = Number(localStorage.getItem("reviewCount")) || 0;

    count++;

    localStorage.setItem("reviewCount", count);
    reviewCount.textContent = count;
}
