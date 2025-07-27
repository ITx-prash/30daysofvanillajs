const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => cities.push(...data));

// To to the filter stuffs from the user entered values
function findMatches(wordToMatch, cities) {
  const regx = new RegExp(wordToMatch, "gi");
  return cities.filter((indiPlaces) => {
    return indiPlaces.city.match(regx) || indiPlaces.state.match(regx);
  });
}

const searchInput = document.querySelector(".search");
const suggestion = document.querySelector(".suggestions");

searchInput.addEventListener("input", displayMatches);

function displayMatches() {
  const matchArray = findMatches(this.value, cities);

  const html = matchArray
    .map((indi) => {
      const regx = new RegExp(this.value, "gi");
      const city = indi.city.replace(regx,`<span class="hl">${this.value}</span>`);
      const state = indi.state.replace(regx,`<span class="hl">${this.value}</span>`);
        
      return `
    <li>
    <span class="name">${city}, ${state}</span>
    <span class=""population>${indi.population}</span>
    </li>
  `;
    })
    .join("");
  suggestion.innerHTML = html;
}

