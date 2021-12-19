const cardSelector = `[data-js="card"]`;
const buttonSelector = `[data-js="button"]`;
const counterSelector = `[data-js="counter"]`;

// Get all cards
const cards = document.querySelectorAll(cardSelector);

// Loop through each card
cards.forEach((card, index) => {
  // Get the button and counter
  const button = card.querySelector(buttonSelector);
  const counter = card.querySelector(counterSelector);

  // Listen to clicks on the button
  button.addEventListener("click", () => {
    console.log(`Button in card ${index + 1} was clicked`);
    // If a counter exists, increase the count
    if (counter) {
      // Get the current counter
      const currentCounter = counter.innerText;
      // Parse the counter from string to number
      // If the counter does not have content, use 0 as a starting point.
      const currentCount = Number.parseInt(currentCounter || "0");
      counter.innerText = currentCount + 1;
    }
  });
});
