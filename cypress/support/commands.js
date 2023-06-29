// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add("clearCache", () => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
});

Cypress.Commands.add("login", () => {
  cy.fixture("login.json").then((user) => {
    const { email, password } = user;
    cy.visit("/signin");
    cy.wait(5000);

    // login
    if (
      Cypress.$(".signin-page-container .continue-button button").length > 0
    ) {
      cy.get('.signup-page-container input[type="email"]').type(email);
      cy.get('.signup-page-container input[type="password"]').type(password);
      cy.get(".signup-page-container .continue-button button").click();
    }
  });
});

Cypress.Commands.add("madisonPod", () => {
  cy.visit("/all-shops-admin");
  cy.wait(2000);

  if (Cypress.$(".search-container input").length > 0) {
    cy.get(".search-container input").type("madison");
    cy.get(".admin-shop-card button").click();
  }
});
