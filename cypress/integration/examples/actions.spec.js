/// <reference types="Cypress" />

it("Site opens", () => {
  cy.visit("Open", {
    onBeforeLoad: win => {
      win.sessionStorage.clear();
    }
  });
});

it("Side menu works", () => {
  cy.get(".mat-button-wrapper > .mat-icon").click();

  cy.get(".mat-drawer-backdrop").click();
});
