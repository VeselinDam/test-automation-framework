/// <reference types= "cypress" />
import CareerPage from "../../../../ui/pageobjects/CareerPage";
import CookieBotPage from "../../../../ui/pageobjects/CookieBotPage";
import {
  POSITION_NAMES,
  TEAM,
  COUNTRY,
} from "../../../helpers/constants/CareerPageConstants";

describe("This section will cover all test cases for Career Page.", () => {

  beforeEach(() => {
    cy.visit("/career");
  });

  it("Verify that appropriate team is displayed for appropriate position", () => {
    const cookieBot = new CookieBotPage();
    cookieBot.clickOnRejectButton();

    const careerPage = new CareerPage();
    careerPage.selectItemToClick(POSITION_NAMES.QA);
    careerPage
      .getTeamForPosition(POSITION_NAMES.SENIOR_QA_SPECIALIST)
      .then(($team) => {
        expect(
          $team.text(),
          `Expected team for position ${POSITION_NAMES.SENIOR_QA_SPECIALIST}`
        ).to.contain(TEAM.ETON_DIGITAL);
      });
  });

  it("Find all position titles for specific Country and save them to text file,", () => {
    const cookieBot = new CookieBotPage();
    cookieBot.clickOnRejectButton();

    const careerPage = new CareerPage();
    careerPage.selectItemToClick(COUNTRY.SERBIA);
    careerPage.clickOnShowMoreButtonUntilItsHidden();
    careerPage.writeAllPositionTitleToTextFile("AllPositionTitlesFromSerbia");
  });
});
