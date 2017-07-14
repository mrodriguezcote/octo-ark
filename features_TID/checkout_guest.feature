@test
Feature: Checkout - Guest
  As a guest user of the Southern Tide site
  I want to be able to checkout with all methods possible

  Background: Starting as a guest user
    Given I am on the homepage
    And I place a product in my cart
    Then The product should display in mini cart
    When I request the checkout page
    And I proceed as a guest
    And I fill out billing information
    And I select ship to same address and continue
    And I select a shipping method and continue

  Scenario: With credit card only
    Given I select credit card as the payment method
    And I submit a valid credit card
    #Then I can place my order and see the confirmation page

  Scenario: With credit card and gift card
    Given I check the gift card and promo code checkbox
    And I submit a valid gift card code
    Given I select credit card as the payment method
    And I submit a valid credit card
    #Then I can place my order and see the confirmation page

  Scenario: With credit card and gift card and promo code
    Given I check the gift card and promo code checkbox
    And I submit a valid gift card code
    When I check the gift card and promo code checkbox
    And I submit a valid promo code
    Given I select credit card as the payment method
    And I submit a valid credit card
    #Then I can place my order and see the confirmation page

  Scenario: With gift card only
    Given I check the gift card and promo code checkbox
    And I submit a valid gift card code that covers the entire order
    And I continue to Order Review
    #Then I can place my order and see the confirmation page

  Scenario: With gift card and promo code
    Given I check the gift card and promo code checkbox
    And I submit a valid gift card code
    When I check the gift card and promo code checkbox
    And I submit a valid promo code that covers the entire order
    And I continue to Order Review
    #Then I can place my order and see the confirmation page

  # Scenario: With Paypal only
  #   Given I select paypal as the payment method
  #   And I can continue to Paypal page
  #   #Then I can place my order and see the confirmation page
