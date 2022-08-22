describe('Navegacion', () => {

    it('Visitar Platzi', () => {
        cy.visit('https://www.platzi.com')
    })

    it('Recargar pagina', () => {
        cy.reload()
    })

    it('Forzar recarga', () => {
        cy.visit('www.google.com.ar')
        cy.reload(true)
    })

    it.only('Navegar hacia atras', () => {
        cy.visit('https://www.platzi.com')
        cy.visit('https://www.platzi.com/precios')
        cy.go('back')
        cy.go('forward')
    })
})