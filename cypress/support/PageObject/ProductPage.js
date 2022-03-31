class ProductPage{
    getProductTitle(){
        return cy.get("#title_feature_div span");
    }
    getBuyNowButton(){
        return cy.get('#buy-now-button');
    }
    getViewRatings(){
        return cy.get('#averageCustomerReviews_feature_div > #averageCustomerReviews > [data-action="acrLink-click-metrics"] > #acrCustomerReviewLink > #acrCustomerReviewText');
    }
    getReviewButton(){
        return cy.get("a[data-hook='write-review-button']");
    }
    getReviewErrorMsg(){
        return cy.get('.a-color-error > span > a');
    }
}
export default ProductPage;