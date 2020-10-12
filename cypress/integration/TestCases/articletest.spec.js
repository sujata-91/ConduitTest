
describe('New Article Page', function () {
    beforeEach(function () {
        cy.clearLocalStorage()
        cy.fixture('example').then(function (data) {
            this.data = data
        })

    })

    it('Creates new article page', function () {
        cy.visit('/')
        cy.contains('a.nav-link', 'Sign in').click()

        cy.get('input[placeholder=Email]').type(this.data.email)
        cy.get('input[placeholder=Password]').type(this.data.password)

        cy.get('.btn').should('not.be.disabled').click()

        cy.contains('a.nav-link', this.data.username).should('be.visible')

        cy.contains('a.nav-link', 'New Article').click()

        cy.get('input[placeholder~=Article]').should('not.have.class', 'invalid').type(this.data.title)
        cy.get('input[formcontrolname=description]').should('not.have.class', 'invalid').type(this.data.description)
        cy.get('textarea[formcontrolname=body]').should('not.have.class', 'invalid').type(this.data.textbody)
        cy.get('input[placeholder~=Enter]').type(this.data.tags)

        cy.get('.btn').click()
        //cy.contains('div>h1', this.data.title)
        cy.url().should('include', 'article')
        cy.contains('a.nav-link', this.data.username).should('be.visible').click()
        cy.get('.article-preview').children().should('be.visible')
        cy.contains('a.nav-link', 'Settings').click()
        cy.get('div>.btn').contains('Or click here to logout.').click()
        cy.location('pathname').should('equal', '/')

    })

    it('Creating article page without values', function () {

        cy.Signin('sp21@email.com', 'newpw1234') //using custom command

        cy.contains('a.nav-link', 'New Article').click()

        cy.get('input[placeholder~=Article]').should('not.have.class', 'invalid').type(this.data.invalidtitle)
        cy.get('input[formcontrolname=description]').should('not.have.class', 'invalid').type(this.data.description)
        cy.get('textarea[formcontrolname=body]').should('not.have.class', 'invalid').type(this.data.textbody)
        cy.get('input[placeholder~=Enter]').type(this.data.tags)
        cy.get('fieldset>.btn').should('not.be.disabled').click()

        cy.contains('div>app-list-errors>.error-messages', "title can't be blank")
        cy.location('pathname').should('eq', '/editor')

    })

})