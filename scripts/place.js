const today = new Date();
const currentyear = document.querySelector("#currentyear");

currentyear.innerHTML = `<span id="currentyear">${today.getFullYear()}</span>`;

const lastModified = document.getElementById("lastModified");
lastModified.innerHTML = document.lastModified;

const temperature = 5;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

const windChill = document.querySelector("#windChill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChill.textContent = "N/A";
}