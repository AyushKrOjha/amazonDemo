import HomePage from "../../support/PageObject/HomePage";
import SignInnPage from "../../support/PageObject/SignInnPage";
import ProductList from "../../support/PageObject/ProductList";
import WishList from "../../support/PageObject/WishList";
import CartPage from "../../support/PageObject/CartPage";
import { expect } from "chai";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productList = new ProductList();
const wishList = new WishList();
const cartPage = new CartPage();

describe('wishList',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('wishlist').then(function(data1){
            this.data1=data1
        })
    })
    it('Adding Items to WishList',function(){
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

        wishList.getYourList().should('be.visible');

        wishList.getComments().click();
        wishList.getCommentTextBox().type(this.data1.Comment);
        wishList.getSaveComment().click();

        wishList.getAddtoCart().click();
        wishList.getCarts().click();

        cartPage.getCartFirstEl().then(function(el){
            const text = el.text();
            expect(text.includes(this.data1.itemsDes));
        })
    })
})