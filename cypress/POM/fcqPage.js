class ScrollButton {
  
  get scrollToTopButton() {
    return cy.get('#button');
  }

  // Método para scrollear hasta el footer de la página
  scrollDown() {
    cy.get('footer').scrollIntoView();
    //cy.scrollTo('bottom')
  }

  // Método para verificar si la parte superior de la página está visible
  isPageAtTop() {
    return cy.get('#block-panels-mini-logo-fcq-uncor').should('be.visible');
  }

  // Método para verificar que el botón este visible
  scrollButtonBeVisible() {
    this.scrollToTopButton.should('be.visible');
  }
  
  // Método para dar click al botón y volver a la parte superior de la página
  scrollToTop() {
    this.scrollToTopButton.click();
  }
}

export default new ScrollButton();