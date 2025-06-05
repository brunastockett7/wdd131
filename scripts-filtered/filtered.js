const temples = [
  {
    name: "Arequipa Peru Temple",
    location: "Arequipa, Peru",
    dedication: "2021-12-12",
    area: 44000,
    image: "filtered-images/arequipa.jpg"
  },
  {
    name: "Fortaleza Brazil Temple",
    location: "Fortaleza, Brazil",
    dedication: "2019-06-02",
    area: 38000,
    image: "filtered-images/fortaleza.jpg"
  },
  {
    name: "Laie Hawaii Temple",
    location: "Laie, Hawaii",
    dedication: "1919-11-27",
    area: 42000,
    image: "filtered-images/laie-hawaii.jpg"
  },
  {
    name: "Manti Utah Temple",
    location: "Manti, Utah",
    dedication: "1888-05-21",
    area: 93000,
    image: "filtered-images/manti-temple.jpg"
  },
  {
    name: "Paris France Temple",
    location: "Paris, France",
    dedication: "2017-05-21",
    area: 44000,
    image: "filtered-images/paris-france.jpg"
  },
  {
    name: "Provo Utah Temple",
    location: "Provo, Utah",
    dedication: "1972-02-09",
    area: 128000,
    image: "filtered-images/provo.jpg"
  },
  {
    name: "Rome Italy Temple",
    location: "Rome, Italy",
    dedication: "2019-03-10",
    area: 41000,
    image: "filtered-images/rome.jpg"
  },
  {
    name: "Salt Lake Temple",
    location: "Salt Lake City, Utah",
    dedication: "1893-04-06",
    area: 253015,
    image: "filtered-images/salt-lake.jpg"
  },
  {
    name: "St. George Utah Temple",
    location: "St. George, Utah",
    dedication: "1877-04-06",
    area: 110000,
    image: "filtered-images/st-george.jpg"
  },
  {
    name: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedication: "1980-10-27",
    area: 52000,
    image: "filtered-images/tokyo-japan.jpg"
  }
];

const gallery = document.querySelector("#gallery");

function renderTemples(filteredTemples) {
  gallery.innerHTML = ""; // Clear previous
  filteredTemples.forEach(temple => {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.image;
    img.alt = temple.name;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML =
`<strong>${temple.name}</strong><br>${temple.location}<br>Dedicated:
${temple.dedication}<br>Area: ${temple.area.toLocaleString()} sq ft`;

    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
  });
}

// Filters
document.querySelector("#home").addEventListener("click", () =>
renderTemples(temples));
document.querySelector("#old").addEventListener("click", () => {
  renderTemples(temples.filter(t => new
Date(t.dedication).getFullYear() < 1900));
});
document.querySelector("#new").addEventListener("click", () => {
  renderTemples(temples.filter(t => new
Date(t.dedication).getFullYear() > 2000));
});
document.querySelector("#large").addEventListener("click", () => {
  renderTemples(temples.filter(t => t.area > 90000));
});
document.querySelector("#small").addEventListener("click", () => {
  renderTemples(temples.filter(t => t.area < 10000));
});

// Initial load
renderTemples(temples);

// Footer dates
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;

// Optional: Hamburger menu toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
menuButton.addEventListener("click", () => navMenu.classList.toggle("open"));