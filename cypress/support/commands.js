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
      cy.get("h3").contains("Madisonbraids").click();
    });
  });
});

Cypress.Commands.add("madisonPod", () => {
  cy.visit("/all-shops-admin");
  cy.wait(1000);

  // if logged in, go to madison
  cy.location().then((location) => {
    if (location.href.includes("all-shops-admin")) {
      cy.get(".search-container input").type("madison");
      cy.get(".admin-shop-card button").click();
    } else {
      cy.visit("/summary?shop-id=madisonbraids.myshopify.com");
    }
  });
});

Cypress.Commands.add("goToSummaryPage", () => {
  // go to summary page
  cy.visit("/summary?shop-id=madisonbraids.myshopify.com");
  cy.waitForNetworkIdle(100);
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
