/// <reference types= "cypress" />

class HomePage {
    heroTitle = "h1.c-hero__title";
  
    getHeroTitleText() {
      return cy.get(this.heroTitle).should('be.visible').invoke("text");
    }
  }
  
  export default HomePage;