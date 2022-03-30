Feature: Adding items to wishlist 

    Adding items to Wishlist 

    Scenario: Wishlist
    Given User opens amazon homepage Signin
    When User adds items to his wishlist 
    And Validate Wishlist  
    Then adds comments to his cart
    When User Clicks on add to cart 
    Then Wishlist items should be reflected in cart 