import HomePage from "../../support/PageObject/HomePage";
import SignInnPage from "../../support/PageObject/SignInnPage";
import AccountPage from "../../support/PageObject/AccountPage";
import NewAddressPage from "../../support/PageObject/NewAddressPage";
import CartPage from "../../support/PageObject/CartPage";
import { expect } from "chai";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const accountPage = new AccountPage();
const newAddressPage = new NewAddressPage();
const cartPage = new CartPage();

describe('adding address',function(){
    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('addaddress').then(function(data1){
            this.data1=data1
        })
    })
    it('User tries to add address',function(){
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

        homePage.getAllButton().click();
        homePage.getYourAccount().click();
        accountPage.getAccount().click();
        accountPage.getAddAddrButton().click();

        newAddressPage.getFullName().type(this.data1.FullName);
        newAddressPage.getMobileNo().type(this.data1.mobileNo);
        newAddressPage.getPostalCode().type(this.data1.PostalCode);
        newAddressPage.getAddressLineOne().type(this.data1.Line1);
        newAddressPage.getAddressLineTwo().type(this.data1.Line2);
        newAddressPage.getLandmark().type(this.data1.landmark);
        newAddressPage.getMakeDefault().click();
        newAddressPage.getAddadButton().click();

        homePage.getCart().click();
        cartPage.getProceedButton().click();

        newAddressPage.getName().then(function(el){
            const text = el.text();
            expect(text).to.equals(this.data1.FullName);
        })
    })
})