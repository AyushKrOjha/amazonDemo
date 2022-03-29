import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";

const homePage = new HomePage();
const signInnPage = new SignInnPage();

Given('User open amazon home page',function(){
    cy.visit(Cypress.env('url'));
})

When('User click on Signin button',function(){
    homePage.getSignInButton().click();
})

And('Enter Valid Credentials',function(){
    signInnPage.getEmailTextBox().type(this.data.username);
    signInnPage.getContinueButton().click();
    signInnPage.getPasswordTextBox().type(this.data.password);
    signInnPage.getSigningButton().click();
}) 

Then('User logs in to the website',function(){
    homePage.getSignNameText().then(function(el){
        const atext = el.text()
        expect(atext).to.equal(this.data.name)
    })
})