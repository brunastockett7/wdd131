
/* eslint-env browser */
/* global document */

// ========== HAMBURGER MENU ==========
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    menuButton.innerHTML = isOpen ? '&#9776;' : '✖';
  });
}

// ========== FOOTER ==========
const yearSpan = document.getElementById('year');
const modifiedSpan = document.getElementById('last-modified');

if (yearSpan && modifiedSpan) {
  yearSpan.textContent = new Date().getFullYear();
  modifiedSpan.textContent = document.lastModified;
}
