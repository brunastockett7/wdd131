// === Footer Content ===
function updateFooter() {
  document.querySelector("#year").textContent = new Date().getFullYear();
  document.querySelector("#lastModified").textContent = document.lastModified;
}

// === Wind Chill Calculation ===
const temperature = 45; // °F
const windSpeed = 5; // mph

function calculateWindChill(tempF, speedMph) {
  // One-line formula as required
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

function displayWindChill(temp, speed) {
  let windChillText = "N/A";
  if (temp <= 50 && speed > 3) {
    windChillText = calculateWindChill(temp, speed).toFixed(1) + " °F";
  }
  document.querySelector("#windchill").textContent = windChillText;
}

// === Run Functions on Page Load ===
updateFooter();
displayWindChill(temperature, windSpeed);
