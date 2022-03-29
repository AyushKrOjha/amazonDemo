class SignInnPage{
    getEmailTextBox(){
        return cy.get("#ap_email");
    }
    getContinueButton(){
        return cy.get("#continue");
    }
    getPasswordTextBox(){
        return cy.get("#ap_password");
    }
    getSigningButton(){
        return cy.get("#signInSubmit");
    }
}
export default SignInnPage;