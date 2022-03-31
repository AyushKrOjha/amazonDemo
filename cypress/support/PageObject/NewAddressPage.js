class NewAddressPage{
    getFullName(){
        return cy.get('#address-ui-widgets-enterAddressFullName');
    }
    getMobileNo(){
        return cy.get('#address-ui-widgets-enterAddressPhoneNumber');
    }
    getPostalCode(){
        return cy.get('#address-ui-widgets-enterAddressPostalCode');
    }
    getAddressLineOne(){
        return cy.get('#address-ui-widgets-enterAddressLine1');
    }
    getAddressLineTwo(){
        return cy.get('#address-ui-widgets-enterAddressLine2');
    }
    getLandmark(){
        return cy.get('#address-ui-widgets-landmark');
    }
    getMakeDefault(){
        return cy.get('#address-ui-widgets-use-as-my-default')
    }
    getAddadButton(){
        return cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input');
    }
    getName(){
        return cy.get('#address-book-entry-0 > .js-same-height > .displayAddressDiv > .displayAddressUL > .displayAddressFullName > b');
    }
}
export default NewAddressPage;