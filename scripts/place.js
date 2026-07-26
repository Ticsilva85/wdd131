const today = new Date();
const currentyear = document.querySelector("#currentyear");

currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = document.lastModified;