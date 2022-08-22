describe('Interactuando con inputs de texto', () => {

    beforeEach(() => {
        cy.visit('/automation-practice-form')
        cy.once('uncaught:exception', () => false);
    })

    it('Input type', () => {
        cy.get('#firstName').type('Erick')    
        cy.get('#lastName').type('Vicentin')
        //cy.get('#firstName').type('{selectAll}{backspace}')
        cy.get('#firstName').clear()
        cy.get('#firstName').type('Carlos')
    })

    it('Radio button', () => {
        //cy.get('#gender-radio-1').click({force:true}) no es recomendable
        //cy.get('#gender-radio-1').check({force:true}) idem anterior
        cy.get('label[for="gender-radio-1"]').click() //recomendable hacerlo
    })

    it.only('Checkbox', () => {
        //cy.get('#hobbies-checkbox-1').click({force:true})
        //cy.get('#hobbies-checkbox-1').check({force:true})
        //cy.get('#hobbies-checkbox-1').uncheck({force:true})
        cy.get('label[for="hobbies-checkbox-1"').click()
        cy.get('label[for="hobbies-checkbox-1"').click()
    })
})