const root = document.querySelector("#root");
const url = "https://rickandmortyapi.com/api/character";
const STORAGE_KEY = "rick-and-morty";

async function getData(url, key) {
  const cache = JSON.parse(window.localStorage.getItem(key));
  if (cache) {
    console.log("From cache");
    console.log(cache);
    return cache;
  }
  try {
    console.log("Fetching");
    const response = await fetch(url);
    const data = await response.json();
    window.localStorage.setItem(key, JSON.stringify(data));
    console.log(data);
    return data;
  } catch (error_) {
    console.error(error_);
  }
}

function makeCard(data) {
  const { image, name, species } = data;
  return `
    <div class="Card">
        <header class="Card-header">
            <h3>${name}</h3>
        </header>
        <figure class="Card-media">
            <img src="${image}" alt="${name}"/>
        </figure>
        <div class="Card-content">
           <dl>
                <dt>Species</dt>
                <dd>${species}</dd>
            </dl>
        </div>
    </div>
    `;
}

async function render(container) {
  const data = await getData(url, STORAGE_KEY);
  container.innerHTML = `<div class="Cards">${data.results
    .map(character => makeCard(character))
    .join("")}</div>`;
}

void render(root);
