import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import ProductList from "../../../../support/PageObject/ProductList";
import CartPage from "../../../../support/PageObject/CartPage";
import SignInnPage from "../../../../support/PageObject/SignInnPage"
import { expect } from "chai";

const homePage = new HomePage();
const productList = new ProductList();
const cartPage = new CartPage();
const siniin = new SignInnPage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

Given('User open amazon home page',function(){
    cy.visit(Cypress.env('url'));
})

When('User add items to cart and checks cart',function(){
    homePage.getSearchTextBox().type(this.data.itemOne);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each((el, index, $list)=>{
        if(el.text()==this.data.itemOneDes){
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link);
            })
        }
    })
    productList.getAddToCart().click();
    //homePage.getDynamicSearch().clear();
    //cy.go('back');
 //   homePage.getSearchTextBox().clear()
/*
 *   homePage.getSearchTextBox().type(this.data.itemTwo);
 *   homePage.getSearchButton().click();
 *   productList.getIndividualProduct().each((el, index, $list)=>{
 *       if(el.text()==this.data.itemTwoDes){
 *           productList.gerProductClick().eq(index).then(function(elm){
 *               const link = elm.prop('href');
 *               cy.visit(link);
 *           })
 *       }
   })*/
   // productList.getAddToCart().click();
    homePage.getCart().click({force: true});

    let res;
    cartPage.getPrice().each((el, index, $list)=>{
            res = el.text();
    })
    cartPage.getTotalPrice().then(function(el){
        const total = el.text();
        expect(total).to.equals(res);
    })
})

And('Click on Proceed to buy',function(){
    cartPage.getProceedButton().click();
})

Then('Validate Signin page appears',function(){
    siniin.getEmailTextBox().should('be.visible');
})