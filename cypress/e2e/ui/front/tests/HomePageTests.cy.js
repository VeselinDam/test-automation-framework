/// <reference types= "cypress" />
import CookieBotPage from "../../../../ui/pageobjects/CookieBotPage";
import HomePage from "../../../../ui/pageobjects/homePage";
import { HERO_SECTION } from "../../../helpers/asserts/HomePageAsserts";

describe("This section will cover all test cases for HomePage.", () => {
  it("Verify hero title text is correctly displayed on HomePage.", () => {
    cy.visit("/");

    const cookieBot = new CookieBotPage();
    cookieBot.clickOnRejectButton();

    const homePage = new HomePage();
    homePage.getHeroTitleText().then((heroTitleText) => {
      expect(heroTitleText).to.be.equal(
        HERO_SECTION.HERO_TITLE,
        "Hero title text is diffrent then expected."
      );
    });
  });
});
