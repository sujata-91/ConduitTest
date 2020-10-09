import article from '../PageObject/article'

describe('New Article Page', function () {

    beforeEach(function () {

        cy.clearLocalStorage()
        // cy.fixture('example').then(function (data) {
        //     this.data = data
        // })

    })
    const articles = new article()
    it('Creates new article page', function () {
        cy.Signin('sp21@email.com', 'newpw1234')
        // cy.visit('/')
        // cy.contains('a.nav-link', 'Sign in').click()
        // cy.get('input[placeholder=Email]').type(this.data.email)
        // cy.get('input[placeholder=Password]').type(this.data.password)
        // cy.get('.btn').should('not.be.disabled').click()

        //cy.contains('a.nav-link', this.data.username).should('be.visible')
        cy.get('.feed-toggle').should('contain', 'Your Feed')
        cy.contains('a.nav-link', 'New Article').click()

        articles.title('temporary')
        articles.description('Describe Temporary')
        articles.text('Description area')
        articles.tags('tag enter')
        articles.submit()
        cy.url().should('include', 'article')
    })

})
