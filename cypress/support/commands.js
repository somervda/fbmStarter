// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// *******************************************************************************
// Component test commands (Reused through test suite)
//  - checks for component access and component content
// *******************************************************************************

Cypress.Commands.add("verifyAboutComponent", () => {
  cy.get("#mainMenu").click();
  cy.get("#mainMenuAbout").click();
  // Verify component was rendered
  cy.url().should("include", "about");
  cy.get(".mat-card-title").contains("About");
});

Cypress.Commands.add("verifyHomeComponent", () => {
  cy.get("#mainMenu").click();
  cy.get("#mainMenuHome").click();
  // Verify component was rendered
  cy.get(".mat-card-title").contains("Code");
});
