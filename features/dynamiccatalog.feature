Feature: SauceDemo dynamic catalog module
 
  Background:
    Given User launch the SauceDemo application
    When User logs in with valid credentials
 
  @regression
  Scenario: User dynamic catalog module
    When User click lazy Dynamic Catalog
    Then Verify user should be navigated to the dynamic catalog
    When User click Spinner Catalog
    Then Verify user should be navigated to the spinner
    When User click Slider Catalog
    Then Verify user should be navigated to the slider
    