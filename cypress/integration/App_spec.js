beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('App should load main page', () => {
  it('Should display the main app page', () => {
    cy.contains('Find A Monster')
    cy.get('.main-text').contains('Running late to your D&D game?')
  });
  it('External links should not be undefined', () => {
    cy.contains('a').should('not.have.attr', 'href', 'undefined')
  });
})



