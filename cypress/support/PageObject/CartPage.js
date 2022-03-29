class CartPage{
    getPrice(){
        return cy.get("div[data-name='Active Items'] p span span");
    }
    getTotalPrice(){
        return cy.get("span[id='sc-subtotal-amount-activecart'] span span");
    }
    getProceedButton(){
        return cy.get("input[name='proceedToRetailCheckout']");
    }
    getAddress(){
        return cy.get(".clearfix");
    }
}
export default CartPage;