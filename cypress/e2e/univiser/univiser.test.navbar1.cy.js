

beforeEach(() => {
    cy.visit('http://demo.univizer.io/');
});


describe('NavBar Testing', () => {
    
    it('Url testing - Positive', () => {
        cy.url().should('include', "univizer.io").and('eq', "http://demo.univizer.io/").and('contain', "univizer")
    });
    

    it('Url testing - Negative', () => {
        cy.url().should('not.include', "univiser.io").and('not.eq',"http://demo.univiser.io/").and('not.contain', "univiser.io")
    });

    it.only('Length of navbar', () => {
        cy.get('.ant-space-item').should('have.length', 4)
    });
});

