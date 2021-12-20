console.log(`
┏━━━━━━━━━━━━━━┓
┃  EXERCISE 4  ┃
┗━━━━━━━━━━━━━━┛

1. Add a '<form />' to the '<div id="root"/>'
- The form should have an '<input type="email"/>'
- The form should have a '<button type="submit" />'
- The '<button type="submit" />' should read 'Subscribe'

2. Handle the '<form />' via JavaScript
- Log the email-address in the browser console when the form is submitted

3. save the email-address in the 'localStorage'
- Show a text that reads "Thank you for subscribing"
- Remove the form

4. On reload show a text "You are subscribed" if the localStorage key exists
- The form should not be visible
`);

const STORAGE_KEY = "email";
const stored = window.localStorage.getItem(STORAGE_KEY);
const root = document.querySelector("#root");

if (stored) {
  const note = document.createElement("p");
  note.innerHTML = "You are subscribed";
  root.append(note);
} else {
  const form = document.createElement("form");

  root.append(form);

  form.innerHTML = `
<label>
    Email:
    <input name="email" type="email"/>
</label>
<button type="submit">Subscribe</button>
`;

  form.addEventListener("submit", event_ => {
    event_.preventDefault();
    const formData = new FormData(event_.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps.email);
    window.localStorage.setItem(STORAGE_KEY, formProps.email);
    const note = document.createElement("p");
    note.innerHTML = "Thank you for subscribing";
    form.remove();
    root.append(note);
  });
}
