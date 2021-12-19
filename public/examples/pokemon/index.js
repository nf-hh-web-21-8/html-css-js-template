import html from "/static/scripts/html.js";

const root = document.querySelector("#root");
const LOCAL_STORE_KEY = "pokemon";

function makeCard(data) {
  const { abilities, name, sprites, stats } = data.pokemon;
  const { color, evolves_from_species, flavor_text_entries, id } = data.pokedex;
  const artwork = sprites.other.dream_world.front_default;
  const hp = stats.find(stat => stat.stat.name === "hp");
  const [{ flavor_text: flavorText }] = flavor_text_entries.filter(
    ({ language: { name: language } }) => language === "en"
  );
  return html`
    <article class="Card ${color.name}">
      <header class="Card-header">
        <small class="Evolution">
          <span>
            ${evolves_from_species
              ? `Evolves from ${evolves_from_species.name}`
              : ""}</span
          >
          <span>|</span></small
        >
        <h3 class="Card-title">${name.trim()}</h3>
        <div class="HealthPoints">${hp.base_stat} HP</div>
      </header>
      <figure class="Card-media">
        <img data-js="image" src="${artwork}" alt="${name}" />
      </figure>
      <div class="Card-content">
        <h3 class="Ability">Ability: ${abilities[0].ability.name}</h3>
      </div>
      <div class="Card-footer">
        <small class="Description"
          >${flavorText} <strong> #${id}</strong></small
        >
        <small class="Credits">Data via https://pokeapi.co/</small>
      </div>
    </article>
  `;
}

async function getData(key) {
  const cache = JSON.parse(window.localStorage.getItem(key));
  if (cache) {
    console.log("From cache");
    console.log(cache);
    return cache;
  }
  try {
    console.log("Fetching");
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/2");
    const parsed = await response.json();
    console.log(parsed);
    const { pokemon_entries } = parsed;
    // The previous line could also be written like the next line. They have the same result.
    // const pokemon_entries = parsed.pokemon_entries;
    const entries = pokemon_entries.splice(0, 20);
    const data = await Promise.all(
      entries.map(async entry => {
        console.log(`fetching data for ${entry.pokemon_species.name}`);
        const response_ = await fetch(entry.pokemon_species.url);
        const pokedex = await response_.json();
        console.log(pokedex);
        const response__ = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokedex.id}`
        );
        const pokemon = await response__.json();
        return {
          pokedex,
          pokemon,
        };
      })
    );
    window.localStorage.setItem(key, JSON.stringify(data));

    return data;
  } catch (error_) {
    console.error(error_);
  }
}

/**
 *
 * @param a
 * @param b
 * @return {number}
 * @example
 * [{name: "Bob"}, {name: "Alex"}].sort(sortByName)
 * // [{name: "Alex"}, {name: "Bob"}]
 */
function sortByName(a, b) {
  return a.pokemon.name < b.pokemon.name ? -1 : 1;
}

function sortByHP(a, b) {
  const hpA = a.pokemon.stats.find(stat => stat.stat.name === "hp")?.base_stat;
  const hpB = b.pokemon.stats.find(stat => stat.stat.name === "hp")?.base_stat;
  return hpA - hpB;
}

const sortingAlgorithms = {
  unsorted: () => 0,
  sortByName,
  sortByHP,
};

const sortingOrders = ["descending", "ascending"];

async function render() {
  const data = await getData(LOCAL_STORE_KEY);
  let colors = ["all"];
  for (const item of data) {
    const { color } = item.pokedex;
    if (!colors.includes(color.name)) {
      colors.push(color.name);
    }
  }
  colors = colors.sort();

  const filters = document.createElement("div");
  const results = document.createElement("div");
  const sortingLabel = document.createElement("label");
  const orderingLabel = document.createElement("label");
  const colorFilterLabel = document.createElement("label");
  const sorting = document.createElement("select");
  const ordering = document.createElement("select");
  const colorFilter = document.createElement("select");

  let color = colors[0];
  let order = sortingOrders[0];
  let algorithm = sortingAlgorithms[0];

  // Add sorting options
  sorting.innerHTML += Object.keys(sortingAlgorithms)
    .map(key => html`<option value="${key}">${key}</option>`)
    .join("");

  // Listen to changes
  sorting.addEventListener("change", event_ => {
    const key = event_.target.value;
    algorithm = sortingAlgorithms[key];
    sortAndFilter();
  });

  // Add ordering options
  ordering.innerHTML = sortingOrders
    .map(key => html`<option value="${key}">${key}</option>`)
    .join("");
  // Listen to changes
  ordering.addEventListener("change", event_ => {
    order = event_.target.value;
    sortAndFilter();
  });

  // Add color-filter options
  colorFilter.innerHTML = colors
    .map(key => html`<option value="${key}">${key}</option>`)
    .join("");

  // Listen to changes
  colorFilter.addEventListener("change", event_ => {
    color = event_.target.value;
    sortAndFilter();
  });

  // Create the HTML
  // This section will build the HTML
  // These elements need to remain the same instance
  root.append(filters, results);
  filters.append(sortingLabel, orderingLabel, colorFilterLabel);
  sortingLabel.append("Sort", sorting);
  orderingLabel.append("Order", ordering);
  colorFilterLabel.append("Filter", colorFilter);

  function sortedAndFiltered(algorithm, order, color) {
    let items = data.sort(algorithm);
    // Reverse array if order ascending
    if (order === "ascending") {
      items = items.reverse();
    }
    // Filter by colors if not all
    if (color !== "all") {
      items = items.filter(item => item.pokedex.color.name === color);
    }

    // Replace the HTML
    return html`<div class="Cards">
      ${items.map(entry => makeCard(entry)).join("")}
    </div>`;
  }

  function sortAndFilter() {
    results.innerHTML = sortedAndFiltered(algorithm, order, color);
  }

  // Set initial HTML
  sortAndFilter();
}

void render();
