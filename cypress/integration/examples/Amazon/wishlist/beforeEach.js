import { beforeEach } from "mocha";

beforeEach(function(){
    cy.fixture('signin').then(function(data){
        this.data=data
    })
    cy.fixture('wishlist').then(function(data1){
        this.data1=data1
    })
})