/// <reference types="Cypress" />

import LoginPage from '../Pageobject/LoginPage'

describe('Login Test Suite',function(){


    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
        
      })

    it('Validate Login Page',function(){
        const login= new LoginPage()
        login.visit()
        login.fillEmail(this.data.Email)
        login.fillPassword(this.data.Password)
        login.submit()
        cy.title().should('be.equal','Dashboard / nopCommerce administration')
        
    })

})