/// <reference types= "cypress" />
import CookieBotPage from "../../../../ui/pageobjects/CookieBotPage";
import HomePage from "../../../../ui/pageobjects/homePage";
import HomaPageAsserts from "../../../helpers/asserts/HomePageAsserts";

describe("This section will cover all test cases for HomaPage.", ()=>{
    it("Verify hero title text is correctly displayed on HomePage.", ()=>{
        cy.visit("/")

        const cookieBot = new CookieBotPage();
        cookieBot.clickOnRejectButton();

        const homePage = new HomePage();
        const homePageAsserts = new HomaPageAsserts();

        homePage.getHeroTitleText().then((heroTitleText) =>{
            expect(heroTitleText).to.be.equal(homePageAsserts.heroTitle, "Hero title text is diffrent then expected.")
        })
    })
})