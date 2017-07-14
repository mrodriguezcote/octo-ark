@test
Feature: Checkout - Logged In
  As a logged in user of the Southern Tide site
  I want to be able to checkout with all possible methods

  Background: Starting as a logged in user
    Given I am on the homepage
    And I request the login page
    When I use my credentials to log in
    When I request the checkout page
    And I select ship to same address and continue
    And I select a shipping method and continue

  Scenario: With credit card and store credit 
    Given I check the store credit checkbox
    And I select credit card as the payment method
    And I submit a valid credit card
    #Then I can place my order and see the confirmation page

  Scenario: With credit card and store credit and promo code 
    Given I check the store credit checkbox
    When I check the gift card and promo code checkbox
    And I submit a valid promo code
    When I select credit card as the payment method
    And I submit a valid credit card
    #Then I can place my order and see the confirmation page


## Need to login with different account with enough store credit
  # Scenario: With store credit only
  #   Given I check the store credit checkbox
  #   And no other payment methods are listed
  #   And I continue to Order Review
  #   #Then I can place my order and see the confirmation page