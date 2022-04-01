class Imdb{
    getSurchBox(){
        return cy.get("#suggestion-search");
    }
    getMoviesTital(){
        return cy.get(".sc-hBEYos.dWjUC.searchResult__constTitle");
    }
    getPrimeButton(){
        return cy.get("a[data-testid='tm-box-pwo-btn']");
    }
    getMovieTitle(){
        return cy.get("h1[data-automation-id='title']");
    }
}
export default Imdb;