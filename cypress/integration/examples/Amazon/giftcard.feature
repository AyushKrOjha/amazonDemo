Feature: giftcard

    User purchases giftcards

    Scenario: User purchases giftcard 
    Given User opens amazon homepage Signin
    When User opens giftcard module and select birthday card
    And Enters Giftcard details and click on proceed to buy
    Then User should be able to purchase the card 