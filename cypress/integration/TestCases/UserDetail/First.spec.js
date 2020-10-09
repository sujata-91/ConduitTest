describe('Not Logged In', function () {

    it.skip('Visits the Site', function () {
        cy.visit('/')

        cy.contains('.banner', 'conduit')
        cy.contains('a.nav-link', 'Home')
        cy.contains('a.nav-link', 'Sign in')
        cy.contains('a.nav-link', 'Sign up')
    })
})

describe('Login', function () {
    beforeEach(function () {
        cy.clearLocalStorage()
        cy.visit('/')
    })

    it('Sign In', function () {
        cy.LoginIn()
        cy.location('pathname').should('equal', '/')
        cy.contains('a.nav-link', 'Your Feed').should('have.class', 'active')

    })

    it.skip('Sign In with valid input', function () {
        cy.contains('a.nav-link', 'Sign in').click()
        cy.contains('h1', 'Sign in')

        const user = Cypress.env('user')

        cy.get('input[placeholder=Email]').clear().type(user.email)

        cy.get('input[placeholder=Password]').clear().type(user.password)

        cy.get('.btn').click()
        cy.location('pathname').should('equal', '/')

        cy.contains('a.nav-link', user.username).should('be.visible')
        // cy.contains('a.nav-link', 'Your Feed').should('have.class', 'active')
        // cy.contains('a.nav-link', 'Global Feed').should('not.have.class', 'active')

        cy.url().should('not.contain', '/login')
    })

    it('Sign In using Invalid Email', function () {

        cy.contains('a.nav-link', 'Sign in').click()
        cy.contains('h1', 'Sign in')

        const user = Cypress.env('user')

        cy.get('input[placeholder=Email]').should('not.have.class', 'invalid').type(user.wrongemail)
        cy.get('input[placeholder=Password]').should('not.have.class', 'invalid').type(user.password)

        cy.get('.btn').should('not.be.disabled').click()

        cy.contains('div>app-list-errors', 'email or password is invalid')
        cy.url().should('contain', '/login')

    })

    it('Sign In using Invalid Password', function () {

        cy.contains('a.nav-link', 'Sign in').click()
        cy.contains('h1', 'Sign in')

        const user = Cypress.env('user')

        cy.get('input[placeholder=Email]').should('not.have.class', 'invalid').type(user.email)
        cy.get('input[placeholder=Password]').should('not.have.class', 'invalid').type(user.wrongpwd)

        cy.get('.btn').should('not.be.disabled').click()

        cy.contains('div>app-list-errors', 'email or password is invalid')
        cy.url().should('contain', '/login')

    })
})

