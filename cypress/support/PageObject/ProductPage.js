class ProductPage{
    getProductTitle(){
        return cy.get("#title_feature_div span");
    }
    getBuyNowButton(){
        return cy.get('#buy-now-button');
    }
}
export default ProductPage;