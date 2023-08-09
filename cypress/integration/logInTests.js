import LoginPage from '../support/pages/LoginPage.js';
import FilesPage from '../support/pages/FilesPage.js';

context ('Проверка авторизации', function() {

    beforeEach(function () {
        cy.visit('/')
    })

   it('Проверка успешного входа', ()=> {
       const loginPage = new LoginPage();
       const filesPage = new FilesPage();

       cy.login('admin', 'admin')
       filesPage.checkURL()
   })

    it('Проверка сообщения неверных данных, при введении невалидного пароля', ()=> {
        const loginPage = new LoginPage()

        cy.login('admin', 'test')
        loginPage.errorMessageMustBeVisible()
    })

    it('Проверка сообщения неверных данных, при введении невалидного логина', ()=> {
        const loginPage = new LoginPage()

        cy.login('test', 'admin')
        loginPage.errorMessageMustBeVisible()
    })

    it('Проверка сообщения неверных данных, без введения логина и пароля', ()=> {
        const loginPage = new LoginPage()

        loginPage.logInButtonClick()
        loginPage.errorMessageMustBeVisible()
    })

    it('Проверка сообщения неверных данных, без введения пароля', ()=> {
        const loginPage = new LoginPage()

        loginPage.fillLogin('admin')
        loginPage.logInButtonClick()
        loginPage.errorMessageMustBeVisible()
    })

   it('Проверка сообщения неверных данных, без введения логина', ()=> {
       const loginPage = new LoginPage()

       loginPage.fillPassword('admin')
       loginPage.logInButtonClick()
       loginPage.errorMessageMustBeVisible()
   })

    it('Проверка выхода из системы', () => {
       const loginPage = new LoginPage();
       const filesPage = new FilesPage();

       cy.login('admin', 'admin')
       filesPage.logOutButtonClick()

       loginPage.checkURL()
       loginPage.loginButtonShouldBeVisible()
    })

    it('Проверка статус кода 200', () => {
      cy.intercept('POST', '/api/login', {
        statusCode: 200,
        body: {
          token: 'access_token'
        }
      }).as('login');

      cy.login('admin', 'admin')

      cy.wait('@login')
        .its('response.statusCode')
        .should('eq', 200);
    })
})