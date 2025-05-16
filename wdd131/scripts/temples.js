// Show/hide nav menu
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', () => {
  navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
  menuButton.innerHTML = navMenu.style.display === 'flex' ? '✖' : '&#9776;';
});

// Footer dynamic data
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

