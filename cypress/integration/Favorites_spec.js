beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe.skip('Favorites should be recorded', () => {
  it('Should navigate to creature, add to favorites', () => {
    cy.get('.CR3-nav').click()
    cy.get('.creature-container').contains('Manticore')
    cy.intercept('GET', 'https://www.dnd5eapi.co/api/monsters/manticore', {
      statusCode: 201,
      body: {
        name: 'Manticore',
        challenge_rating: 3,
        index: 'manticore',
        type: "monstrosity",
        subtype: null,
        size: "Large",
        alignment: "lawful evil",
        hit_dice: "8d10",
        hit_points: 68,
        armor_class: 14,
        XP: 700
      }
    })
    cy.visit('http://localhost:3000/creatures/manticore/details')
    cy.get('.add-fav-btn').click()
    cy.get('.fav-nav').click()
    cy.get('.all-favs').contains('Manticore')

  });


})