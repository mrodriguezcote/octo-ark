Feature: Example feature
  As a user of octo-ark
  I want to have access to the project repo
  So that I can read the documentation

  Scenario: Reading documentation
    Given I am on the author GitHub page
    When I click on "octo-ark"
    Then I should see the project page