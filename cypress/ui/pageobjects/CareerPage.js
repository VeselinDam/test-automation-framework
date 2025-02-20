/// <reference types= "cypress" />

import elementHelper from "../../e2e/helpers/ElementHelper";

class CareerPage {
  constructor() {
    this.elementHelper = elementHelper;
  }

  listOfPositions = "button.c-tag";
  careerCard = "div.c-careercard";
  careerCardTeam = "p";
  showMoreBtn = "div.u-txt--center span";
  careerCardTitle = "div.c-careercard h3";

  selectItemToClick(positionName) {
    this.elementHelper.clickOnItem(this.listOfPositions, positionName);
  }

  getTeamForPosition(specificPosition) {
    return cy.get(this.careerCardTitle)
      .contains(specificPosition)
      .should("be.visible")
      .parents(this.careerCard)
      .find(this.careerCardTeam);
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
