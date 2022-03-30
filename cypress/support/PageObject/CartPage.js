class CartPage{
    getPrice(){
        return cy.get("span.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap.sc-product-price.a-text-bold");
    }
    getTotalPrice(){
        return cy.get("#sc-subtotal-amount-buybox span.a-size-medium.a-color-base.sc-price.sc-white-space-nowrap");
    }
    getProceedButton(){
        return cy.get("input[name='proceedToRetailCheckout']");
    }
    getAddress(){
        return cy.get(".clearfix");
    }
    getCartFirstEl(){
        return cy.get('#itemName_I1Y1ITXUZ5QGRF');
    }
    getPromotionCode(){
        return cy.get('.a-row.a-spacing-base > :nth-child(1) > .a-size-medium');
    }
}
export default CartPage;