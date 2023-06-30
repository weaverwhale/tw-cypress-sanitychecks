import "cypress-network-idle";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

before(() => {
  cy.clearCache();
  cy.login();
  cy.madisonPod();
});

describe("summary page", () => {
  it("should load", () => {
    cy.goToSummaryPage();
  });

  it("should have menu items", () => {
    cy.goToSummaryPage();
    cy.get('div[data-tw-cs="pinned"]').should("be.visible");
  });
});
