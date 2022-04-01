Feature: Booking Flights

    User Books flights from amazon
    Scenario: User books flight from amazon.in
    Given User opens amazon homepage and Signin
    When User navigates to flight booking on amazon
    And Provides journey details and click on book flight
    Then flight details page should be displayed