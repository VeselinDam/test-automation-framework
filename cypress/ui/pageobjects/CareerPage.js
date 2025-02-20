/// <reference types= "cypress" />

import elementHelper from "../../e2e/helpers/ElementHelper";

class CareerPage {
  constructor() {
    this.elementHelper = elementHelper;
  }

  listOfPositions = "button.c-tag";
  careerCard = "div.c-careercard";
  careerCardTeam = "div.c-careercard p";
  showMoreBtn = "div.u-txt--center span";
  careerCardTitle = "div.c-careercard h3";

  selectItemToClick(positionName) {
    this.elementHelper.clickOnItem(this.listOfPositions, positionName);
  }

  checkIfTheAppropriateTeamIsDisplayedForAppropriatePosition(
    specificPosition,
    specificTeam
  ) {
    // ovo probaj da prepravis
    cy.get(this.careerCard).should("have.length", 1);
    if (cy.get(this.careerCardTitle).should("have.text", specificPosition)) {
      cy.get(this.careerCardTeam).contains(specificTeam).should("be.visible");
    }
  }

  clickOnShowMoreButtonUntilItsHidden() {
    cy.waitUntil(
      () =>
        cy.get(this.showMoreBtn).then(($btn) => {
          if ($btn.hasClass("hide")) {
            return true;
          } else {
            cy.wrap($btn).scrollIntoView({ block: "center" }).click();
            return false;
          }
        }),
      {
        timeout: 1000,
        interval: 250,
        errorMsg: "Button 'Show More' still visible.",
      }
    );
  }

  writeAllPositionTitleToTextFile(fileName) {
    elementHelper.saveTextToFile(this.careerCard, fileName);
  }
}

export default CareerPage;
