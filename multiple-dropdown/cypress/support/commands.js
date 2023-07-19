import TeamsPage from "../integration/Pages/TeamsPage"
import ProductCheckoutPage from "../integration/Pages/ProductCheckoutPage"


const teampage = new TeamsPage()
const productCheckoutPage = new ProductCheckoutPage()

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('releaseNotes', () => {
    teampage.releaseNotes().click()
})

Cypress.Commands.add('logout', () => {
    teampage.logout().click()
    teampage.logoutButton().click() 
})

Cypress.Commands.add('addtocart', (productName) => {
    // grabing the text of each product using loop till we dont find what we are looking for 
    productCheckoutPage.MobilePhoneText().each(($el, index)=>{
      if ($el.text().includes(productName)) {
        //clicking the add to cart button aafter product found that we want
        productCheckoutPage.AddtoCartButton().eq(index).click()
      }
    
    })
  })