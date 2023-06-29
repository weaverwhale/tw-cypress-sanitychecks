Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("The site is alive", () => {
  it("successfully loads", () => {
    cy.visit("https://app.triplewhale.com/");
  });
});
