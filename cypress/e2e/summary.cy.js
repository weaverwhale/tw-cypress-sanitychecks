import "cypress-network-idle";

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("summary page", () => {
  it("should have menu items", () => {
    cy.clearCache();
    cy.login();
    cy.goToSummaryPage();
    cy.get('div[data-tw-cs="pinned"]').should("be.visible");
  });
});
