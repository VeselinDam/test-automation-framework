/// <reference types= "cypress" />

class CookieBotPage {
  rejectBtn = "#CybotCookiebotDialogBodyButtonDecline";

  clickOnRejectButton() {
    cy.get(this.rejectBtn)
    .should("be.visible")
    .and("not.be.disabled")
    .click();
  }
}

export default CookieBotPage;
