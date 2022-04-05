import HomePage from "../support/PageObject/HomePage";
import SignInnPage from "../support/PageObject/SignInnPage";
import ProductList from "../support/PageObject/ProductList";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productList = new ProductList();

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('SelectProduct', (productName, description) => {
    homePage.getSearchTextBox().type(productName);
    homePage.getSearchButton().click();
    productList.getIndividualProduct().each((el, index, $list)=>{
        if(el.text()==description){
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link);
            })
        }
    })
})

Cypress.Commands.add('login', (userid, password, check) => {
    let nameText
    let text = check

    homePage.getSignNameText().then(function(el){
        nameText = el.text()
    })

    if(nameText != text){
        homePage.getSignInButton().click();
        signInnPage.getEmailTextBox().type(userid);
        signInnPage.getContinueButton().click();
        signInnPage.getPasswordTextBox().type(password);
        signInnPage.getSigningButton().click();
    }
})
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
