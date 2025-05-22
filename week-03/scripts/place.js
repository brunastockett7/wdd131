
// === Footer Content ===
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// === Wind Chill Calculation ===
// Static values to match what's shown in the HTML
const temperature = 45; // °F
const windSpeed = 5; // mph

function calculateWindChill(tempF, speedMph) {
  // Wind chill formula (only 1 line of logic)
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

// Check if values meet the condition to calculate wind chill
let windChillText = "N/A";
if (temperature <= 50 && windSpeed > 3) {
  windChillText = calculateWindChill(temperature, windSpeed).toFixed(1) + " °F";
}

// Display wind chill on the page
document.querySelector("#windchill").textContent = windChillText;
