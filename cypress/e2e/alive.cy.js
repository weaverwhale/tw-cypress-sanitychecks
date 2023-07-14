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

describe("Health checks", () => {
  it("App loads", () => {
    cy.visit("/");
    cy.waitForNetworkIdle(1000);
  });

  it("Can log in", () => {
    cy.login();
  });

  it("Can use intercom", () => {
    cy.get("#intercom-container").should("be.visible");
  });
});
