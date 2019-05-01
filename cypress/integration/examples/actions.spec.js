/// <reference types="Cypress" />



  it('Deployed site opens', () => {



      cy.visit("Open", {
        onBeforeLoad: win => {
          win.sessionStorage.clear();
        }
      });

      cy.get('.mat-button-wrapper > .mat-icon').click();

      cy.get('.mat-drawer-backdrop').click();

  })


