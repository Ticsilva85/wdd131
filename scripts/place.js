// === FOOTER === //

const lastModified = document.lastModified;

document.getElementById("lastModified").textContent = `Last Modification: ${lastModified}`;

// === WIND CHILL === //

// Weather Static Values

const temperature = 8; 
const windSpeed = 12; 

// Wind Chill Function

function calculateWindChill(temp, speed) {
    return 13.12 + 0.6215 * temp - 11.37 * speed ** 0.16 + 0.3965 * temp * speed ** 0.16;
}

// Wind Chill Calculation
let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temperature, windSpeed).toFixed(1) + " °C";
}

document.getElementById("wind-chill").textContent = windChill;
