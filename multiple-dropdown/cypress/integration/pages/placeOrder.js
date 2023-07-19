class placeOrder
{
    URL(){
        return cy.visit('https://rahulshettyacademy.com/seleniumPractise/')
    }
    searchKeyword(){
        return cy.get(".search-keyword")
    }
    products(){
        return cy.get('.products')
    }
    product(){
        return cy.get('.product')
    }
    productName(){
        return cy.get('h4.product-name')
    }
    button(){
        return cy.get('button')
    }
    cartIcon(){
        return cy.get('.cart-icon')
    }
    checkOut(){
        return cy.contains('PROCEED TO CHECKOUT').click()
    }
    placeOrder(){
        return cy.contains('Place Order').click()
    }
    select(){
        return cy.get('select')
    }
    selectCountry(){
        return cy.get('select')
    }
    termsandConditions(){
        return cy.get("input[type='checkbox']")
    }
    proceed(){
        return cy.contains("Proceed").click()
    }
    successMessage(){
        return cy.get('.wrapperTwo > span')
    }

}
export default placeOrder;