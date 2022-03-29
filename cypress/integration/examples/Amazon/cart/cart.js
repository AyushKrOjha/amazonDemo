import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import ProductList from "../../../../support/PageObject/ProductList";
import CartPage from "../../../../support/PageObject/CartPage";
import { expect } from "chai";

const homePage = new HomePage();
const productList = new ProductList();
const cartPage = new CartPage();

Given('User open amazon home page',function(){
    cy.visit(Cypress.env('url'));
})

When('User add items to cart and checks cart',function(){
    homePage.getSearchTextBox().type(this.data.itemOne);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each((el, index, $list)=>{
        if(el.text()==this.data.itemOneDes){
            productList.gerProductClick().eq(index).invoke('removeAttr','target').click();
        }
    })
    productList.getAddToCart().click();
    //homePage.getDynamicSearch().clear();
    cy.go('back');
    homePage.getSearchTextBox().clear()

    homePage.getSearchTextBox().type(this.data.itemTwo);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each((el, index, $list)=>{
        if(el.text()==this.data.itemTwoDes){
            productList.gerProductClick().eq(index).invoke('removeAttr','target').click();
        }
    })
    productList.getAddToCart().click({force: true});

    var sum;
    var res;
    cartPage.getPrice().each((el, index, $list)=>{
        res = el.text();
        sum = Number(sum)+Number(res);
    })
    cartPage.getTotalPrice().then(function(el){
        const total = el.text();
        expect(Number(total)).to.equal(Number(sum));
    })
})

And('Click on Proceed to buy',function(){
    cartPage.getProceedButton().click();
})

Then('Validate add address page appears',function(){
    cartPage.getAddress().should('be.visible');
})