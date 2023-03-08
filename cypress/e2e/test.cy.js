describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Should display 2 expenses list items', () => {
    cy.get('.expenses-list li').should('have.length', 2)
    cy.get('.expenses-list li h2').first().should('have.text','New Book')
    cy.get('.expenses-list li h2').last().should('have.text','New Jeans')
  })

  it('Are able to add new Expense to the list',()=> {
    const title = 'Ice Cream'
    const amount = 2
    const date = '2023-03-08'

    cy.contains('Add New Expense').click()
    cy.get('form input[type="text"]').type('Ice Cream')
    cy.get('form input[type="number"]').type(2)
    cy.get('form input[type="date"]').type('2023-03-08')
    cy.contains('Add Expense').click()

    cy.get('.expenses-list li h2').first().should('have.text', 'Ice Cream')
  })

  it('Areable to filter expenses by year', ()=> {
    cy.get('.expenses-filter__control select').select(1)
    cy.get('.expenses-list li').should('have.length', 1)
    cy.get('.expenses-list li h2').first().should('have.text','New Book')

    cy.get('.expenses-filter__control select').select(2)
    cy.get('expenses-list li').should('have.length',0)
  })
})
