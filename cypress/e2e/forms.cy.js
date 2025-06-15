describe('Create Form tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1234/#create');
  });

  it('shows error on empty submit', () => {
    cy.get('[data-cy="create-form"]').submit();
    cy.contains('Set name cannot be empty').should('be.visible');
  });
});
