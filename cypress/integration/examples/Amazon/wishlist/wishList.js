import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";
import ProductList from "../../../../support/PageObject/ProductList";
import WishList from "../../../../support/PageObject/WishList";
import CartPage from "../../../../support/PageObject/CartPage";
import { expect } from "chai";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productList = new ProductList();
const wishList = new WishList();
const cartPage = new CartPage();

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('User opens amazon homepage Signin',function(){
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

When('User adds items to his wishlist',function(){
    homePage.getSearchTextBox().type(this.data1.item);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each(($el, index, $list)=>{
        if($el.text()==this.data1.itemsDes){
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link);
            })
        }
    })
    productList.getAddWishList().click();
    wishList.getViewWishList().click();
}) 

And('Validate Wishlist',function(){
    wishList.getYourList().should('be.visible');
}) 

Then('adds comments to his cart',function(){
    wishList.getComments().click();
    wishList.getCommentTextBox().type(this.data1.Comment);
    wishList.getSaveComment().click();
}) 

When('User Clicks on add to cart',function(){
    wishList.getAddtoCart().click();
    wishList.getCarts().click();
}) 

Then('Wishlist items should be reflected in cart',function(){
    cartPage.getCartFirstEl().then(function(el){
        const text = el.text();
        expect(text.includes(this.data1.itemsDes));
    })
})