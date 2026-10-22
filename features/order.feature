Feature: SauceDemo Order placement
 
  Background:
    Given User launch the SauceDemo application
    When User logs in with valid credentials
 
  @regression
  Scenario: User can place order and logout
    When User add items to the cart and proceeds to checkout
    And User provides checkout information
    When User reviews the order and finishes checkout
    And Verify user lands on the complete page
    When User logs out from the application
    Then Verify the user should land on the login page
    