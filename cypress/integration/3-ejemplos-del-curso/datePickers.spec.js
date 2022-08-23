describe('Probando datepickers', () => {

    it('DP 1', function() {
        cy.visit('https://material.angular.io/components/datepicker/overview')
        cy.get('datepicker-overview-example').find('input').eq(0).type('01/12/1996')
        cy.get('datepicker-overview-example').find('svg').click()
    })
})