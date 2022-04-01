import { beforeEach } from "mocha";

beforeEach(function(){
    cy.fixture('signin').then(function(data){
        this.data=data
    })
    cy.fixture('flight').then(function(dt){
        this.dt=dt
    })
})