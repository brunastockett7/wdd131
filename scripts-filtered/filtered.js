
document.getElementById("menu-button").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("open");
});

// Footer date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;