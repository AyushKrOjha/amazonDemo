import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";
import GiftCard from "../../../../support/PageObject/GiftCard"
import CartPage from "../../../../support/PageObject/CartPage";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const giftCards = new GiftCard();
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

When('User opens giftcard module and select birthday card',function(){
    homePage.getGiftCard().click({force: true});
    giftCards.getBirthdayCheckbox().click();
    giftCards.getBirthdayCard().click();
})

And('Enters Giftcard details and click on proceed to buy',function(){
    giftCards.getBirthdayImage().click();
    giftCards.getCardAmount().click();
    giftCards.getBuyNow().click();
})

Then('User should be able to purchase the card',function(){
    //Payment page should appear
    cartPage.getPromotionCode().should('be.visible');
})