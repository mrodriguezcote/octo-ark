@test
Feature: Adding to Cart
  As a user of the Southern Tide site
  I want to be able to add products to cart through all possible channels

  Background: Starting on the homepage
    Given I am on the homepage

  Scenario: From product page
    And I request the product page
    Then I should reach the product page with visible ATC
    When I select color and size and click the ATC button
    Then The product should display in mini cart

  # Scenario: From wishlist
  #   And I request the login page
  #   When I use my credentials to log in
  #   And I go to my wishlist and click ATC
  #   When The product is removed from wishlist
  #   And I click the mini cart icon
  #   Then The product should display in mini cart

  Scenario: From my account (reorder)
    And I request the login page
    When I use my credentials to log in
    And I go to a previous order and click Reorder
    Then The product should display in cart page
