Cypress.Commands.add('login', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.visit('/')
  cy.get('[type="text"]').type(username)
  cy.get('[type="password"]').type(password)
  cy.contains('Войти').click()
})

Cypress.Commands.add('loginWithEnter', (username, password) => {
  cy.clearCookies()
  cy.clearLocalStorage()
  cy.visit('/')
  cy.get('[type="text"]').type(username)
  cy.get('[type="password"]').type(password)
  cy.contains('Войти').type('{enter}')
})