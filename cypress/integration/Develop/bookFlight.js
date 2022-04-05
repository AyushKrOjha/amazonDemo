import HomePage from "../../support/PageObject/HomePage";
import SignInnPage from "../../support/PageObject/SignInnPage";
import BookFlight from "../../support/PageObject/BookFlight";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const bookFlight = new BookFlight();

describe('flightBooking',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('flight').then(function(dt){
            this.dt=dt
        })
    })
    it('User tries to book a flight from amazon',function(){
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
        homePage.getFlightTicket().click();

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

        bookFlight.getFlightDetails().should('be.visible');
    })
})