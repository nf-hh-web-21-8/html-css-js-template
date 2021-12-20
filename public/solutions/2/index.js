console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 2  ┃
┗━━━━━━━━━━━━━━┛

1. Add a card element to the '<div id="root"/>'
- The card should have a '<header/>'
- The '<header/>' should have a '<h3/>'
- The '<h3/>' should read a random name. (You can get inspirations from https://randomuser.me/)
- The card should have an '<image/>'
- The '<image/>' should have a 'src' and 'alt' attribute
- Add a random image from https://randomuser.me/
- The card should have a content area
- The content area should have a '<h4/>'
- The '<h4/>' should read "My hobbies"
- The content area should have a '<ul/>' with an '<li/>' for each hobby

2. Add a CSS file to this folder (public/exercises/2/style.css)
- link your HTML to your CSS file
- Set the 'box-sizing' to 'border-box' for all elements
- Remove the margin from the body

3. Add classes to all elements of your card
- Add styling to the CSS file
- the card should have a dark-mode and light-mode
- When you change your preferred color-mode in your macOS preferences, the card should adjust to the mode
- Choose a font from https://fonts.google.com/
- Use the font for your card
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

// 1. + 3. Add the card with random people
document.querySelector("#root").innerHTML += `
<div class="Card">
    <header class="Card-header">
        <h3>${randomItem(firstNames)} ${randomItem(lastNames)}</h3>
    </header>
    <figure class="Card-media">
        <img src="https://randomuser.me/api/portraits/${randomItem(
          sex
        )}/${random(50)}.jpg"/>
    </figure>
    <div>
        <h4>My hobbies</h4>
        <ul>
            <li>Cycling</li>
            <li>Dancing</li>
            <li>Rock climbing</li>
        </ul>
    </div>
</div>
`;
