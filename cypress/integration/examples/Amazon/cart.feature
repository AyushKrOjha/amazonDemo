Feature: Adding items to cart

    user addes multiple items to cart

    Scenario: Add items
    Given User open amazon home page
    When User add items to cart and checks cart 
    And Click on Proceed to buy
    Then Validate add address page appears
