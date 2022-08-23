describe('Drag and drops spec! ', () => {

    it.only('Interacting with drag and drop', () => {
        cy.visit('/dragabble')
        cy.get('#dragBox')
        .trigger('mousedown', {which:1, pageX:600, pageY:100}) // Selection
        .trigger('mousemove', {which:1, pageX:700, pageY:400}) // Movement
        .trigger('mousedown', {which:1, pageX:700, pageY:400}) // Selection
        .trigger('mousemove', {which:1, pageX:900, pageY:200}) // Movement
        .trigger('mouseup') // De-selection
      })
})