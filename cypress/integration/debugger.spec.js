/// <reference types="Cypress" />

describe('Debuggeando.', () => {

    it('Debugger 1', () => {
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
                //console.log(`Soy la longitud ${inputs.length}`)
                //cy.task('log', inputs.length)
                cy.pause() //pausa la ejecucion.
                cy.get('input[placeholder="First Name"]').then(console.log)
                cy.get('input[placeholder="First Name"]').debug() //devuelve en la consola datos del elto
                cy.log('Soy la longitud', inputs.length)
            })
    })
})