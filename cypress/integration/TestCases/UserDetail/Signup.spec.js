describe('New User', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.visit('/')

    })

    it('Sign Up New User', () => {
        const username = 'test123fred'
        const email = 'sptest123redecs@email.com'
        const password = 'spteststep'

        cy.contains('a.nav-link', 'Sign up').click()

        cy.location('pathname').should('eq', '/register')
        cy.get('input[formcontrolname=username]').type(username)
        cy.get('input[placeholder=Email]').type(email)
        cy.get('input[placeholder=Password]').type(password)
        cy.get('.btn').click()

        cy.location('pathname').should('equal', '/register')
        //cy.location('pathname').should('equal', '/')
        cy.contains('a.nav-link', username).should('be.visible')
        
        cy.get('div.feed-toggle>ul>li>a.nav-link').should('have.class','active')
        

    })
    
    it('Sign Up with existing email', () => {
        const username = 'sptest'
        const email = 'sp21@email.com'
        const password = 'newpw1234'

        cy.contains('a.nav-link', 'Sign up').click()

        cy.location('pathname').should('eq', '/register')
        cy.get('input[formcontrolname=username]').type(username)
        cy.get('input[placeholder=Email]').type(email)
        cy.get('input[placeholder=Password]').type(password)
        cy.get('.btn').click()

        cy.contains('.error-messages', 'email has already been taken').should('be.visible')
    })
    
    it('Sign Up using password with less character', () => {
        const username = 'sptest'
        const email = 'sp21@email.com'
        const password = 'new'

        cy.contains('a.nav-link', 'Sign up').click()

        cy.location('pathname').should('eq', '/register')
        cy.get('input[formcontrolname=username]').type(username)
        cy.get('input[placeholder=Email]').type(email)
        cy.get('input[placeholder=Password]').type(password)
        cy.get('.btn').click()

        cy.contains('.error-messages', 'password is too short').should('be.visible')
    })
})
