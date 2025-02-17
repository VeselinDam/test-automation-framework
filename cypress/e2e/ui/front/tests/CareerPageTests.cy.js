/// <reference types= "cypress" />
import CareerPage from "../../../../ui/pageobjects/CareerPage";
import CookieBotPage from "../../../../ui/pageobjects/CookieBotPage";
import {
  POSITION_NAMES,
  TEAM,
} from "../../../helpers/constants/CareerPageConstants";

describe("This section will cover all test cases for Career Page.", () => {
  it("Verify that appropriate team is displayed for appropriate position", () => {
    cy.visit("/career");

    const cookieBot = new CookieBotPage();
    cookieBot.clickOnRejectButton();

    const careerPage = new CareerPage();
    careerPage.clickOnPosition(POSITION_NAMES.QA);
    careerPage.checkIfTheAppropriateTeamIsDisplayedForAppropriatePosition(
      POSITION_NAMES.SENIOR_QA_SPECIALIST,
      TEAM.ETON_DIGITAL
    );
  });
});
