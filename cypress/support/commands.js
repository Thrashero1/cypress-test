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