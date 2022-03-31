Feature: Adding address

    user addes his address
    Scenario: User addes his delivery address 
    Given User opens amazon homepage and Signin
    When User navigates to your account and click on add address button
    And Provides there address 
    And Visits cart and click on purchase button
    Then Delivery address should appear in Review your order page