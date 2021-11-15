beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('NavBar should correctly route', () => {
  it('Should navigate to favorites and back to home page', () => {
    cy.get('.fav-nav').click()
    cy.get('.all-favs').contains('My Favorite Monsters')
    cy.get('.home-nav').click()
    cy.get('.main-text').contains('Click on a Challenge Rating(CR)')
  });


})