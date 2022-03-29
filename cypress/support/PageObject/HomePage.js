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
}

export default HomePage;