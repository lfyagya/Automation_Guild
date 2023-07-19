let placeOrderData

before(() => {
cy.fixture('placeOrderData').then((data) => {
    placeOrderData = data;
})
})