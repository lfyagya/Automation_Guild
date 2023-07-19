class ProductCheckoutPage
{
    Shop(){
        return cy.get('[href="/angularpractice/shop"]')
    }
    MobilePhoneText(){
        return cy.get('h4.card-title')
    }
    AddtoCartButton(){
        return cy.get('button.btn.btn-info')
    }
    CheckoutProductButton(){
        return cy.get('a[class="nav-link btn btn-primary"]')
    }
    CheckoutAmountButton(){
        return cy.get('.btn-success')
    }
    CheckoutAmount(){
        return cy.get('tr td:nth-of-type(4) > strong')
    }
    TotalCheckoutAmount(){
        return cy.get('h3 strong')
    }
    DeliveryLocation(){
        return cy.get('#country')
    }
    SelectCountry(){
        return cy.get('.suggestions > ul > li > a')
    }
    SelectTermsandCondition(){
        return cy.get('div input[id="checkbox2"]')
    }
    PurchaseButton(){
        return cy.get('.ng-untouched > .btn')
    }
    SuccessMessage(){
        return cy.get('.alert')
    }

}
export default ProductCheckoutPage;