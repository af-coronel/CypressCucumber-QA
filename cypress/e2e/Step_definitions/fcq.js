import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ScrollButton from '../../POM/fcqPage';
import FooterPage from '../../POM/fcqPage2';
import LogoPage from '../../POM/fcqPage3';


// Aqui van los When:
When(`hace scrolldown hasta el footer`, () => { 
  ScrollButton.scrollDown();
});
When(`el usuario clickea el botón`, () => {
  ScrollButton.scrollToTop();
});
When(`verifica el contenido de los menús desplegables`, () => {
  NavBar.nav.should('be.visible');
  NavBar.hoverAllDropDowns();
});


// Aqui van los Then:
Then(`se hace visible el botón scrollUp`, () => {
  ScrollButton.scrollButtonBeVisible();
});
Then(`vuelve al header de la página`, () => {
  ScrollButton.isPageAtTop();
});
Then(`el usuario visualiza el texto del footer`, () => {
  FooterPage.textoFacultad
     .should('have.text',
      'Facultad de Ciencias Químicas (UNC)');
  FooterPage.textoDireccion
     .should('have.text',
     'Av. Medina Allende y Haya de la Torre.\nCiudad Universitaria. Córdoba. Argentina.');
});
Then(`el usuario debería ver la imagen del logo de la FCQ`, () => {
  LogoPage.logoSection.should('be.visible');
});
Then(`el color de fondo del logo debería ser {string}`, (expectedColor) => {
  cy.get('#mini-panel-logo_fcq_uncor').then(($el) => {
    const realBackgroundColor = $el.css('background-color');
    cy.log('Real Background Color: ', realBackgroundColor);

    // Verifica si el color coincide con el esperado
    expect(realBackgroundColor).to.equal(expectedColor);
  });
});
Then(`los menús desplegables tienen el contenido correcto`, () => {
  // Itera sobre cada elemento de la barra de navegación
    NavBar.getDropDownItems().each((item, index) => {
    NavBar.checkDropDownContent(index, item.text()); // Verifica el contenido de cada menú
  });
});