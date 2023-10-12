import { Then } from "@badeball/cypress-cucumber-preprocessor";
const yvytuHome = require("../../POM/yvytuPage");

Then("visualiza en el header los botones {string}", (list) => {
    list = list.split(", ");
  
    yvytuHome.getMenuAllButton().each((btn, $index) => {
      if ($index != 0) {
        cy.wrap(btn).should("have.text", list[$index - 1]);
      }
    });
  });