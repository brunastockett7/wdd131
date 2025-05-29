// ===== MENU TOGGLE =====
const menuBtn = document.getElementById("menu-button");
const nav = document.getElementById("nav-menu");

menuBtn?.addEventListener("click", () => {
  const isOpen = nav.style.display === "flex";
  nav.style.display = isOpen ? "none" : "flex";
  menuBtn.innerHTML = isOpen ? "\u2630" : "\u2716"; // ☰ or ✖
});

// ===== FOOTER DATE =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// ===== TEMPLE DATA =====
const temples = [
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    image: "https://www.churchofjesuschrist.org/imgs/a25cc35c43d64746a7b779dfed7e7c27cd2e2a89/full/320%2C/0/default.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    image: "https://www.churchofjesuschrist.org/imgs/3fd2a8b95c4b11edb181eeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  // ... Add 8 more temples following the same format
];

// ===== RENDER TEMPLATES =====
const container = document.getElementById("temple-cards");

function showTemples(list) {
  container.innerHTML = "";

  list.forEach(({ name, location, dedicated, area, image }) => {
    const card = document.createElement("div");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${name}</h3>
      <img src="${image}" alt="${name}" loading="lazy">
      <p><strong>Location:</strong> ${location}</p>
      <p><strong>Dedicated:</strong> ${dedicated}</p>
      <p><strong>Area:</strong> ${area.toLocaleString()} sq ft</p>
    `;

    container.appendChild(card);
  });
}

// ===== FILTERS =====
function showAll() {
  showTemples(temples);
}

function filterOld() {
  showTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
}

function filterNew() {
  showTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
}

function filterLarge() {
  showTemples(temples.filter(t => t.area > 90000));
}

function filterSmall() {
  showTemples(temples.filter(t => t.area < 10000));
}

// ===== INIT =====
showAll();
