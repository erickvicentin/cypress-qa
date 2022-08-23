describe('Testeando con tablas', () => {
	it('Tabla 1', function () {
		cy.visit('https://www.w3schools.com/html/html_tables.asp')
		cy.get('#customers')
			.find('th')
			.each(($elto) => {
				cy.log($elto.text())
			})

		cy.get('#customers')
			.find('th')
			.first()
			.invoke('text')
			.should('equal', 'Company')

		cy.get('#customers')
			.find('th')
			.eq(1)
			.invoke('text')
			.should('equal', 'Contact')

		cy.get('#customers')
			.find('th')
			.eq(2)
			.invoke('text')
			.should('equal', 'Country')

		cy.get('#customers').find('tr').should('have.length', 7)

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.invoke('text')
			.should('equal', 'Maria Anders')

		cy.get('#customers')
			.find('tr')
			.eq(1)
			.find('td')
			.eq(1)
			.then(($elto) => {
				const texto = $elto.text()
				expect(texto).to.equal('Maria Anders')
			})
	})
})
