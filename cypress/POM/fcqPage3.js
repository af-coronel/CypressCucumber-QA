class LogoPage {
    get logoSection() {
      return cy.get('#mini-panel-logo_fcq_uncor');
    }
  
    getBackgroundColor() {
      return this.logoSection
                 .should('have.css',
                  'background-color');
    }
  };
  
  export default new LogoPage();
  