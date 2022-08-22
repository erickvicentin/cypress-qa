/// <reference types="Cypress" />

describe('Implementando aserciones', () => {

    it('Aserciones sobre la navegacion', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.url().should('include', 'demoqa.com')
        cy.get('#firstName').should('be.visible').and('have.attr', 'placeholder', 'First Name')
    })

    it('Aserciones sobre la navegacion 2', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#firstName').then(elto => {
            expect(elto).to.be.visible
            expect(elto).to.have.attr('placeholder', 'First Name')
        })
    })

    it.only('Aserciones sobre la navegacion 3', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#firstName').then(elto => {
            assert.equal(elto.attr('placeholder'), 'First Name')
        })
    })
})