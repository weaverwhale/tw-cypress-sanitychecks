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

describe("health check", () => {
  it("loads", () => {
    cy.visit("/");
    cy.waitForNetworkIdle(1000);
  });

  it("logs in", () => {
    cy.login();
  });
});
