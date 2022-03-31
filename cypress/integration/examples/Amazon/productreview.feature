Feature: Product Review

    User Reviews Product
    Scenario: User Reviews Products
    Given User opens amazon homepage Signin
    When User selects a product to Review
    And Click on write a review butten
    Then Error page displayed since new users can not review