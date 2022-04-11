/// <reference types="cypress" />
import ProductPage from "../../support/PageObject/ProductPage"

const productPage = new ProductPage()

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
        Cypress.env({
            product: 'Ferrero Rocher',
            description: 'Ferrero Rocher, 16 Pieces, 200 gm',
        })
        cy.SelectProduct(Cypress.env('product'),Cypress.env('description'))
        productPage.getBuyNowButton().click()
    })
})