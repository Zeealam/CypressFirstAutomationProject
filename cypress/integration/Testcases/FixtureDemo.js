/// <reference types="Cypress" />

describe('Fixture Demo using Json',function(){

    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
        
      })



it('FixtureDemoTest',function(){

    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
    cy.get("input[type=email]").clear().type(this.data.Email)
    cy.get("input[type=password]").clear().type(this.data.Password)
    cy.get("input[type=submit]").click()
})


})