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
});

describe("summary page", () => {
  it("has a menu item", () => {
    cy.login();
    cy.get(".menuItem").should("be.visible");
  });
});
