import { beforeEach } from "mocha";

beforeEach(function(){
    cy.fixture('signin').then(function(data){
        this.data=data
    })
    cy.fixture('imdb').then(function(data1){
        this.data1=data1
    })
})