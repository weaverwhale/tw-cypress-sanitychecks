import "cypress-network-idle";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

before(() => {
  cy.clearCache();
  cy.login();
});

describe("summary page", () => {
  it("should have menu items", () => {
    cy.goToSummaryPage();
    cy.get('div[data-tw-cs="pinned"]').should("be.visible");
  });
});
