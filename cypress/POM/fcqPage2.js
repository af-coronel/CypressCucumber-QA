class FooterPage {

  get textoFacultad() {
    return cy.get('.divTableCellPie span')
             .contains(
              'Facultad de Ciencias Químicas (UNC)');
    }
  
    get textoDireccion() {
    return cy.get('.divTableCellPie span')
            .contains(
    'Av. Medina Allende y Haya de la Torre. Ciudad Universitaria. Córdoba. Argentina.');
    }
  };
  
  export default new FooterPage();
  
  