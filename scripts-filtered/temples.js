
// ======= MENU TOGGLE =======
const menuButton = document.getElementById('menu-button');
const navMenu = document.getElementById('nav-menu');

if (menuButton && navMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
    menuButton.innerHTML = isOpen ? '&#9776;' : '✖';
  });
}

// ======= FOOTER DATE =======
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// ======= TEMPLE DATA ARRAY =======
const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "images/temple1.jpg"
  },
  {
    templeName: "São Paulo Brazil Temple",
    location: "São Paulo, Brazil",
    dedicated: "1978-10-30",
    area: 59889,
    imageUrl: "images/temple2.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "images/temple3.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "images/temple4.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "images/temple5.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl: "images/temple6.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52959,
    imageUrl: "images/temple7.jpg"
  },
  {
    templeName: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "images/temple8.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17000,
    imageUrl: "images/temple9.jpg"
  },
  // === Additional 3 temples (you can add matching images) ===
  {
    templeName: "Winnipeg Manitoba Temple",
    location: "Winnipeg, Canada",
    dedicated: "2021-10-31",
    area: 18000,
    imageUrl: "images/temple10.jpg"
  },
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019-12-15",
    area: 34800,
    imageUrl: "images/temple11.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah",
    dedicated: "1877-04-06",
    area: 110000,
    imageUrl: "images/temple12.jpg"
  }
];

// ======= RENDER TEMPLES =======
const templeCardsContainer = document.getElementById("temple-cards");

function renderTemples(templeList) {
  templeCardsContainer.innerHTML = "";

  templeList.forEach(temple => {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h3>${temple.templeName}</h3>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    templeCardsContainer.appendChild(card);
  });
}

// Initial render of all temples
renderTemples(temples);

// ======= FILTER FUNCTIONS =======
function allTemples() {
  renderTemples(temples);
}

function oldTemples() {
  const old = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  renderTemples(old);
}

function newTemples() {
  const modern = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  renderTemples(modern);
}

function largeTemples() {
  const large = temples.filter(t => t.area > 90000);
  renderTemples(large);
}

function smallTemples() {
  const small = temples.filter(t => t.area < 10000);
  renderTemples(small);
}
