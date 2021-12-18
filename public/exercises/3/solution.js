console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 3  ┃
┗━━━━━━━━━━━━━━┛

1. Add a 4 card elements to the '<div id="root"/>'
- The cards should be displayed in a responsive grid
- Each card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/

2. Add a CSS file to this folder (public/exercises/3/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
`);

/**
 * Return a random number from 0 to `n`
 * @param {number} n
 * @return {number}
 */
const random = n => Math.round(Math.random() * n);

/**
 * Return a random item from an array
 * @param {string[]} array
 * @return {string}
 */
const randomItem = array => array[random(array.length - 1)];

// We will use the arrays below to generate random names and images
// First  names
const firstNames = ["Max", "Alex", "Kim", "Joe", "Cameron"];
// Family names
const lastNames = ["Hall", "Lopez", "Burke", "Murphy", "Byrd"];
// Male and female
const sex = ["men", "women"];

const people = Array.from({ length: 4 }).map(() => ({
  firstName: randomItem(firstNames),
  lastName: randomItem(lastNames),
  photo: `https://randomuser.me/api/portraits/${randomItem(sex)}/${random(
    50
  )}.jpg`,
}));

// 1. + 3. Add the cards with random people
document.querySelector("#root").innerHTML += `
<div class="Grid">${people
  .map(
    person => `
    <div class="Card">
        <header class="Card-header">
            <h3>${person.firstName} ${person.lastName}</h3>
        </header>
        <figure class="Card-media">
            <img src="${person.photo}"/>
        </figure>
    </div>
    `
  )
  .join("")}</div>`;
