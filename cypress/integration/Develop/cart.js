import HomePage from "../../support/PageObject/HomePage";
import ProductList from "../../support/PageObject/ProductList";
import CartPage from "../../support/PageObject/CartPage";
import SignInnPage from "../../support/PageObject/SignInnPage"
import { expect } from "chai";

const homePage = new HomePage();
const productList = new ProductList();
const cartPage = new CartPage();
const siniin = new SignInnPage();

describe('Cart',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    before(function(){
        cy.fixture('cart').then(function(data){
            this.data=data
        })
    })
    it('adding items to cart',function(){
        cy.visit(Cypress.env('url'));
        homePage.getSearchTextBox().type(this.data.itemOne);
        homePage.getSearchButton().click();
        productList.getIndividualProduct().each((el, index, $list)=>{
            if(el.text()==this.data.itemOneDes){
                productList.gerProductClick().eq(index).then(function(elm){
                    const link = elm.prop('href');
                    cy.visit(link);
                })
            }
        })
        productList.getAddToCart().click();

        homePage.getCart().click({force: true});

        let res;
        cartPage.getPrice().each((el, index, $list)=>{
            res = el.text();
        })
        cartPage.getTotalPrice().then(function(el){
            const total = el.text();
            expect(total).to.equals(res);
        })

        cartPage.getProceedButton().click();

        siniin.getEmailTextBox().should('be.visible');
    })  
})