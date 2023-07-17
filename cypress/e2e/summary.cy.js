Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("Summary", () => {
  it("Has menu items", () => {
    cy.login();
    cy.get(".menuItem").should("be.visible");
  });

  it("Has tiles", () => {
    cy.login();
    cy.get("div[aria-label*='summary tile']").should("exist");
  });
});
