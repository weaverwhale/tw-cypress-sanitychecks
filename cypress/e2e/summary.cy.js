Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

before(() => {
  cy.clearCache();
  cy.login();
  cy.madisonPod();
});

describe("summary page", () => {
  it("should have menu items", () => {
    cy.visit(
      "https://app.triplewhale.com/summary?shop_domain=madisonbraids.myshopify.com"
    );
    cy.get('div[data-tw-cs="pinned"]').should("be.visible");
  });
});
