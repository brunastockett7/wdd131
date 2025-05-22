/* eslint-env browser */

// === JavaScript for Discover Japan site ===
// Handles footer date and wind chill display

const temperature = 45; // °F
const windSpeed = 5;    // mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * (speedMph ** 0.16) +
    0.4275 * tempF * (speedMph ** 0.16)
  );
}

function updateFooter() {
  const yearSpan = document.querySelector("#year");
  const lastModifiedSpan = document.querySelector("#lastModified");

  if (yearSpan && lastModifiedSpan) {
    yearSpan.textContent = new Date().getFullYear();
    lastModifiedSpan.textContent = document.lastModified;
  }
}

function displayWindChill(temp, speed) {
  const windChillElement = document.querySelector("#windchill");
  let windChillText = "N/A";

  if (temp <= 50 && speed > 3) {
    windChillText = calculateWindChill(temp, speed).toFixed(1) + " °F";
  }

  if (windChillElement) {
    windChillElement.textContent = windChillText;
  }
}

// === Run on Page Load ===
updateFooter();
displayWindChill(temperature, windSpeed);
