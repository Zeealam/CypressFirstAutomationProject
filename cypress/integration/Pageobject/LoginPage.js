/// <reference types="Cypress" />

class LoginPage

{
    visit(){
        cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")

    }

    fillEmail(value){
       const field=cy.get('input[type=email]').clear()
       field.type(value)
       return this
    }

    fillPassword(value){
        const field=cy.get('input[type=password]').clear()
        field.type(value)
        return this
     }

     submit(){
         const submit=cy.get('input[type=submit]')
         submit.click()
     }
}

export default LoginPage