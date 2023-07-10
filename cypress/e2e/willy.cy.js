Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

beforeEach(() => {
  cy.stubResponses();
});

before(() => {
  cy.clearCache();
  cy.login();
  cy.madisonPod();
});

describe("willy page", () => {
  it("should have an input", () => {
    cy.visit("/willy");
    cy.waitForNetworkIdle(100);
    cy.get("#willy-input").should("be.visible");
  });
});
