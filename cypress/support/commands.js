// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


Cypress.Commands.add("Signin", (email, password) => {
    cy.visit('/')
    cy.contains('a.nav-link', 'Sign in').click()
    cy.contains('h1', 'Sign in')
    cy.get('input[placeholder=Email]').clear().type(email)
    cy.get('input[placeholder=Password]').clear().type(password)
    cy.get('form').submit()
})

Cypress.Commands.add("LoginIn", () => {
    
    cy.contains('a.nav-link', 'Sign in').click()
    cy.contains('h1', 'Sign in')
    cy.get('input[placeholder=Email]').clear().type('sptestki@email.com')
    cy.get('input[placeholder=Password]').clear().type('sptesting30')

    cy.get('.btn').click()
})

