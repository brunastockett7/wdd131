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
    imageUrl: "https://www.churchofjesuschrist.org/imgs/a25cc35c43d64746a7b779dfed7e7c27cd2e2a89/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 40000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/3fd2a8b95c4b11edb181eeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/bc3ab84c36b411edbdfaec9c4022f4e3e3df0935/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Paris, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/12ea78a6ec0b11edb2eaeeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/88f70d5d3c6011edb79feeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52959,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/16923c17c4d011edb52ceeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Mexico City Temple",
    location: "Mexico City, Mexico",
    dedicated: "1983-12-02",
    area: 116642,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/d78b52d2c9d311edb520eeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/1f928c8ee3d611edb941eeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019-12-15",
    area: 34800,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/4d96c4c9e3d511edb52ceeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
  },
  {
    templeName: "St. George Utah Temple",
    location: "St. George, Utah",
    dedicated: "1877-04-06",
    area: 110000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/f9e9cd06d2d511edb79feeeeac1fb1a20875c6c9/full/320%2C/0/default.jpg"
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
