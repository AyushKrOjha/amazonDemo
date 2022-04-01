import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/PageObject/HomePage"
import Imdb from "../../../../support/PageObject/Imdb";

const homePage = new HomePage();
const imdb = new Imdb();

Given('User opens amazon homepage',function(){
    cy.visit(Cypress.env('url'));
})

When('User Click on IMDB Link',function(){
    homePage.getImdbLink().click();
})

And('Search a movie and clicks on watch with prime',function(){
    imdb.getSurchBox().type(this.data1.movie);
    imdb.getMoviesTital().each((el, index, $list)=>{
        const text = el.text();
        if(text.includes(this.data1.movie)){
            cy.wrap(el).click();
            return false;
        }
    })
    imdb.getPrimeButton().invoke('removeAttr','target').click();
})

Then('Prime Video link should open and searched movie page should open',function(){
    imdb.getMovieTitle().then(function(el){
        const text = el.text();
        expect(text).to.equals(this.data1.movie);
    })
})