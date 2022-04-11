///<reference types="cypress"/>
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
    let count = 0 
    productList.getIndividualProduct().each((el, index, $list)=>{
        let text = el.text()
        if(text===description && count == 0){
            count++
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link)
                return false;
            })
        }
    })
})

Cypress.Commands.add('newSelectProduct', (productName, description) => {
    homePage.getSearchTextBox().type(productName);
    homePage.getSearchButton().click();
    cy.intercept("https://www.amazon.in/cart/ewc/compact?hostPageType=Search&hostSubPageType=List&hostPageRID=GKCG32YDQKY8CX82T1N8&prerender=0&freshCartCount=0&almCartCount=0&widerCompactView=true&_=1649254035955").as('searchWindow')
    cy.wait('@searchWindow')
    let count = 0 
    productList.getIndividualProduct().each((el, index, $list)=>{
        let text = el.text()
        if(text===description && count == 0){
            count++
            productList.gerProductClick().eq(index).then(function(elm){
                const link = elm.prop('href');
                cy.visit(link)
                return false;
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
        cy.intercept("https://unagi.amazon.in/1/events/com.amazon.csm.csa.prod").as('load1')
        homePage.getSignInButton().click();
        cy.wait('@load1')
        signInnPage.getEmailTextBox().type(userid);
        signInnPage.getContinueButton().click();
        cy.wait('@load1')
        signInnPage.getPasswordTextBox().type(password);
        //cy.intercept("https://www.amazon.in/ah/ajax/counter?ctr=desktop_ajax_atf&exp=1649255016932&rId=NP160P5G2KRZMW4A5CTK&mkId=A21TJRUUN4KGV&h=52b013a4daf466b4286cdd253066f84b8637c93c0ec881ce052c1a3faadc98a5").as('load2')
        signInnPage.getSigningButton().click();
        //cy.wait('@load2')
        cy.request('https://images-eu.ssl-images-amazon.com/images/I/11Y+5x+kkTL._RC%7C5110husWMzL.js,11yKORv-GTL.js,11giXtZCwVL.js,01+z+uIeJ-L.js,01VRMV3FBdL.js,21SDJtBU-PL.js,012FVc3131L.js,11rRjDLdAVL.js,51RzYQslpZL.js,11kWu3cNjYL.js,11tMohjWmVL.js,11OREnu1epL.js,11wcWdhrnDL.js,21ssiLNIZvL.js,0190vxtlzcL.js,51+N26vFcBL.js,01JYHc2oIlL.js,31R9m8rig5L.js,01ezj5Rkz1L.js,11bEz2VIYrL.js,31o2NGTXThL.js,01rpauTep4L.js,01Uy0PNmclL.js_.js?AUIClients/AmazonUI').then((response) => {
            expect(response.status).to.eq(200)
        })
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
