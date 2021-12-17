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

// 1.+ 2.
document.querySelector("#root").innerHTML += `
<h1 class="main-headline">It works!</h1>
`;

// 3. + 4.
document.head.innerHTML += `<style>
.main-headline {
    color: blue;
}
</style>`;
