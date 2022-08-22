/// <reference types="Cypress" />

describe('Guardando elementos.', () => {

    it('Evitar repeticion', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#firstName')
            .parents('form')
            .then( (form) => {
                const inputs = form.find('input')
                const divs = form.find('div')
                const labels = form.find('label')

                expect(inputs.length).to.eq(15, 'Great!!')
                cy.wrap(inputs).should('have.length', 15)
                //expect(divs.length).to.eq(12)
            })
    })
})