describe('Tipos de localizadores.', () => {
    it('Obtener por medio de un id', () => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#userEmail')
    })

    it('Obtener por medio de un atributo', () => {
        cy.get('[placeholder="First Name"]')
    })

    it('Obtener por medio de un tag', () => {
        cy.get('input')
    })

    it('Obtener por medio de un .class', () => {
        cy.get('.form-control')
    })

    it('Obtener usando contains', () => {
        cy.contains('Reading')
    })

    it('Obtener usando contains + clase', () => {
        cy.contains('.header-wrapper', 'Widgets')
    })

    it('Obtener usando parent', () => {
        //Elto padre
        cy.get('[placeholder="First Name"]').parent()
        //Eltos padres
        cy.get('[placeholder="First Name"]').parents()
        cy.get('[placeholder="First Name"]').parents().find('label')
        cy.get('form').find('label')

    })
})