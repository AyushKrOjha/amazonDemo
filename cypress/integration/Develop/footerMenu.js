import HomePage from "../../support/PageObject/HomePage"
import Imdb from "../../support/PageObject/Imdb";

const homePage = new HomePage();
const imdb = new Imdb();

describe('footer menu options',function(){
    before(function(){
        cy.fixture('signin').then(function(data){
            this.data=data
        })
        cy.fixture('imdb').then(function(data1){
            this.data1=data1
        }) 
    })
    it('User tries to navigate to IMDB page',function(){
        cy.visit(Cypress.env('url'));

        homePage.getImdbLink().click();

        imdb.getSurchBox().type(this.data1.movie);
        imdb.getMoviesTital().each((el, index, $list)=>{
            const text = el.text();
            if(text.includes(this.data1.movie)){
                cy.wrap(el).click();
                return false;
            }
        })
        imdb.getPrimeButton().invoke('removeAttr','target').click();

        imdb.getMovieTitle().then(function(el){
            const text = el.text();
            expect(text).to.equals(this.data1.movie);
        })
    })
})