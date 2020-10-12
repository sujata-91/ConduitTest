describe('Change Username', function () {
    beforeEach(function () {
        cy.clearLocalStorage()
    })

    it('change username', function () {
        cy.Signin('sp21@email.com', 'newpw1234')

        cy.contains('a.nav-link', 'Settings').click()
        cy.url().should('include', '/settings')

        cy.get('input[placeholder = Username]').clear().type('Old Tester')
        cy.get('input[formcontrolname = password]').type('newpw1234')
        cy.get('.btn').contains('Update Settings').click()

        cy.url().should('include', '/profile')

        // cy.get('.article-preview', { timeout: 10000 }).children().should('be.visible')

    })

})