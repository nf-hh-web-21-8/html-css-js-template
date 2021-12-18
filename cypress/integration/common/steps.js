import { Given, When } from "cypress-cucumber-preprocessor/steps";

Given(/^the user is on Exercise (\d+)$/, function (n) {
  cy.visit(`/exercises/${n}/`);
});

Given(/^the sidebar is open$/, function () {
  const sidebar = cy.get(`[data-test-id="sidebar"]`);
  sidebar.invoke("addClass", "isOpen");
  localStorage.setItem("sidebar", "open");
});

Given(/^the sidebar is closed$/, function () {
  const sidebar = cy.get(`[data-test-id="sidebar"]`);
  sidebar.invoke("removeClass", "isOpen");
  localStorage.setItem("sidebar", "closed");
});

When(/^the user clicks the (.*)$/, function (selector) {
  cy.get(`[data-test-id=${selector}]`).click();
});

When(/^the user reloads the page$/, function () {
  cy.window().reload();
});
