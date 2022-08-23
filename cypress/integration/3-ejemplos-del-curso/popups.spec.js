describe('Probando popups', () => {

    it('Modales', function() {
        cy.visit('/modal-dialogs')
        cy.once('uncaught:exception', () => false);
        cy.get('#showSmallModal').click()
        cy.get('.close > [aria-hidden="true"]').click()
    })

    it('Alertas', function() {
        cy.visit('/alerts')
        cy.once('uncaught:exception', () => false);
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#confirmButton').click().then(()=> {
            expect(stub.getCall(0)).to.be.calledWith('Do you confirm action?')
        })

        cy.contains('You selected Ok').should('exist')
    })

    it('Alertas 2', function() {
        cy.visit('/alerts')
        cy.once('uncaught:exception', () => false);
        
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
        })
    })

    it('Alertas cancelar!', function() {
        cy.visit('/alerts')
        cy.once('uncaught:exception', () => false);
        
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (confirm)=>{
            expect(confirm).to.equal('Do you confirm action?')
            return false
        })
        cy.contains('You selected Cancel').should('exist')
    })

    it.only('Tooltips!', function() {
        cy.visit('/tool-tips')
        cy.once('uncaught:exception', () => false);

        cy.get('#toolTipButton').trigger('mouseover')
        cy.contains('You hovered over the Button').should('exist')
    })
})