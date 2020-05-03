/// <reference types="Cypress" />

describe('Fixture Demo using Json',function(){


    before(function()  {
        // runs once before all tests in the block
        cy.fixture('example').then(function(data){
            this.data=data
        })
        
      })

    it('LoginTest',function(){
    cy.login(this.data.Email,this.data.Password)
    cy.title().should('be.equal','Dashboard / nopCommerce administration')

    cy.login(this.data.Email,this.data.Password)
    cy.title().should('not.be.equal','Dashboard / nopCommerce administration')

    })

    it('Add Login',function(){
        cy.login('admin@yourstore.com','admin')
        cy.log('*******Add Customer***********')
    
    })

    it('Edit Login',function(){
        cy.login('admin@yourstore.com','admin')
        cy.log('*******Edits Customer***********')
    
    })


})