describe('App should correctly display error', () => {
  it('Should display an error when incorrect URL is entered', () => {
    cy.visit('http://localhost:3000/madeupstuff')
    cy.get('.error-text').contains('Sorry, there has been a server error!')
  })
});

