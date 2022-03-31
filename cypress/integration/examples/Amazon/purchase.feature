Feature: Purchase

    User Purchase any Product 
    Scenario: Purchasing apple keyboard
    Given User opens amazon homepage and Signin
    When User types required product in search box and clicks on required product
    And Product detail page opens 
    Then User validaes the product and click on proceed to buy 