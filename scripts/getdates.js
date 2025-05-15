/* global document */
/* eslint-env browser */

// Set the current year in the footer
document.getElementById("year").textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById("lastModified").textContent = document.lastModified;
