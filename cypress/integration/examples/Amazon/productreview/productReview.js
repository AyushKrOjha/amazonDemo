import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";
import ProductList from "../../../../support/PageObject/ProductList";
import ProductPage from "../../../../support/PageObject/ProductPage";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productList = new ProductList();
const productPage = new ProductPage();

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

When('User selects a product to Review',function(){
    homePage.getSearchTextBox().type(this.data1.product);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each((el, index, $list)=>{
        if(el.text()==this.data1.productdes){
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link);
            })
            return false;
        }
    })
})

And('Click on write a review butten',function(){
    productPage.getViewRatings().click();
    productPage.getReviewButton().click();
})

Then('Error page displayed since new users can not review',function(){
    productPage.getReviewErrorMsg().should('be.visible');
})