class LoginPage {

    elements = {
        logInButton: () => cy.contains('Войти'),
        inputLogin: () => cy.get('[type="text"]'),
        inputPassword: () => cy.get('[type="password"]'),
        fileImage: () => cy.get('img'),
        errorMessage: () => cy.contains('Неверные данные')
    }

    logInButtonClick() {
        this.elements.logInButton().click()
    }

    fillLogin(value) {
        this.elements.inputLogin().type(value)
    }

    fillPassword(value) {
        this.elements.inputPassword().type(value)
    }

    fileImageShouldBeVisible(){
        this.elements.fileImage().should('be.visible')
    }

    errorMessageMustBeVisible(){
        this.elements.errorMessage().should('be.visible')
    }

    loginButtonShouldBeVisible(){
        this.elements.logInButton().should('be.visible')
    }

    checkURL(){
        cy.url().should('eq', 'http://51.250.1.158:49153/login')
    }
}
    export default LoginPage ;