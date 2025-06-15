describe('Navigation tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/');
  });

  it('navigates through menu items', () => {
    cy.get('[data-cy="menu-home"]').click();
    cy.url().should('include', '#home');

    cy.get('[data-cy="menu-create"]').click();
    cy.url().should('include', '#create');

    cy.get('[data-cy="menu-about"]').click();
    cy.url().should('include', '#about');
  });
});
