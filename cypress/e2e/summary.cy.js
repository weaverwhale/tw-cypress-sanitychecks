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
    cy.waitForNetworkIdle(100);
    cy.matchImageSnapshot();
  });

  it("has a menu item", () => {
    cy.visit("/summary");
    cy.get(".menuItem").matchImageSnapshot();
  });
});
