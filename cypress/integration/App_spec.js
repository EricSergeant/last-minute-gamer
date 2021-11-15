beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('App should load', () => {
  it('SHould confirm true is true', () => {
    expect(true).to.equal(true)
  });
})

