@test
Feature: Product registration as guest user
  As a user of the Yeti site
  I want to be able to register my Yeti product

  Background: Proceeding through registration
    Given I am on the homepage
    Then I can reach the Registration page through the footer
    When I make a product selection
    And I input a valid registration number
    And I fill in my shipping information
    When I click the Register button
    Then I should see a registration success page

  Scenario: Creating an account after registration
    When I submit the registration with a new email address
    Then I should see a success page with the ability to create an account

  Scenario: Logging in after registration
    When I submit the registration with an existing email address
    Then I should see a success page with the ability to log in


