import HomePage from "../../support/PageObject/HomePage";
import SignInnPage from "../../support/PageObject/SignInnPage";
import ProductList from "../../support/PageObject/ProductList";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productList = new ProductList();

describe('purchase',function(){

    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });

    beforeEach(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('cart').then(function(data1){
            this.data1=data1
        })
    })

    it('user enters invalid password',function(){
        cy.visit(Cypress.env('url'));
        homePage.getSignInButton().click();
        signInnPage.getEmailTextBox().type(this.data.username);
        signInnPage.getContinueButton().click();
        signInnPage.getPasswordTextBox().type(this.data.invalid_password);
        signInnPage.getSigningButton().click();
        signInnPage.getInvalidPasswordMsg().should('be.visible');
    })

    it('user logs in',function(){
        cy.visit(Cypress.env('url'));
        homePage.getSignInButton().click();
        signInnPage.getEmailTextBox().type(this.data.username);
        signInnPage.getContinueButton().click();
        signInnPage.getPasswordTextBox().type(this.data.password);
        signInnPage.getSigningButton().click();
        homePage.getSignNameText().then(function(el){
            const atext = el.text()
            expect(atext).to.equal(this.data.name)
        })
    })

    it('user adds items to cart',function(){
        cy.visit(Cypress.env('url'));
        cy.SelectProduct(this.data1.itemOne,this.data1.itemOneDes);
        productList.getAddToCart().click({force: true});
        cy.SelectProduct(this.data1.itemTwo,this.data1.itemTwoDes);
        productList.getAddToCart().click({force: true});
    })
})