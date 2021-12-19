import html from "/static/scripts/html.js";

const root = document.querySelector("#root");

/**
 *
 * @param {string|number} children
 * @return {`<h1>${string}</h1>`}
 */
const h1 = children => html`<h1>${children}</h1>`;

/**
 *
 * @param {string|number} children
 * @return {`<div>${string}</h1>`}
 */
const div = children => html`<div>${children}</div>`;

root.innerHTML += h1("Hello");
root.innerHTML += div("How are you?");

/**
 * @typedef Node
 * @type {Element|string|number}
 */

/**
 *
 * @param {Node} children
 * @return {HTMLHeadingElement}
 */
const h2 = children => {
  const element = document.createElement("h2");
  element.append(children);
  return element;
};

/**
 *
 * @param children
 * @return {Text}
 */
const text = children => {
  const element = document.createTextNode(children);
  return element;
};

/**
 * @typedef ButtonProps
 * @property {{() => void}} onClick
 */

/**
 *
 * @param {ButtonProps} props
 * @param {Node} children
 * @return {HTMLButtonElement}
 */
const button = (props, children) => {
  const element = document.createElement("button");
  element.addEventListener("click", props.onClick);
  element.append(children);
  return element;
};

/**
 *
 * @param {Text} text
 * @param {string} value
 */
const updateText = (text, value) => {
  text.replaceData(0, text.data.length, value);
};

let state = 0;
const counter1 = text(state);
const counter2 = h2(state);
root.append(
  h2(counter1),
  counter2,
  button(
    {
      onClick() {
        const nextState = `${++state}`;
        updateText(counter1, nextState);
        counter2.innerText = nextState;
      },
    },
    "Click me"
  )
);
