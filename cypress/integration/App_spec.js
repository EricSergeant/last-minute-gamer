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
  it('Should display the NavBar', () => {
    const navs = ['Home', 'Fav', 'CR1', 'CR2', 'CR3', 'CR4', 'CR5', 'CR6', 'CR7', 'CR8', 'CR9', 'CR10',]
    navs.forEach(link => {
      cy.contains(link)
    })
  });
  it('Should display an API error when needed', () => {
    cy.intercept({
      method: 'GET',
      url: 'https://www.dnd5eapi.co/api/monsters?challenge_rating=3'
    },
      {
        statusCode: 404,
      })
    cy.get('.CR9-nav').click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/Error')
    })
  });

})



