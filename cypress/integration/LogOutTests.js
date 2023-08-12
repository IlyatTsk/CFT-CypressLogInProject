import LoginPage from '../support/pages/LoginPage.js';
import FilesPage from '../support/pages/FilesPage.js';

context ('Проверка выхода из системы', function() {

    it('Проверка выхода из системы', () => {
       const loginPage = new LoginPage();
       const filesPage = new FilesPage();

       cy.login('admin', 'admin')
       filesPage.logOutButtonClick()

       loginPage.checkURL()
       loginPage.loginButtonShouldBeVisible()
    })
})