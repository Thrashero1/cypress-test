/// <reference types="Cypress" />

describe('A basic starting test', () => {
    
    beforeEach(() =>{
        cy.intercept('POST', '/wp-admin/admin-ajax.php').as('page_loaded');
        cy.visit('/');
        cy.wait('@page_loaded', {timeout: 60000})
    })

    it('verifies a search', () => {
        cy.runSearch('English test', 'Suchergebnisse für: ')
    })

    it('verifies the use of the coind dropdown', () => {
        cy.coinDrop('#a > :nth-child(2)','Ethereum Kaufen Anleitung 2021')
    })
})