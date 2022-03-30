Feature: Adding items to cart

    user does not log in and tries to adds items to his cart and click on proceed to purchase

    Scenario: Add items
    Given User open amazon home page
    When User add items to cart and checks cart 
    And Click on Proceed to buy
    Then Validate Signin page appears
