class NavBar {
  // Selector de la etiqueta de la barra de navegación
  get nav() {
    return cy.get('nav');
  }

  // Método para obtener la lista de elementos desplegables de la nav
  getDropDownItems() {
    return cy.get('nav ul li label[for^="dropfcq-"]');
  }

  // Método para verificar el contenido de un menú desplegable
  checkDropDownContent(index, content) {
    cy.get(`#dropfcq-${index} ul`).should('be.visible');

    // Verifica el contenido del elemento desplegable
    cy.get(`#dropfcq-${index} ul`).should('contain.text', content);
  }

  // Método para obtener el texto de un menú desplegable por su índice
  getDropDownText(index) {
    return this.getDropDownItems().eq(index).invoke('text');
  }

  // Método para obtener el texto de todos los menús desplegables
  getAllDropDownTexts() {
    return this.getDropDownItems().invoke('text');
  }
}
