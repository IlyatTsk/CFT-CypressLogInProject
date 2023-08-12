class FilesPage {

    elements = {
        logOutButton: () => cy.get('#logout > span'),
        popovFolder: () => cy.get('[aria-label="popov"] > :nth-child(1) > .material-icons'),
        popovFile: () => cy.get(':nth-child(3) > .item > :nth-child(2) > .name'),
        closeButton: ()=> cy.get('[aria-label="Close"] > .material-icons'),
        myFilesButton: () => cy.get('[aria-label="My files"] > span'),
        renameButton: () => cy.get('[aria-label="Rename"] > .material-icons'),
        textField: () => cy.get('.input'),
        renameButtonOk:() => cy.get('[type="submit"]'),
        copyButton: () => cy.get('#copy-button > .material-icons'),
        copyButtonOk: () => cy.get('[aria-label="Copy"]'),
        copyFile: () => cy.get('[aria-label="popov(1)"] > :nth-child(2) > .name'),
        deleteButton: () => cy.get('#delete-button > .material-icons'),
        deleteButtonOk: () => cy.get('.button--red')
    }

    checkURL(){
        cy.url().should('eq', 'http://51.250.1.158:49153/files/')
    }

    logOutButtonClick(){
        this.elements.logOutButton().click()
    }

    popovFolderDblClick(){
        this.elements.popovFolder().dblclick()
    }

    popovFileDblClick(){
        this.elements.popovFile().dblclick()
    }

    popovFileClick(){
        this.elements.popovFile().click()
    }

    openFileShouldHaveText(){
        cy.contains('.ace_content', 'popov')
    }

    closeButtonClick(){
        this.elements.closeButton().click()
    }

    myFilesButtonShouldBeVisible(){
        this.elements.myFilesButton().should('be.visible')
    }

    renameTest(){
        this.elements.renameButton().click()
        this.elements.textField().clear().type('ivanov')
        this.elements.renameButtonOk().click()
        this.elements.popovFile.should('have.text', 'ivanov')
    }

    copyTest(){
        this.elements.copyButton().click()
        this.elements.copyButtonOk().click()
        this.elements.copyFile().should('be.visible')
    }

    deleteTest(){
        this.elements.copyButton().click()
        this.elements.copyButtonOk().click()
        cy.get('[aria-label="popov(1)"] > :nth-child(2)').click({ force: true })
        this.elements.deleteButton().click()
        this.elements.deleteButtonOk().click()
    }
}
    export default FilesPage ;