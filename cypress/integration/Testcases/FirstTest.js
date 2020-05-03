describe('My Test Suite', function(){

    it('Verify Title Of The Page Positive',function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo store')
        

    })

    it('Verify Title Of The Page negative',function(){
        cy.visit('https://demo.nopcommerce.com/')
        cy.title().should('eq','nopCommerce demo')

    })
})