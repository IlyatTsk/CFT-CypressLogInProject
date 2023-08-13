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
        deleteButtonOk: () => cy.get('.button--red'),
        newFolderButton: () => cy.get('[aria-label="New folder"]'),
        textFieldNewDirectory: () => cy.get('.input'),
        createButton: () => cy.get('[aria-label="Create"]'),
        moveButton: () => cy.get('#move-button > .material-icons'),
        chooseDirectoryButton: () => cy.get('li'),
        newFolderDirectory: () => cy.get('[aria-label="arnold"]'),
        moveButtonOk: () => cy.get('[aria-label="Move"]')
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

    myFilesButtonClick(){
        this.elements.myFilesButton().click({ force: true })
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
        cy.get('#listing').contains('popov(1)').click()
        this.elements.deleteButton().click()
        this.elements.deleteButtonOk().click()
    }

    createNewDirectory(){
        this.elements.newFolderButton().click()
        this.elements.textFieldNewDirectory().clear().type('NewDirectory')
        this.elements.createButton().click()
    }

    moveTest(){
        this.elements.moveButton().click()
        this.elements.chooseDirectoryButton().dblclick()
        this.elements.textFieldNewDirectory().click()
        this.elements.moveButtonOk().click()
        cy.contains('popov(1)')
    }
}
    export default FilesPage ;