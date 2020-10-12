describe('Like Post', function () {
    beforeEach(function () {
        cy.Signin('sp21@email.com', 'newpw1234')

    })

    it('global feed likes count', function () {

        cy.get('.col-md-9').should('be.visible')
        cy.contains('a.nav-link', 'Global Feed').click()

        //cy.get('.article-preview').parent().find('.btn-outline-primary')
        cy.get('app-article-list button').then(function (listOfbuttons) {
            expect(listOfbuttons[5]).to.contain('0')
        })

    })

    it('Likes the Gobal Feed Post', function () {

        cy.contains('a.nav-link', 'Global Feed').click()
        cy.get('.ion-heart').eq(4).click()
        cy.get('ul>li>.nav-link').eq(3).click()
        cy.url().should('include', 'profile')
        cy.contains('Favorited Posts').click().should('not.contain', 'No articles are here... yet.')
    })
})
