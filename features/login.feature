Feature: Login functionality



    Background:
    Given User launch the SauceDemo application
 
  @smoke
  Scenario: User can login with valid credentials
    When User logs in with valid credentials
    Then Verify user should be navigated to the home page
    When User click about
    Then Verify user should be navigated to the about page
    When Back to Products page
    Then Verify user should be navigated back to the product page
    When Sort Product Name Z to A
    When Sort Product Low to High
    When Sort Product High to Low
 
  @regression
  Scenario: User can validate an error with Invalid credentials
    When User attempts login with Invalid credentials
    Then User should verify an error message
 
  @sanity @regression
  Scenario: User can login and logout successfully
    When User logs in with valid credentials
    When User logs out from the application
    Then Verify the user should land on the login page