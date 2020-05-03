/// <reference types="Cypress" />

describe('UI Elements',function(){
    it('Verified input an radio button',function(){

        cy.visit("http://www.newtours.demoaut.com/")

        cy.url().should('include','newtours')// Verify URl should include 'newtours'

        cy.get("input[name='userName']").should('be.visible').and('be.enabled').type("mercury") //Verifying  username field is visiable and enable

        cy.get("input[name='password").should('be.visible').should('be.enabled').type("mercury")

        cy.get("input[name='login']").should('be.visible').click() // Click on login button

        cy.title().should('eq','Find a Flight: Mercury Tours:')  // Title verified

        //Radio button
       // cy.get("[value='roundtrip']").should('be.visible').should('be.checked')//Visibility and checked the button
        //cy.get("[value='oneway']").should('be.visible').should('not.be.checked').click() //Visibility and checked the button
        cy.get("[value='oneway']").should('be.visible').check('oneway').and('have.value','oneway')
        cy.get("input[name='findFlights']").should('be.visible').click()  //click on continue button

        cy.title().should('eq',"Select a Flight: Mercury Tours") //Verify the title
    })


})