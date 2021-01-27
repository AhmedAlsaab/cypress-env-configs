describe('Using different environment configurations', function () {
  before(function () {
    cy.visit('/');
  });

  it('Logs environment variables!', function () {
    cy.log(`We are now on the: "${Cypress.env('environment')}" environment`);
    cy.log(`The user id for this environment is: "${Cypress.env('userId')}"`);
  });
});
