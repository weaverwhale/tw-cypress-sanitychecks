Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

beforeEach(() => {
  cy.stubResponses();
});

// before(() => {
//   cy.clearCache();
// });

describe("Health checks", () => {
  it("App loads", () => {
    cy.visit("/signin");
    cy.waitForNetworkIdle(100);
    cy.get(".login-content").should("be.visible");
  });

  it("Can log in", () => {
    cy.login();
  });

  it("Can use intercom", () => {
    cy.visit("/signin");
    cy.get(".intercom-lightweight-app-launcher-icon").should("be.visible");
  });
});
