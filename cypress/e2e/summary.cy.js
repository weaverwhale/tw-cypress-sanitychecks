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

describe("summary page", () => {
  it("loads", () => {
    cy.visit("/summary");
    cy.waitForNetworkIdle(1000);
  });

  it("has a menu item", () => {
    cy.visit("/summary");
    cy.waitForNetworkIdle(1000);
    cy.get(".menuItem").should("be.visible");
  });
});
