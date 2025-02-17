/// <reference types= "cypress" />

class CareerPage {
  listOfPositions = "button.c-tag";
  careerCard = "div.c-careercard";
  careerCardTitle = "h3";
  careerCardTeam = "p";

  clickOnPosition(positionName, retries = 5) {
    cy.get(this.listOfPositions)
      .contains(positionName)
      .should("be.visible")
      .scrollIntoView({ block: "center", easing: "linear", duration: 500 })
      .should("not.be.disabled")
      .click()
      .then(($element) => {
        if (!$element.hasClass("is-active") && retries > 0) {
          this.clickOnPosition(positionName, retries - 1);
        }
      });
  }

  checkIfTheAppropriateTeamIsDisplayedForAppropriatePosition(
    specificPosition,
    specificTeam
  ) {
    cy.get(this.careerCard).should("have.length", 1).within(() => {
        if(cy.get(this.careerCardTitle).should("have.text", specificPosition)){
            cy.get(this.careerCardTeam).contains(specificTeam).should("be.visible");
        }
    });
  }
}

export default CareerPage;
