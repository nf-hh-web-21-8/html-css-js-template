console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 1  ┃
┗━━━━━━━━━━━━━━┛

1. Add a headline to the '<div id="root"/>'.
- Do not change the index.html
- Only use JavaScript.
- The Page should show "It works!"
- The Headline should use the tag '<h1/>'

2. Give the headline a className
- The headline should have the className "main-headline"

3. Add a '<style/>' element to the '<head/>'
- Do not change the index.html
- Only use JavaScript.

4. Add css to the '<style />' element
- add the following css
- the headline should be blue
`);

// 1. Get the root element
const root = document.querySelector("#root");
// Create an h1 element
const h1 = document.createElement("h1");
// Append the h1 element to the root
root.append(h1);
// Add the text to the h1
h1.innerText = "It works!";

// 2. Add a className on the h1
h1.classList.add("main-headline");

// 3. Create a style element
const style = document.createElement("style");
// Append the style element to the head
document.head.append(style);

// 4. Add the CSS to the style element
style.innerHTML = `
.main-headline {
    color: blue;
}
`;
