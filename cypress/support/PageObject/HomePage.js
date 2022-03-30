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
}

export default HomePage;