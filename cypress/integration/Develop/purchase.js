/// <reference types="cypress" />

describe('purchase product',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('purchase').then(function(data1){
            this.data1=data1
        })
    })
    
    it('User purchases a product',function(){
        cy.visit(Cypress.env('url'))
        cy.login(this.data.username,this.data.password,this.data.name)
        cy.SelectProduct(this.data1.product,this.data1.details)
    })
})