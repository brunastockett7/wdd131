const temples = [
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-lds-901262-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-lds-245303-wallpaper.jpg"
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-lds-816915-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980-10-27",
    area: 52824,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-lds-1167827-wallpaper.jpg"
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-lds-1406443-wallpaper.jpg"
  },
  {
    templeName: "St. George Temple",
    location: "St. George, Utah",
    dedicated: "1877-04-06",
    area: 110000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/st-george-utah-temple/st-george-utah-temple-lds-1396946-wallpaper.jpg"
  },
  {
    templeName: "Provo City Center Temple",
    location: "Provo, Utah",
    dedicated: "2016-03-20",
    area: 85000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-lds-1232124-wallpaper.jpg"
  },
  // 👇 Add 3 new temples
  {
    templeName: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedicated: "2019-06-02",
    area: 38000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-lds-1438496-wallpaper.jpg"
  },
  {
    templeName: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedicated: "2019-12-15",
    area: 29000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-lds-1468054-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah Temple",
    location: "Manti, Utah",
    dedicated: "1888-05-21",
    area: 74792,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-lds-1440490-wallpaper.jpg"
  }
];

function createCard(temple) {
  const card = document.createElement("section");
  card.classList.add("temple-card");
  card.innerHTML = `
    <h2>${temple.templeName}</h2>
    <p><strong>Location:</strong> ${temple.location}</p>
    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
  `;
  return card;
}

function displayTemples(filteredTemples) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";
  filteredTemples.forEach(temple => container.appendChild(createCard(temple)));
}

// Filters
document.getElementById("home").addEventListener("click", () => displayTemples(temples));
document.getElementById("old").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900))
);
document.getElementById("new").addEventListener("click", () =>
  displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000))
);
document.getElementById("large").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area > 90000))
);
document.getElementById("small").addEventListener("click", () =>
  displayTemples(temples.filter(t => t.area < 10000))
);

// Initial render
displayTemples(temples);

// Footer info
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
