document.addEventListener("DOMContentLoaded", function () {
  const temples = [
    {
      templeName: "Salt Lake Temple",
      location: "Salt Lake City, Utah",
      dedicated: "1893-04-06",
      area: 253015,
      imageUrl: "images-filtered-temples/salt-lake.jpg"
    },
    {
      templeName: "Rome Italy Temple",
      location: "Rome, Italy",
      dedicated: "2019-03-10",
      area: 41010,
      imageUrl: "images-filtered-temples/rome.jpg"
    },
    {
      templeName: "Laie Hawaii Temple",
      location: "Laie, Hawaii",
      dedicated: "1919-11-27",
      area: 42000,
      imageUrl: "images-filtered-temples/laie-hawaii.jpg"
    },
    {
      templeName: "Tokyo Japan Temple",
      location: "Tokyo, Japan",
      dedicated: "1980-10-27",
      area: 52824,
      imageUrl: "images-filtered-temples/tokyo-japan.jpg"
    },
    {
      templeName: "Paris France Temple",
      location: "Le Chesnay, France",
      dedicated: "2017-05-21",
      area: 44000,
      imageUrl: "images-filtered-temples/paris-france.jpg"
    },
    {
      templeName: "St. George Temple",
      location: "St. George, Utah",
      dedicated: "1877-04-06",
      area: 110000,
      imageUrl: "images-filtered-temples/st-george.jpg"
    },
    {
      templeName: "Provo City Center Temple",
      location: "Provo, Utah",
      dedicated: "2016-03-20",
      area: 85000,
      imageUrl: "images-filtered-temples/provo.jpg"
    },
    {
      templeName: "Fortaleza Brazil Temple",
      location: "Fortaleza, Brazil",
      dedicated: "2019-06-02",
      area: 38000,
      imageUrl: "images-filtered-temples/fortaleza.jpg"
    },
    {
      templeName: "Arequipa Peru Temple",
      location: "Arequipa, Peru",
      dedicated: "2019-12-15",
      area: 29000,
      imageUrl: "images-filtered-temples/arequipa.jpg"
    },
    {
      templeName: "Manti Utah Temple",
      location: "Manti, Utah",
      dedicated: "1888-05-21",
      area: 74792,
      imageUrl: "images-filtered-temples/manti-temple.jpg"
    }
  ];

  function createCard(temple) {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const templeHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    card.innerHTML = templeHTML;
    return card;
  }

  function displayTemples(filteredTemples) {
    const container = document.getElementById("temple-cards");
    if (!container) {
      console.error("❌ Missing <div id='temple-cards'> in HTML.");
      return;
    }
    container.innerHTML = "";
    filteredTemples.forEach(temple =>
      container.appendChild(createCard(temple))
    );
  }

  // Filter event listeners
  document.getElementById("home").addEventListener("click", () =>
    displayTemples(temples)
  );
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

  // Render initial view
  displayTemples(temples);

  console.log("✅ Temple page JS loaded");
});

