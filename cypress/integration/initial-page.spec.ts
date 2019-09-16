describe('dashboard', () => {

  beforeEach(() => {
    cy.visit("localhost:4200/dashboard");
  })

  it(`has title 'Tour of Heroes'`, () => {
    
    cy.contains('Tour of Heroes');
    cy.get('.hero');
    cy.get('h1').should('contain', 'Tour of Heroes');
    cy.title().should('eq', 'Tour of Heroes');
  })

  it (`has the correct header`, () => {
    cy.contains('Dashboard');
    cy.get('nav a').eq(1).should('contain', 'Heroes');
    cy.contains('Top Heroes');
  })

  it (`has the correct search header`, () =>{
    cy.contains("Hero Search");
    cy.get('app-hero-search h4').should('contain', 'Hero Search');
  })

  it ('can search', () => {
    cy.get('#search-box').type('Mr. Nice');
    cy.get('.search-result li').contains('Mr. Nice').click();
    cy.url().should('include', '/detail/11');
  })
})