describe('New User', () => {
    beforeEach(() => {
        cy.clearLocalStorage()
        cy.LoginIn()
    })

    it('Sign Up New User', () => {
        cy.location('pathname').should('equal', '/')
        cy.get('.feed-toggle>ul>li>a.nav-link').should('have.class', 'active')
       
    })

    
})