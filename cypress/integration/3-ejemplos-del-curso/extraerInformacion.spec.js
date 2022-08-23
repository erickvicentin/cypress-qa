describe('Interactuando con inputs de texto', () => {
    let texto;

    it('Extrayendo informacion', function() {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#firstName').as('nombre')
        cy.get('@nombre').type('Carlos')

        cy.get('@nombre').then( $nombre => {
            texto = $nombre.val()
            expect(texto).to.eq('Carlos')
        })

        cy.get('@nombre').invoke('val').should('equal', 'Carlos')
        cy.get('@nombre').invoke('val').as('nombreGlobal')
    })

    it('Compartir informacion', function() {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
        cy.get('#lastName').as('apellido')
        cy.get('@apellido').type(texto)
        cy.get('#firstName').type(this.nombreGlobal)
    })
})