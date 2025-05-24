/* eslint-env browser */
/* global document */
/* eslint-env browser */

// === JavaScript for Discover Japan site ===
// Handles footer date and wind chill display

const temperature = 45; // °F
const windSpeed = 5;    // mph

function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  );
}

function updateFooter() {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
  }
}

function displayWindChill(temp, speed) {
  const windChillElement = document.getElementById("windchill");
  let windChillText = "N/A";

  if (temp <= 50 && speed > 3) {
    const chill = calculateWindChill(temp, speed);
    windChillText = `${chill.toFixed(1)} °F`;
  }

  if (windChillElement) {
    windChillElement.textContent = windChillText;
  }
}

// === Run on Page Load ===
updateFooter();
displayWindChill(temperature, windSpeed);

