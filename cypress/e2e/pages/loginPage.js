export class LoginPage {

  typeUserName (userName) {
    cy.get('.')
      .should('be.empty')
      .type(userName)
      .should('have.value', userName);
  }

  typePassword (password) {
    cy.get('')
      .should('be.empty')
      .type(password)
      .should('have.value', password);
  }

  clickLoginButton () {
    cy.get('.data-modal-url="/login')
      .click();
  }

  clickLoginModalButton () {
    cy.get('.button-login login-user ga4-event')
      .click();
  }


}
