Feature: Signin to amazon.com

    User Tries to sign in to amazon.com

    Scenario: User Signin
    Given I open amazon home page
    When I click on Signin button
    And Enter Valid Credentials 
    Then User logs in to the website