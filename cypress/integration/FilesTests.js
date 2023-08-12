import spok from 'cy-spok'
import FilesPage from '../support/pages/FilesPage.js'

context ('Интеграционные тесты с файлом', function() {

    beforeEach(function () {
        cy.intercept('GET', '**/resources/', {fixture: 'resourcesempty.json'}).as('resources')
        cy.intercept('GET', '**/usage/', {fixture: 'usage.json'}).as('usage')
        cy.intercept('POST', '**/login').as('login')
        cy.login('admin', 'admin')
    })

    it('Проверка закрытия файла', () => {
    const filesPage = new FilesPage();

        cy.wait('@resources')
        cy.wait('@usage')

        filesPage.popovFolderDblClick()
        filesPage.popovFileDblClick()
        filesPage.openFileShouldHaveText()
        filesPage.closeButtonClick()

        filesPage.myFilesButtonShouldBeVisible()
    })

    it('Проверка переименования файла', () => {
    const filesPage = new FilesPage();

        cy.wait('@resources')
        cy.wait('@usage')

        filesPage.popovFolderDblClick()
        filesPage.popovFileClick()

        filesPage.renameTest()
    })

    it('Проверка копирования файла', () => {
    const filesPage = new FilesPage();

        cy.wait('@resources')
        cy.wait('@usage')

        filesPage.popovFolderDblClick()
        filesPage.popovFileClick()

        filesPage.copyTest()
    })

    it.only('Проверка удаления файла', () => {
    const filesPage = new FilesPage();

        cy.wait('@resources')
        cy.wait('@usage')

        filesPage.popovFolderDblClick()
        filesPage.popovFileClick()

        filesPage.deleteTest()
    })
})