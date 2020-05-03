
 /// <reference types="Cypress" />

describe('Locating Element', function(){

    it('Verify type of locator', function(){

       cy.visit("https://demo.nopcommerce.com/")  // open the url

       cy.get("#small-searchterms[placeholder='Search store']").type('Apple MacBook Pro 13-inch') //search

       cy.get("input[type='Submit']").click()  // Click on search button

       cy.get("[value='Add to cart']").click()// click on add to card

       cy.get("#addtocart_4_EnteredQuantity[type='text']").clear().type('2')  //clear the text field and enter the quantity
    
       cy.get("[type='button']#add-to-cart-button-4").click()   //Click on add to card

       cy.wait(5000)

       cy.get("#topcartlink > a> span.cart-label").click() // Click on shopping

       cy.wait(3000)

       cy.get("span.product-unit-price").contains('$1,800.00')   //validate point

        
    })



})