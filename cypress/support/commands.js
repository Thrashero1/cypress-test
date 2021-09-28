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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const searchForm = ':nth-child(3) > .container > .row > .col-12 > #searchform > .search-input > #s'

export function runSearch(searchText, resultTtext) {
    cy.get('.search-toggler > .fa').click()
    cy.get(searchForm).should('be.enabled')
    cy.scrollTo('top')
    cy.get(searchForm).first().type(searchText, {force: true})
    cy.get('#searchsubmit').click({force: true})
    cy.get('h1').should('contain.text', resultTtext)
}

Cypress.Commands.add('runSearch', runSearch)

export function coinDrop(search, result) {
    cy.get('.lang-select').click()
    cy.get(search).click()
    cy.get('#listbutton').click()
    cy.get('h1').should('contain.text', result)
}

Cypress.Commands.add('coinDrop', coinDrop)