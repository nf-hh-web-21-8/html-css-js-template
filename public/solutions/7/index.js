import html from "../../static/scripts/html.js";

console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 7  ┃
┗━━━━━━━━━━━━━━┛

1. Fetch all Marvel characters from '/api/marvel.json'
- use async and  await
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await
- List all names of the characters

2. Create a simple card for each character
- Add a simple styling for each card
- Display all cards in a responsive grid 
`);

const root = document.querySelector("#root");

async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error_) {
    console.error(error_);
    return [];
  }
}

async function createCards() {
  const data = await getData("/api/marvel.json");
  console.log(data);
  root.innerHTML = html`
    <div class="Cards">
      ${data
        .map(
          item => html`<div class="Card">
            <h2>${item.name}</h2>
            <figure class="Card-media">
              <img src="${item.image}" alt="${item.name}" />
            </figure>
          </div>`
        )
        .join("")}
    </div>
  `;
}

createCards();
