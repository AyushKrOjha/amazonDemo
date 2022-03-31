import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";
import ProductPage from "../../../../support/PageObject/ProductPage";
import GiftCard from "../../../../support/PageObject/GiftCard";
import CartPage from "../../../../support/PageObject/CartPage";
import ProductList from "../../../../support/PageObject/ProductList";
import { expect } from "chai";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productPage = new ProductPage();
const giftCards = new GiftCard();
const cartPage = new CartPage();
const productList = new ProductList();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('User opens amazon homepage and Signin',function(){
    cy.visit(Cypress.env('url'));
    let nameText
    let text = this.data.name

    homePage.getSignNameText().then(function(el){
        nameText = el.text()
    })
    homePage.getSignInButton().click();

    if(nameText != text){
        signInnPage.getEmailTextBox().type(this.data.username);
        signInnPage.getContinueButton().click();
        signInnPage.getPasswordTextBox().type(this.data.password);
        signInnPage.getSigningButton().click();
    }
})

When('User types required product in search box and clicks on required product',function(){
    homePage.getSearchTextBox().type(this.data1.product);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each(($el, index, $list)=>{
        if($el.text()==this.data1.details){
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link);
            })
        }return false;
    })
})

And('Product detail page opens',function(){
    productPage.getProductTitle().then(function(el){
        const text = el.text()
        expect(text.includes(this.data1.details))
    })
})

Then('User validaes the product and click on proceed to buy',function(){
    productPage.getBuyNowButton().click()
    cartPage.getPromotionCode().should('be.visible');
})