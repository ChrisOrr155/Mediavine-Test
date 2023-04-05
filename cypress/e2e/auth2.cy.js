describe('login auth', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    // Invalid Username
    .get('#username').click()
    .get('#username').type('Error')
    .get('#password').click()
    .get('#password').type('1234')
    .get('.fa').click()
        cy.contains('Your username is invalid!');

// Invalid Password
  cy.url().should('contains', 'https://the-internet.herokuapp.com/login')
    .get('body').click()
    .get('#username').click()
    .get('#username').type('tomsmith')
    .get('#password').click()
    .get('#password').type('SuperSecretPassword!!')
    .get('.fa').click();
      cy.contains('Your password is invalid!');

// Accepted
  cy.url().should('contains', 'https://the-internet.herokuapp.com/login')
    .get('body').click()
    .get('#username').click()
    .get('#username').type('tomsmith')
    .get('#password').click()
    .get('#password').type('SuperSecretPassword!')
    .get('.fa').click();
        cy.url().should('contains', 'https://the-internet.herokuapp.com/secure');

  })
})