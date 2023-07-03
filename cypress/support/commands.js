// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
import "cypress-network-idle";

Cypress.Commands.add("clearCache", () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
});

Cypress.Commands.add("login", () => {
  cy.fixture("login.json").then((user) => {
    const { email, password } = user;
    cy.visit("/signin");
    cy.waitForNetworkIdle(100);
    // login
    cy.location().then((location) => {
      if (location.href.includes("signin")) {
        cy.get('.signup-page-container input[type="email"]').type(email);
        cy.get('.signup-page-container input[type="password"]').type(password);
        cy.get(".signup-page-container .continue-button button").click();
      }
    });
  });
});

Cypress.Commands.add("goToSummaryPage", () => {
  // go to summary page
  cy.visit("/summary?shop-id=madisonbraids.myshopify.com");
  cy.waitForNetworkIdle(100);
});
