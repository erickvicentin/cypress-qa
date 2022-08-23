describe('Interactuando con elementos', () => {

    it('Click normal', () => {
        cy.visit('/buttons')
        cy.once('uncaught:exception', () => false);
        cy.get('button').eq(3).click()
        cy.get('#dynamicClickMessage')
            .should('be.visible')
            .and('contain','You have done a dynamic click')
    })

    it('Click derecho', () => {
        cy.visit('/buttons')
        cy.once('uncaught:exception', () => false);
        cy.get('#rightClickBtn').rightclick()
        cy.get('#rightClickMessage')
            .should('be.visible')
            .and('contain','You have done a right click')
    })

    it('Click doble', () => {
        cy.visit('/buttons')
        cy.once('uncaught:exception', () => false);
        cy.get('#doubleClickBtn').dblclick()
        cy.get('#doubleClickMessage')
            .should('be.visible')
            .and('contain','You have done a double click')
    })

    it('Force click', () => {
        cy.visit('/dynamic-properties')
        cy.once('uncaught:exception', () => false);
        cy.get('#enableAfter').click({timeout: 5000, force: true})
    })

    it.only('Click por posicion', () => {
        cy.visit('/buttons')
        cy.once('uncaught:exception', () => false);
        cy.get('button').eq(3).parent().parent().click('bottom')
        cy.get('button').eq(3).parent().parent().click('topRight')
        cy.get('button').eq(3).parent().parent().click(5,70)
    })
})