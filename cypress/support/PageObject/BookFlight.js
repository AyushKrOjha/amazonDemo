class BookFlight{
    getFrom(){
        return cy.get('._82328473');
    }
    getTo(){
        return cy.get('._5edc825e');
    }
    getText(){
        return cy.get('div._1a6c1b03 p');
    }
    getSearch(){
        return cy.get('._7e41f983');
    }
    getBook(){
        return cy.get(':nth-child(3) > ._0d5ac290 > a > ._7e41f983');
    }
    getFlightDetails(){
        return cy.get('.d7b2a52c');
    }
}
export default BookFlight;