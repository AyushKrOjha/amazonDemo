Feature: Invalid Password

    User enters invalid password

    Scenario: User enters invalid password
    Given User opens amazon homepage 
    When User click on Signin button
    And Enter Invalid Credentials 
    Then Error message should be displayed