describe('Basic Authentication with text verification', () => {
  it('passes', () => {
    cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    cy.contains('Congratulations! You must have the proper credentials.').should('be.visible')


  })
})