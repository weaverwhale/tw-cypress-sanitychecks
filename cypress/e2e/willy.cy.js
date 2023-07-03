Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

before(() => {
  cy.clearCache();
  cy.login();
});

describe("willy page", () => {
  it("should have an input", () => {
    cy.visit("/willy");
    cy.wait();
    cy.get("#willy-input").should("be.visible");
  });
});
