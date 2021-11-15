describe('App should load main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it('Should display the main app page', () => {
    cy.contains('Find A Monster')
    cy.get('.main-text').contains('Running late to your D&D game?')
  });
  it('External links should not be undefined', () => {
    cy.contains('a').should('not.have.attr', 'href', 'undefined')
  });
  it('Should display the NavBar', () => {
    const navs = ['Home', 'Fav', 'CR1', 'CR2', 'CR3', 'CR4', 'CR5', 'CR6', 'CR7', 'CR8', 'CR9', 'CR10',]
    navs.forEach(link => {
      cy.contains(link)
    })
  });


})



