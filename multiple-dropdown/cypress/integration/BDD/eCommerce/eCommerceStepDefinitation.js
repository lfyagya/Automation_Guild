import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import placeOrder from "../../Pages/placeOrder";

const orderPage = new placeOrder()

Given('Navigate to the homePage', () => {
    orderPage.URL();
})

When('Find the items and add items to the cart',()=>{
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
})

Then('Select the country accept the terms and condition and verify the success message',() =>{ 
    orderPage.selectCountry().select(placeOrderData.countryName)
    orderPage.termsandConditions().click();
    orderPage.proceed();
    orderPage.successMessage().each(($el)=>{
        const successMessage = $el.text()
        expect(successMessage.includes(placeOrderData.successMessage)).to.be.true
    })
})