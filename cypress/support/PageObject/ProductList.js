class ProductList{
    getIndividualProduct(){
        return cy.get("div[data-component-type='s-search-result'] div h2 a span");
    }
    gerProductClick(){
        return cy.get("div[data-component-type='s-search-result'] div h2 a")
    }
    getAddToCart(){
        return cy.get("#add-to-cart-button");
    }
}
export default ProductList;