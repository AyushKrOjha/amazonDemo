/// <reference types="cypress"/>
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";

const homePage = new HomePage();
const signInnPage = new SignInnPage();

Given('User opens amazon homepage',function(){
    cy.visit(Cypress.env('url'));
})

When('User click on Signin button',function(){
    homePage.getSignInButton().click();
})

And('Enter Invalid Credentials',function(){
    signInnPage.getEmailTextBox().type(this.data.username);
    signInnPage.getContinueButton().click();
    signInnPage.getPasswordTextBox().type(this.data.invalid_password);
    signInnPage.getSigningButton().click();
}) 

Then('Error message should be displayed',function(){
    signInnPage.getInvalidPasswordMsg().should('be.visible');
})