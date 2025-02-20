class ElementHelper {
  saveTextToFile(locator,  fileName) {
    const text = [];
    const filePath = `cypress/resources/${fileName}.txt`;

    cy.get(locator)
      .each(($element) => {
        cy.wrap($element)
          .invoke("text")
          .then((getText) => {
            text.push(getText.trim());
          });
      })
      .then(() => {
        const content = text.join("\n");
        cy.writeFile(filePath, content);
      });
  }

  clickOnItem(locator, itemName) {
    cy.get(locator)
      .contains(itemName)
      .should("be.visible")
      .scrollIntoView({ block: "center", easing: "linear", duration: 200 })
      .should("not.be.disabled");
    cy.waitUntil(
      () =>
        cy
          .get(locator)
          .contains(itemName)
          .then(($element) => {
            if ($element.hasClass("is-active")) {
              return true;
            } else {
              cy.wrap($element).click();
              return false;
            }
          }),
      {
        timeout: 2000,
        interval: 250,
        errorMsg: `'${itemName}' dont have class 'is-active'.`,
      }
    );
  }
}
const elementHelper = new ElementHelper();
export default elementHelper;
