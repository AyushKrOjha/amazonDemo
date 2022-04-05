import HomePage from "../../support/PageObject/HomePage";
import SignInnPage from "../../support/PageObject/SignInnPage";
import ProductList from "../../support/PageObject/ProductList";
import ProductPage from "../../support/PageObject/ProductPage";

const homePage = new HomePage();
const signInnPage = new SignInnPage();
const productList = new ProductList();
const productPage = new ProductPage();

describe('Product Review',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    
    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('review').then(function(data1){
            this.data1=data1
        })
    })
    it('User reviews a product',function(){
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

        homePage.getSearchTextBox().type(this.data1.product);
        homePage.getSearchButton().click();
        productList.getIndividualProduct().each((el, index, $list)=>{
            if(el.text()==this.data1.productdes){
                productList.gerProductClick().eq(index).then(function(elm){
                    const link = elm.prop('href');
                    cy.visit(link);
                })
                return false;
            }
        })
        productPage.getViewRatings().click();
        productPage.getReviewButton().click();

        productPage.getReviewErrorMsg().should('be.visible');
    })
})