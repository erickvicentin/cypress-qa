/// <reference types="Cypress" />

describe('Implementando Hooks', () => {

    before( () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
    })

    after( () => {
        cy.visit('/')
    })  

    it('Prueba con hooks 1', () => {
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
    })

    it('Prueba con hooks 2', () => {
        cy.get('#firstName').then(elto => {
            expect(elto).to.be.visible
            expect(elto).to.have.attr('placeholder', 'First Name')
        })
    })
})

