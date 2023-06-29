Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("health check", () => {
  it("index loads", () => {
    cy.visit("/");
  });

  it("signin loads & form button is present", () => {
    cy.visit("/signin");
    cy.get(".signup-page-container .continue-button button").should(
      "be.visible"
    );
  });
});
