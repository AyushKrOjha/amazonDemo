class HomePage{
    getSignInButton(){
        return cy.get("#nav-link-accountList");
    }
    getSearchTextBox(){
        return cy.get("#twotabsearchtextbox");
    }
    getSearchDropdowm(){
        return cy.get("#searchDropdownBox");
    }
    getSignNameText(){
        return cy.get("#nav-link-accountList-nav-line-1");
    }
    getDynamicSearch(){
        return cy.get('#nav-flyout-searchAjax div div div div');
    }
    getSearchButton(){
        return cy.get('#nav-search-submit-button');
    }
    getCart(){
        return cy.get('#nav-cart');
    }
    getGiftCard(){
        return cy.get("a[data-csa-c-content-id='nav_cs_gc']");
    }
    getAllButton(){
        return cy.get('#nav-hamburger-menu');
    }
    getYourAccount(){
        return cy.get(':nth-child(29) > .hmenu-item');
    }
    getFlightTicket(){
        return cy.get('.hmenu-visible > :nth-child(24) > .hmenu-item');
    }
    getImdbLink(){
        return cy.get("a[href='https://www.imdb.com/']");
    }
}

export default HomePage;