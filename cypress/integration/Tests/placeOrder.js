//cypress - spec or test file
/// <reference types="cypress" />
import placeOrder from "../Pages/placeOrder"

describe('Place Order', () => {
    const orderPage = new placeOrder()

        let placeOrderData
    before(() => {
    cy.fixture('placeOrderData').then((data) => {
        placeOrderData = data;
    })
    })

    beforeEach("To verify that the user is able to navigate to the application", () => {
        orderPage.URL();
      })
    it('To verify that the user is able to place the order', () => {
        orderPage.searchKeyword().type(placeOrderData.productName);
        orderPage.products().find('.product').each(($el)=>{
            const vegtext = $el.find(orderPage.productName()).text()
            if (vegtext.includes(placeOrderData.productFullName)) {
                cy.wrap($el).find(orderPage.button()).click()

            } else {
                console.error();
                
            }
        })
        orderPage.cartIcon().click();
        orderPage.checkOut();
        orderPage.placeOrder();
        orderPage.selectCountry().select(placeOrderData.countryName)
        orderPage.termsandConditions().click();
        orderPage.proceed();
        orderPage.successMessage().each(($el)=>{
            const successMessage = $el.text()
            expect(successMessage.includes(placeOrderData.successMessage)).to.be.true
        })
    })
  }) 