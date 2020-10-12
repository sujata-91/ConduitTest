describe('Progamatic Login', function () {

    it('will log in programmatically', function () {
        cy.visit('/')
        cy.LoginIn()
        cy.title().should('equal', 'Conduit')
    })
})