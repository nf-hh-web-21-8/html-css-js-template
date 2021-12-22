import html from "/static/scripts/html.js";

console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 6  ┃
┗━━━━━━━━━━━━━━┛

1. Fetch 10 users from https://randomuser.me/api/
- you can request a speciffic number of results with a query-parameter
  Use https://randomuser.me/api/?results=10 (you can adjust the number '10')
- Look up how the fetch api works: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

2. Display all user names in a list.
`);

const root = document.querySelector("#root");

function getData(url) {
  fetch(url)
    .then(response => response.json())
    .then(json => {
      console.log(json);
      const { results } = json;
      console.log(results);
      root.innerHTML = html`
        <ul>
          ${results
            .map(
              result => html`<li>${result.name.first} ${result.name.last}</li>`
            )
            .join("")}
        </ul>
      `;
    });
}

getData("https://randomuser.me/api/?results=10");
