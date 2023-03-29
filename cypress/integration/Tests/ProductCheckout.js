//cypress - spec or test file
/// <reference types="cypress" />
import ProductCheckoutPage from "../Pages/ProductCheckoutPage"
describe('Product Order', () => {
    const productCheckoutPage = new ProductCheckoutPage()
    beforeEach(function () {
      // "this" points at the test context object
      cy.fixture('productData').then((user) => {
        // "this" is still the test context object
        this.user = user
      })
    })

    it('To verify that the user is able to place order', function () {
      cy.visit(this.user.Url)
      productCheckoutPage.Shop().click()
        //provide product name 
        
        this.user.ProductNames.forEach((element)=>{
          cy.addtocart(element)
        })
        productCheckoutPage.CheckoutProductButton().click()
        var sum = 0
        productCheckoutPage.CheckoutAmount().each(($el)=>{
          //grab total amount
          const getAmount = $el.text()
          var getActualAmount = getAmount.split(" ")
          getActualAmount = getActualAmount[1].trim()
          //convert string to integer using *Number*
          sum = Number(sum) + Number(getActualAmount)
        })
        .then(()=>{
          cy.log(sum)
        })
          productCheckoutPage.TotalCheckoutAmount().then((element)=>{
            const amount = element.text()
            var getAmountOnly = amount.split(" ")
            //the total amount after split ₹. from the amount
            var getTotalAmountOnly = getAmountOnly[1].trim()
            //compare actual value to expected value using expect assertion
            expect(Number(getTotalAmountOnly)).to.equal(sum)
          })
        productCheckoutPage.CheckoutAmountButton().click()
        productCheckoutPage.DeliveryLocation().type(this.user.country)
        productCheckoutPage.SelectCountry().click()
        productCheckoutPage.SelectTermsandCondition().click({force: true})
        productCheckoutPage.PurchaseButton().click()
        productCheckoutPage.SuccessMessage().then((element)=>{
        const ActualText= element.text()
        //used chai assertion to valiadate the message
        expect(ActualText.includes('Success!')).to.be.true
    })
  })
})