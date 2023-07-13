Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("health check", () => {
  it("loads", () => {
    cy.visit("/");
    cy.matchImageSnapshot();
  });

  it("has a login button", () => {
    cy.visit("/signin");
    cy.get(".signup-page-container .continue-button button")
      .should("be.visible")
      .matchImageSnapshot();
  });
});
