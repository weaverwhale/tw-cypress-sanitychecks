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

function goToWilly() {
  cy.get(".lighthouse-wrapper div > svg").click();
  cy.waitForNetworkIdle(1000);
}

describe("Willy", () => {
  it("has an input", () => {
    cy.login();
    goToWilly();
    cy.get("#willy-input").should("be.visible");
  });

  it("tries to answer our question", () => {
    cy.login();
    goToWilly();
    cy.get("#willy-input").type("How are you?{enter}");
    cy.get('span[aria-label*="Avatar"]').should("be.visible");
  });
});
