beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('Favorites should be recorded', () => {
  it('Should navigate to creature, add to favorites', () => {
    cy.get('.CR3-nav').click()
    cy.get('.creature-container').contains('Manticore')
    cy.visit('http://localhost:3000/creatures/manticore/details')
    cy.get('.add-fav-btn').click()
    cy.get('.fav-nav').click()
    cy.get('.all-favs').contains('Manticore')

  });


})