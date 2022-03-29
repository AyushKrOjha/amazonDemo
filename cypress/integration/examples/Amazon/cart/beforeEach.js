import { beforeEach } from "mocha";

beforeEach(function(){
    cy.fixture('cart').then(function(data){
        this.data=data
    })
})