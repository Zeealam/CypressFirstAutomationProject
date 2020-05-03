/// <reference types="Cypress" />

describe('Check Box and DropDown',function()
{

it('Hobbies Check Box',function(){

    cy.visit("http://demo.automationtesting.in/Register.html")

    cy.get("#checkbox1").check().should('be.checked').and('have.value','Cricket')
    cy.get("#checkbox2").check().should('be.checked').and('have.value','Movies')
    cy.get("#checkbox3").check().should('be.checked').and('have.value','Hockey')

    cy.get("#checkbox1").uncheck().should('not.be.checked').and('have.value','Cricket')
    cy.get("#checkbox2").uncheck().should('not.be.checked').and('have.value','Movies')
    cy.get("#checkbox3").uncheck().should('not.be.checked').and('have.value','Hockey')

    cy.get('[type=checkbox]').check(['Cricket','Hockey'])  // Used array to checked multiple heck
})

    it('Skill Dropdown',function(){

        cy.get("#Skills").select('C++').should('have.value','C++')
        //cy.get("#Skills").select('C++').and('have.value','C++')
    
    })

    it('Language multiple select Dropdown',function(){

        cy.get("#msdd").click()
        cy.get(".ui-corner-all").contains('Danish').click()
        cy.get(".ui-corner-all").contains('Hungarian').click()
    })

    it('Select Country searchable Dropdown',function(){

        cy.get("[role='combobox']").click({force: true})
        cy.get(".select2-search__field").type('Bangladesh')
        cy.get(".select2-search__field").type('{enter}')
    })


})