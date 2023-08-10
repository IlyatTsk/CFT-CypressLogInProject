class FilesPage {

    elements = {
        logOutButton: () => cy.get('#logout > span')
    }

    checkURL(){
        cy.url().should('eq', 'http://51.250.1.158:49153/files/')
    }

    logOutButtonClick(){
    this.elements.logOutButton().click()
    }
}
    export default FilesPage ;