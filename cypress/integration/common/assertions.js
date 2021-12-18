import { Then } from "cypress-cucumber-preprocessor/steps";

Then(/^the sidebar is (not )?visible$/, function (not) {
  cy.get(`[data-test-id="sidebar"]`).should(
    not ? "not.be.visible" : "be.visible"
  );
});
