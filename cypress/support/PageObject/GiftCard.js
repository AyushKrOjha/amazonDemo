class GiftCard{
    getBirthdayCheckbox(){
        return cy.contains('Birthday');
    }
    getBirthdayCard(){
        return cy.get("img[src='https://images-eu.ssl-images-amazon.com/images/I/515b3m9W5sL.jpg']");
    }
    getBirthdayImage(){
        return cy.get('#gc-mini-picker-design-swatch-image-2');
    }
    getCardAmount(){
        return cy.get('#a-autoid-10 > .a-button-inner > #gc-mini-picker-amount-1');
    }
    getBuyNow(){
        return cy.get('#gc-buy-box-bn');
    }
}
export default GiftCard;