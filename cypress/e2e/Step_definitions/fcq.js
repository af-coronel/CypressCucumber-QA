import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import ScrollButton from '../../POM/fcqPage';
import FooterPage from '../../POM/fcqPage2';

When(`hace scrolldown hasta el footer`, () => { 
  ScrollButton.scrollDown();
});

When(`el usuario clickea el botón`, () => {
  ScrollButton.scrollToTop();
});

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