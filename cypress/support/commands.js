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
  // does this actually work?
  cy.clearAllCookies();
  cy.clearAllLocalStorage();
  cy.clearAllSessionStorage();
});

Cypress.Commands.add("login", () => {
  cy.fixture("login.json").then((user) => {
    const { email, password } = user;
    cy.visit("/summary");
    cy.waitForNetworkIdle(100);

    cy.location().then((location) => {
      if (location.href.includes("signin")) {
        // login
        cy.get('.signup-page-container input[type="email"]').type(email);
        cy.get('.signup-page-container input[type="password"]').type(password);
        cy.get(".signup-page-container .continue-button button").click();
      }

      cy.waitForNetworkIdle(100);

      // click madisonbraids pod
      if (location.href.includes("pod")) {
        cy.get("h3").contains("Madisonbraids").click();
      }

      // for admin only
      if (location.href.includes("all-shops")) {
        cy.visit("/summary?shop-id=madisonbraids.myshopify.com");
      }
    });
  });
});

Cypress.Commands.add("stubResponses", () => {
  [
    "ingest.sentry.io",
    "app.posthog.com",
    "datadoghq.com",
    "firestore",
    "firebase",
    "canny.io",
    "intercom",
  ].forEach((domain) => {
    cy.intercept("GET", `*${domain}*`, []).as("stub_" + domain);
    cy.intercept("POST", `*${domain}*`, []).as("stub_" + domain);
  });
});
