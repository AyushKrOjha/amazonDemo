class WishList{
    getViewWishList(){
        return cy.get("#huc-view-your-list-button a");
    }
    getComments(){
        return cy.get('#itemEditLabel_I1Y1ITXUZ5QGRF');
    }
    getCommentTextBox(){
        return cy.get('#WLNOTES_Comment');
    }
    getSaveComment(){
        return cy.get("input[aria-labelledby='WLNOTES_save-announce']");
    }
    getYourList(){
        return cy.get('#my-lists-tab > a > div');
    }
    getAddtoCart(){
        return cy.get('#pab-I1Y1ITXUZ5QGRF > .a-button-inner > .a-button-text');
    }
    getCarts(){
        return cy.get('#nav-cart');
    }
}
export default WishList;