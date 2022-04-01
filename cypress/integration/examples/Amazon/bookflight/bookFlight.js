import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage";
import SignInnPage from "../../../../support/PageObject/SignInnPage";
import BookFlight from "../../../../support/PageObject/BookFlight";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const bookFlight = new BookFlight();

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

When('User navigates to flight booking on amazon',function(){
    homePage.getAllButton().click();
    homePage.getFlightTicket().click();
})

And('Provides journey details and click on book flight',function(){
    bookFlight.getFrom().type("del")
    bookFlight.getText().each((el, index, $list)=>{
        if(el.text()=="New Delhi"){
            cy.wrap(el).click()
            return false;
        }
    })
    bookFlight.getTo().type("vns")
    bookFlight.getText().each((el, index, $list)=>{
        if(el.text()=="varanasi"){
            cy.wrap(el).click()
            return false;
        }
    })
    bookFlight.getSearch().click();
    bookFlight.getBook().click();
})

Then('flight details page should be displayed',function(){
    bookFlight.getFlightDetails().should('be.visible');
})