describe('Fixture Data', function () {
    beforeEach('Testing', function () {
        cy.server()
        cy.Signin('sp21@email.com', 'newpw1234')
    })

    it('Stub Global Feed with data from Fixtures', function () {
        // cy.route('GET', '**/articles/feed*', '{"articles":[],"articlesCount":0}')
        cy.route('GET', '**/articles*', 'fixture:globalfeed.json')

        cy.contains('Global Feed').click()
        cy.get('div>app-article-list')
          .should('contain', 'temp file')
          .and('contain', 'temp file2')

    })
})