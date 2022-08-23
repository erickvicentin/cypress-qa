describe('Interactuando con selects', () => {

    it('Dropdowns', () => {
        cy.visit('https://itera-qa.azurewebsites.net/home/automation')
        cy.get('.custom-select').select(10)
        cy.get('.custom-select').select('3').should('have.value', '3')
        cy.get('.custom-select').select('Greece').should('have.value', '4')
    })

    it.only('Selects dinamicos', () => {
        cy.visit('https://react-select.com/home')
        cy.get('#react-select-6-input').type(' ')
        cy.get('#react-select-6-listbox')
            .children()
            .children()
            .each( ($el, index, $list) => {
                if ($el.text() === 'Red') {
                    $el.click()
                }
            })
        
        // idealmente usar esta opcion si sabemos el index.
        //cy.get('#react-select-6-option-3').click()
    })
})