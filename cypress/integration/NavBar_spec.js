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
  it('Should display the CR1 creatures', () => {
    cy.get('.CR1-nav').click()
    cy.get('.creature-container').contains('Bugbear')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/1')
    })
  });
  it('Should display the CR2 creatures', () => {
    cy.get('.CR2-nav').click()
    cy.get('.creature-container').contains('Gelatinous Cube')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/2')
    })
  });
  it('Should display the CR3 creatures', () => {
    cy.get('.CR3-nav').click()
    cy.get('.creature-container').contains('Bearded Devil')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/3')
    })
  });
  it('Should display the CR4 creatures', () => {
    cy.get('.CR4-nav').click()
    cy.get('.creature-container').contains('Succubus/Incubus')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/4')
    })
  });
  it('Should display the CR5 creatures', () => {
    cy.get('.CR5-nav').click()
    cy.get('.creature-container').contains('Unicorn')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/5')
    })
  });
  it('Should display the CR6 creatures', () => {
    cy.get('.CR6-nav').click()
    cy.get('.creature-container').contains('Young Brass Dragon')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/6')
    })
  });
  it('Should display the CR7 creatures', () => {
    cy.get('.CR7-nav').click()
    cy.get('.creature-container').contains('Shield Guardian')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/7')
    })
  });
  it('Should display the CR8 creatures', () => {
    cy.get('.CR8-nav').click()
    cy.get('.creature-container').contains('Frost Giant')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/8')
    })
  });
  it('Should display the CR9 creatures', () => {
    cy.get('.CR9-nav').click()
    cy.get('.creature-container').contains('Young Silver Dragon')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/9')
    })
  });
  it('Should display the CR10 creatures', () => {
    cy.get('.CR10-nav').click()
    cy.get('.creature-container').contains('Guardian Naga')
    cy.location().should((loc) => {
      expect(loc.href).to.eq('http://localhost:3000/creatures/10')
    })
  });


})