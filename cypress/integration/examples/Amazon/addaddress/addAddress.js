import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";
import AccountPage from "../../../../support/PageObject/AccountPage";
import NewAddressPage from "../../../../support/PageObject/NewAddressPage";
import CartPage from "../../../../support/PageObject/CartPage";
import { expect } from "chai";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const accountPage = new AccountPage();
const newAddressPage = new NewAddressPage();
const cartPage = new CartPage();

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

When('User navigates to your account and click on add address button',function(){
    homePage.getAllButton().click();
    homePage.getYourAccount().click();
    accountPage.getAccount().click();
    accountPage.getAddAddrButton().click();
})

And('Provides there address',function(){
    newAddressPage.getFullName().type(this.data1.FullName);
    newAddressPage.getMobileNo().type(this.data1.mobileNo);
    newAddressPage.getPostalCode().type(this.data1.PostalCode);
    newAddressPage.getAddressLineOne().type(this.data1.Line1);
    newAddressPage.getAddressLineTwo().type(this.data1.Line2);
    newAddressPage.getLandmark().type(this.data1.landmark);
    newAddressPage.getMakeDefault().click();
    newAddressPage.getAddadButton().click();
}) 

And('Visits cart and click on purchase button',function(){
    homePage.getCart().click();
    cartPage.getProceedButton().click();
})


Then('Delivery address should appear in Review your order page',function(){
    newAddressPage.getName().then(function(el){
        const text = el.text();
        expect(text).to.equals(this.data1.FullName);
    })
})