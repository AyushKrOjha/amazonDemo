class ProductList{
    getIndividualProduct(){
        return cy.get("div[data-component-type='s-search-result'] div h2 a span");
    }
    gerProductClick(){
        return cy.get("div[data-component-type='s-search-result'] div h2 a");
    }
    getAddToCart(){
        return cy.get("#add-to-cart-button");
    }
    getAddWishList(){
        return cy.get("#add-to-wishlist-button-submit");
    }
}
export default ProductList;