import HomePage from "../../support/PageObject/HomePage";
import SignInnPage from "../../support/PageObject/SignInnPage";
import GiftCard from "../../support/PageObject/GiftCard"
import CartPage from "../../support/PageObject/CartPage";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const giftCards = new GiftCard();
const cartPage = new CartPage();

describe('gift card',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('giftcard').then(function(data1){
            this.data1=data1
        })
    })
    it('user purchases gift card',function(){
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

        homePage.getGiftCard().click({force: true});
        giftCards.getBirthdayCheckbox().click();
        giftCards.getBirthdayCard().click();

        giftCards.getBirthdayImage().click();
        giftCards.getCardAmount().click();
        giftCards.getBuyNow().click();

        //Payment page should appear
        cartPage.getPromotionCode().should('be.visible');
    })
})