class AccountPage{
    getAccount(){
        return cy.get(':nth-child(3) > :nth-child(1) > .ya-card__whole-card-link > .a-box > .a-box-inner');
    }
    getAddAddrButton(){
        return cy.get('#ya-myab-address-add-link > .a-box');
    }
}
export default AccountPage;