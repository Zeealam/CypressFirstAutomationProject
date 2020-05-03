/// <reference types="Cypress" />

describe('Hook Demo',function(){


    before(() => {
        // runs once before all tests in the block
        cy.log("************This is a Setup block*************")
      })
    
      after(() => {
          // runs once after all tests in the block
        cy.log("************This is a TEAR Down  block*************")
      })
    
      beforeEach(() => {
        // runs before each test in the block
        cy.log("************This is a Login  block*************")
      })
    
      afterEach(() => {
        // runs after each test in the block
        cy.log("************This is a Logout  block*************")
      })


    it("Search",function(){

        cy.log("********This is a Searching Test**********")
    })

    it("Advance Search",function(){

        cy.log("********This is a Advance Searching Test**********")
    })

    it("Listing Product",function(){

        cy.log("********This is a Listing Product Test**********")
    })
})
