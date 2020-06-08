describe('Search', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('accepts input', () => {
    const typedText = 'Tarantino';

    cy.get('input')
      .type(typedText)
      .should('have.value', typedText);
  })

  context('Form submission', () => {
    beforeEach(() => {
      cy.server()
    });

    it('Displays Nothing found message', () => {
      const itemText = 'Tarantino';

      cy.get('button').contains('Search').click();

      cy.get('li')
        .should('have.length', 0);
    });
  })
})
