// beforeEach(() => {
//   cy.intercept({
//     method: 'GET',
//     url: 'https://www.dnd5eapi.co/api/monsters?challenge_rating=3/'
//   },
//     {
//       statusCode: 404,
//       ok: false
//     })
// });

describe('App should correctly display error', () => {
  it('Should display an error when incorrect URL is entered', () => {
    cy.visit('http://localhost:3000/madeupstuff')
    cy.get('.error-text').contains('Sorry, there has been a server error!')
    // cy.location().should((loc) => {
    //   expect(loc.href).to.eq('http://localhost:3000/Error')
  })
});

// })
