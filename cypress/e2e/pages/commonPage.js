export class CommonPage {
    
  visitLink(url) {
      cy.visit(url);
    }
    
  acceptCookies(){
    cy.get('.qc-cmp2-footer qc-cmp2-footer-overlay qc-cmp2-footer-scrolled')
      .should('be.visible')
      .then(() => {
        cy.get('.css-zio1x8')
          .click();
      });

    cy.get('.qc-cmp2-summary-section')
      .should('not.exist');
    }
 
}