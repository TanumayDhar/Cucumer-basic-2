#screenshot added
# error in I click for Search Cars

Feature: Validation of car search page
  In order to validate car search 
  as a buyer
  I want to navigate http://www.carsguide.com.au

  Scenario: Searching for a new car
    Given I am on the home page https://www.carsguide.com.au/
    When I move to buy+sale menu
    Then I click for Search Cars
    And I select Make as "Audi"
    And I select model as "A1"
    And I select Location as "NSW - Central Coast"
    And I select Price as "$50,000"
    And I click Find my next car button option
    Then I should see list of cars
    And the page title should be "Audi A1 Under 50000 for Sale Central Coast NSW | carsguide"
