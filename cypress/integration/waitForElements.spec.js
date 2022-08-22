describe('Esperar elementos', () => {

    beforeEach(() => {
        cy.visit('https://www.platzi.com')
    })

    it('Esperar x un tiempo definido', () => {
        cy.wait(5000)
    })

    it('Esperar x un elemento', () => {
        cy.get('.ButtonLogin-cta', {timeout: 120000})
    })

    it('Esperar x un elemento con asercion', () => {
        cy.get('.ButtonLogin-cta', {timeout: 120000}).should('be.visible')
    })
})

describe('Esperar eltos', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it.only('Deshabilitar el retry', () => {
        cy.get(':nth-child(3) > :nth-child(1) > .card-body > h5',{timeout: 0}) //deshab el retry
    })
})