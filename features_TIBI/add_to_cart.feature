@test
Feature: Adding to Cart
  As a user of the Tibi site
  I want to be able to add products to cart through all possible channels

  Background: Starting on the homepage
    Given I am on the homepage

  Scenario: From product page
    And I request the product page
    Then I should reach the product page with visible ATC
    When I select color and size and click the ATC button
    Then The product should display in mini cart