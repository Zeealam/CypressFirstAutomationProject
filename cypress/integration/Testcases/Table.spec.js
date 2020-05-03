// <reference types="Cypress" />


describe('Suite Name', function(){

    it('Alert', function(){

        cy.visit("http://testautomationpractice.blogspot.com/")

        //1) Check value present any where in the table

        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //2) Check the value present in specific row and column

        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(4)').contains('300').should('be.visible')

        //3) Check the value present based on condition by iterating rows
        //-Check the book name "Master in Java" whose author is amod

       /* cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e1,index,$list) =>{
           const text= $e1.text()
           if(text.includes("Amod"))
           {
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                {
                    const bookname= bname.text()
                    expect(bookname).to.equal("Master In Java")

                })
           }

        })*/

        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e,index,$list)=>
        {
               const text= $e.text()

               if(text.includes("Animesh"))
               {
                        cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then(function(bname)
                        {
                                const bookname=bname.text()
                            expect(bookname).to.equal("Learn JS")

                        })
                }

        })

    })


})