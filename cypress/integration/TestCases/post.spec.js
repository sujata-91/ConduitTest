describe('Like Post', function () {
    beforeEach(function () {
        cy.Signin('sp21@email.com', 'newpw1234')
    })
    it('global feed likes count', function () {
        cy.get('.col-md-9').should('be.visible')
        cy.contains('a.nav-link', 'Global Feed').click()

        //cy.get('.article-preview').parent().find('.btn-outline-primary')
        cy.get('app-article-list button').then(function (listOfbuttons){
            expect(listOfbuttons[1]).to.contain('0')

        })

    })

     it.only('Likes the Post', function () {
    //     cy.get('.col-md-9').should('be.visible')
    //     cy.get('.navbar').children().click()
    //     cy.contains('.articles-toggle>.nav>.nav-item', 'My Posts').should('be.visible')
        cy.contains('a.nav-link', 'Global Feed').click()

       // cy.get('.article-preview').parent().find('.btn-outline-primary')

         cy.get('.btn-outline-primary').first().click()
         //cy.url().contains('/favorites')
    })




})
