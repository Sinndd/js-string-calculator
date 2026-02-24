/// <reference types="cypress" />

context('first scenario', () => {

    beforeEach(() => {
        cy.visit('../../src/index.html')
    })

    it('displays Uftu for Test with key = 1', () => {
        cy.dataCy('cypher-key').type('1')
        cy.dataCy('cypher-message').type('Test')
        cy.dataCy('cypher-btn').click()

        cy.dataCy('result').should('have.text', 'Uftu')
    })
})